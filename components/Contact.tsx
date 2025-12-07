import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Send, Mail, MessageSquare, User, Github, Linkedin, Twitter, CheckCircle2 } from 'lucide-react';

// --- Physics Engine ---
const springPhysics = { type: "spring", stiffness: 100, damping: 20 } as const;
const focusPhysics = { type: "spring", stiffness: 300, damping: 25 } as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemBlurVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: springPhysics
  },
};

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-black text-white px-6 overflow-hidden">
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            variants={itemBlurVariant}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
          >
            Let's create something <br className="hidden md:block" />
            <span className="text-neutral-500">exceptional.</span>
          </motion.h2>
          <motion.p
            variants={itemBlurVariant}
            className="text-neutral-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Whether you have a project in mind, a bug to report, or just want to chat about the future of AI — I'm all ears.
          </motion.p>
        </div>

        {/* Form Container */}
        <motion.div
          variants={itemBlurVariant}
          className="relative bg-[#1C1C1E] border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          {/* Subtle Background Glow inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">

            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-mono text-neutral-500 uppercase tracking-wider ml-1">Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-3.5 text-neutral-500 group-focus-within:text-white transition-colors" size={18} />
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/5 rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-mono text-neutral-500 uppercase tracking-wider ml-1">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-3.5 text-neutral-500 group-focus-within:text-white transition-colors" size={18} />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/5 rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono text-neutral-500 uppercase tracking-wider ml-1">Message</label>
              <div className="relative group">
                <MessageSquare className="absolute left-4 top-3.5 text-neutral-500 group-focus-within:text-white transition-colors" size={18} />
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/5 rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button & Status */}
            <div className="pt-2">
              <motion.button
                type="submit"
                disabled={status !== 'idle'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={focusPhysics}
                className={`w-full py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-300 ${status === 'success'
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-black hover:bg-neutral-200'
                  }`}
              >
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
                {status === 'submitting' && (
                  <span className="animate-pulse">Sending...</span>
                )}
                {status === 'success' && (
                  <>
                    <span>Message Sent</span>
                    <CheckCircle2 size={18} />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Social Dock */}
        {/* <motion.div
          variants={itemBlurVariant}
          className="mt-16 flex justify-center gap-6"
        >
          {[
            { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
            { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#1C1C1E] border border-white/5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Contact;