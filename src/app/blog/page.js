"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog-posts";

export default function Blog() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Blog</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900">
              Insights & Updates
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Insights, guides, and updates on software development, AI, and technology trends.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="bg-surface rounded-2xl border border-gray-100 p-8 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                      <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                      <span>·</span>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="bg-primary-light text-primary px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="text-sm font-semibold text-primary group-hover:underline">
                      Read more →
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
