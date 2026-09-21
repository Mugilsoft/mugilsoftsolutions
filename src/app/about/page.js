"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const values = [
  { title: "Innovation", desc: "We stay ahead of the technology curve to deliver future-ready solutions.", icon: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )},
  { title: "Quality", desc: "Every line of code we write meets the highest standards of performance and reliability.", icon: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )},
  { title: "Transparency", desc: "Open communication and honest collaboration are at the heart of every engagement.", icon: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )},
  { title: "Client Focus", desc: "Your success is our success. We align our goals with yours.", icon: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )},
];

const steps = [
  { num: "01", title: "Discovery", desc: "We start by understanding your business, goals, and challenges through in-depth discovery sessions." },
  { num: "02", title: "Strategy", desc: "Our team designs a tailored roadmap that aligns technology with your business objectives." },
  { num: "03", title: "Development", desc: "Using agile methodologies, we build your solution iteratively with continuous feedback loops." },
  { num: "04", title: "Deployment & Support", desc: "We handle deployment, monitoring, and ongoing support to ensure long-term success." },
];

export default function About() {
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
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">About Us</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900">Who We Are</h1>
            <div className="mt-8 bg-white rounded-2xl p-8 border border-blue-50 shadow-lg shadow-blue-50 inline-block">
              <img src="/logo.png" alt="Mugil Soft Solutions Logo" className="w-full max-w-xs rounded-xl" />
            </div>
            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              At <strong className="text-primary">Mugil Soft Solutions</strong>, we are passionate about 
              leveraging technology to solve real-world problems. Founded with a vision to make 
              advanced software and AI accessible to businesses of all sizes, we combine deep 
              technical expertise with a client-first approach.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Our team of experienced engineers, designers, and data scientists works closely 
              with clients to understand their unique challenges and deliver solutions that drive 
              measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Values</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">What Drives Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-surface rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary-light text-primary rounded-xl flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Approach</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">How We Work</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <div className="text-5xl font-extrabold bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
