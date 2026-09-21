"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { stats, benefits, technologies, testimonials, whyChooseUs } from "@/data/homepage";
import { blogPosts } from "@/data/blog-posts";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const iconPaths = {
  chart: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  brain: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  coins: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
  rocket: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  scale: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
  ),
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] animate-float-slow" />
          <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-violet-500/15 rounded-full blur-[100px] animate-float-medium" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[130px] animate-float-fast" />
          <div className="absolute top-10 right-[30%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] animate-float-medium" />
          <div className="absolute bottom-10 left-[30%] w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[90px] animate-float-slow" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-white/10">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software & AI Development Company
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1]"
            >
              Building{" "}
              <span className="text-primary">Intelligent Software</span>{" "}
              That Drives{" "}
              <span className="text-primary">Business Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Custom applications, machine learning, cloud infrastructure, and
              digital transformation — everything your business needs to stay
              ahead of the competition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 text-lg"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="border border-white/20 bg-white/5 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white/30 transition-all text-lg"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-light border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 mt-2 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                Who We Are
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Combining Expertise and Technology to Deliver Solutions That
                Drive Results
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                At Mugil Soft Solutions, we are fueled by a passion for
                excellence and a relentless pursuit of innovation. Leveraging the
                power of advanced technologies, we transform business operations,
                improve outcomes, and drive operational efficiency. Our quality
                solutions, derived from industry-leading processes and unmatched
                experience, unlock meaningful, actionable insights to fast-track
                progress and expedite decision-making.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                The result is improved workflows, slashed costs, and streamlined
                business functions that give you a competitive edge.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="bg-primary text-white px-7 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-md shadow-primary/20 hover:-translate-y-0.5"
                >
                  Learn More
                </Link>
                <Link
                  href="/contact"
                  className="border border-gray-300 text-gray-700 px-7 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-10 md:p-14 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { n: "50+", l: "Projects" },
                    { n: "30+", l: "Clients" },
                    { n: "5+", l: "Years" },
                    { n: "15+", l: "Engineers" },
                  ].map((s) => (
                    <div key={s.l} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-3xl font-extrabold text-primary">{s.n}</div>
                      <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <p className="text-slate-300 text-sm italic">
                    &ldquo;Building tomorrow&apos;s technology, today.&rdquo;
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
              Leverage MugilSoft to
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {iconPaths[b.icon]}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Quick View */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Our Services
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
              Comprehensive Technology Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              End-to-end solutions from concept to deployment and beyond.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
                <Link
                  href="/services"
                  className="inline-block mt-4 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-semibold text-slate-500 tracking-widest uppercase mb-10"
          >
            Technologies We Work With
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-slate-300 hover:border-primary hover:text-primary transition-colors"
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Insights */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Insights
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">
              Latest From Our Blog
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(0, 4).map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span>&middot;</span>
                      <span>{post.author}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-sm font-semibold text-primary group-hover:underline">
                      Continue Reading &rarr;
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-block border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
            >
              Explore More Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Testimonials
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
              What Our Clients Say
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/8 transition-colors"
              >
                <div className="text-primary text-4xl font-serif mb-4">&ldquo;</div>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-orange-500 to-primary py-24">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              Ready to Build Something Great?
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto text-lg">
              Let&apos;s discuss your project and find the perfect solution for
              your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all shadow-lg hover:-translate-y-0.5 text-lg"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog"
                className="border border-white/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all text-lg"
              >
                Read Our Blog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
