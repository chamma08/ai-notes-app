"use client";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Brain, Sparkles, MessageSquare, Search, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <motion.main
          className="max-w-6xl mx-auto text-center"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Logo Section */}
          <motion.div className="mb-12" variants={scaleIn}>
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Image
                src={logo}
                alt="Smart Notes Logo"
                width={140}
                height={140}
                className="mx-auto drop-shadow-2xl"
                priority
              />
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-lg"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Title Section */}
          <motion.div className="mb-8" variants={fadeInUp}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Smart
              </motion.span>{" "}
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-yellow-600"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Notes
              </motion.span>
            </h1>
            <motion.div
              className="flex items-center justify-center gap-2 text-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span>AI-Powered Note Taking</span>
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
            variants={fadeInUp}
          >
            Transform your note-taking experience with intelligent AI integration.
            <br />
            <span className="font-medium text-foreground">Ask, search, and discover</span> insights from your notes like never before.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            variants={staggerChildren}
          >
            <motion.div
              className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Brain className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">Intelligent chatbot that understands your notes</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Search className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Search</h3>
              <p className="text-sm text-muted-foreground">Find information instantly with semantic search</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <MessageSquare className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Chat Interface</h3>
              <p className="text-sm text-muted-foreground">Natural conversations about your content</p>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="space-y-6"
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Button asChild size="lg" className="text-lg px-12 py-6 rounded-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-900 hover:to-yellow-500 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/notes" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Start your journey with Smart Notes today! Explore the power of AI in note-taking and discover how it can enhance your productivity and learning experience
            </motion.p>
          </motion.div>

          {/* Built with section */}
          <motion.div
            className="pt-16 text-sm text-muted-foreground"
            variants={fadeInUp}
          >
            <motion.div
              className="flex items-center justify-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <span>Powered by</span>
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">Convex</span>
              <span>&</span>
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">Vercel AI SDK</span>
            </motion.div>
          </motion.div>
        </motion.main>

        {/* Footer */}
        <footer className="mt-auto pt-16 pb-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <a
              href="https://my-portfolio-gtcu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 hover:scale-105 transform duration-200"
            >
              Developed by{" "}
              <span className="font-semibold">Matheesha</span>
            </a>
          </motion.div>
        </footer>
      </div>
    </div>
  );
}
