"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  {
    title: "Custom Software Development",
    desc: "We build bespoke desktop, web, and enterprise applications using modern frameworks and best practices. From initial concept through deployment and maintenance, we deliver robust, scalable software tailored to your business processes.",
    features: ["Full-stack web applications", "Enterprise software", "API development & integration", "Database design & optimization", "Legacy system modernization"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "AI & Machine Learning",
    desc: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent products. Our ML experts build custom models that deliver real business value.",
    features: ["Predictive analytics", "Natural language processing (NLP)", "Computer vision solutions", "Recommendation engines", "Chatbots & virtual assistants"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-700",
  },
  {
    title: "Web & Mobile Development",
    desc: "Create beautiful, responsive web applications and cross-platform mobile apps that deliver exceptional user experiences across all devices.",
    features: ["React/Next.js web apps", "Cross-platform mobile (React Native/Flutter)", "Progressive web apps (PWAs)", "E-commerce solutions", "Real-time applications"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-cyan-500 to-blue-700",
  },
  {
    title: "Cloud Services",
    desc: "Design, migrate, and manage cloud infrastructure on AWS, Azure, and GCP. We optimize for cost, performance, and security at any scale.",
    features: ["Cloud migration strategy", "Infrastructure as code", "Serverless architectures", "Cost optimization", "Security & compliance"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    gradient: "from-sky-500 to-cyan-700",
  },
  {
    title: "DevOps & CI/CD",
    desc: "Streamline your development lifecycle with automated pipelines, container orchestration, and monitoring solutions that accelerate delivery.",
    features: ["CI/CD pipeline setup", "Docker & Kubernetes", "Infrastructure monitoring", "Automated testing", "GitOps workflows"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    title: "UI/UX Design",
    desc: "Design-driven development that puts users first. We create intuitive interfaces that are both beautiful and functional.",
    features: ["User research & testing", "Wireframing & prototyping", "Visual design systems", "Accessibility (WCAG)", "Design-to-code handoff"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    gradient: "from-orange-500 to-red-600",
  },
];

export default function Services() {
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
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our Services</span>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900">
              Solutions Built for Impact
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Comprehensive technology services to take your business from idea to impact. 
              Every solution is custom-built for your unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`inline-flex w-14 h-14 bg-gradient-to-br ${service.gradient} text-white rounded-xl items-center justify-center mb-6 shadow-lg`}>
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <ul className="space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-700 via-primary to-violet-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Need a Custom Solution?
            </h2>
            <p className="mt-4 text-blue-100 max-w-xl mx-auto text-lg">
              Tell us about your project and we&apos;ll design a solution that fits.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-8 bg-white text-primary px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
