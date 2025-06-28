"use node";

import { v } from "convex/values";
import { action, internalAction } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { generateEmbedding, generateEmbeddings } from "../src/lib/embeddings";
import { internal } from "./_generated/api";
import { Doc, Id } from "./_generated/dataModel";

export const createNote = action({
  args: {
    title: v.string(),
    body: v.string(),
  },
  returns: v.id("notes"),

  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("User not authenticated");
    }

    const text = `${args.title}\n\n${args.body}`;

    const embeddings = await generateEmbeddings(text);

    const noteId: Id<"notes"> = await ctx.runMutation(
      internal.notes.createNoteWithEmbeddings,
      {
        title: args.title,
        body: args.body,
        userId,
        embeddings,
      }
    );

    return noteId;
  },
});

export const findReleventNotes = internalAction({
  args: {
    query: v.string(),
    userId: v.id("users"),
  },

  handler: async (ctx, args): Promise<Array<Doc<"notes">>> => {
    const embedding = await generateEmbedding(args.query);

    const results = await ctx.vectorSearch("noteEmbeddings", "by_embedding", {
      vector: embedding,
      limit: 16,
      filter: (q) => q.eq("userId", args.userId),
    });

    console.log("Search results:", results);

    const resultsAboveThreshold = results.filter(
      result => result._score > 0.3
    );

    const embeddingIds = resultsAboveThreshold.map(results => results._id);

    const notes = await ctx.runQuery(
      internal.notes.fetchNotesByEmbeddingIds, {
        embeddingIds
      })

      return notes
  },
});
