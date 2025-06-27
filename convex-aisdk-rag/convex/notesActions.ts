"use node";

import { v } from "convex/values";
import { action } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { generateEmbeddings } from "../src/lib/embeddings";
import { internal } from "./_generated/api";
import { Id } from "./_generated/dataModel";

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
