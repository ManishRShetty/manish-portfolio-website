'use client';

import React, { useEffect, useRef } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { motion, Variants } from 'framer-motion';
import { Send, Mail, MessageSquare, User, CheckCircle2 } from 'lucide-react';
import { submitContactForm, type ActionState } from '@/lib/actions/contact';

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

const initialState: ActionState = {
  success: false,
  message: '',
};

function SubmitButton({ isSuccess }: { isSuccess: boolean }) {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      disabled={pending || isSuccess}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={focusPhysics}
      className={`w-full py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-300 ${isSuccess
          ? 'bg-green-500 text-white'
          : pending
            ? 'bg-white text-black opacity-80 cursor-not-allowed'
            : 'bg-white text-black hover:bg-neutral-200'
        }`}
    >
      {!pending && !isSuccess && (
        <>
          <span>Send Message</span>
          <Send size={18} />
        </>
      )}
      {pending && (
        <span className="animate-pulse">Sending...</span>
      )}
      {isSuccess && (
        <>
          <span>Message Sent</span>
          <CheckCircle2 size={18} />
        </>
      )}
    </motion.button>
  );
}

export const Contact: React.FC = () => {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

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

        {/* Global Notifications */}
        {state.message && state.success === false && !state.errors && (
          <motion.div variants={itemBlurVariant} className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium text-center">
            {state.message}
          </motion.div>
        )}

        {state.message && state.success === true && (
          <motion.div variants={itemBlurVariant} className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium text-center">
            {state.message}
          </motion.div>
        )}

        {/* Form Container */}
        <motion.div
          variants={itemBlurVariant}
          className="relative bg-[#1C1C1E] border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          {/* Subtle Background Glow inside the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

          <form ref={formRef} action={formAction} className="relative z-10 space-y-6">

            {/* Honeypot field (Bot Protection) */}
            <div aria-hidden="true" className="hidden" style={{ display: 'none' }}>
              <label htmlFor="botField">Skip this field if you are human</label>
              <input type="text" id="botField" name="botField" tabIndex={-1} autoComplete="off" />
            </div>

            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-mono text-neutral-500 uppercase tracking-wider ml-1">Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-3.5 text-neutral-500 group-focus-within:text-white transition-colors" size={18} />
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={state.fields?.name || ''}
                  placeholder="Elon Musk"
                  className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:bg-white/10 transition-all duration-300 ${state.errors?.name ? 'border-red-500 focus:border-red-500' : 'border-white/5 focus:border-white/20'
                    }`}
                  aria-describedby={state.errors?.name ? 'name-error' : undefined}
                />
              </div>
              {state.errors?.name && (
                <p id="name-error" className="text-sm font-medium text-red-500 ml-1">
                  {state.errors.name[0]}
                </p>
              )}
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
                  defaultValue={state.fields?.email || ''}
                  placeholder="john@example.com"
                  className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:bg-white/10 transition-all duration-300 ${state.errors?.email ? 'border-red-500 focus:border-red-500' : 'border-white/5 focus:border-white/20'
                    }`}
                  aria-describedby={state.errors?.email ? 'email-error' : undefined}
                />
              </div>
              {state.errors?.email && (
                <p id="email-error" className="text-sm font-medium text-red-500 ml-1">
                  {state.errors.email[0]}
                </p>
              )}
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-mono text-neutral-500 uppercase tracking-wider ml-1">Message</label>
              <div className="relative group">
                <MessageSquare className="absolute left-4 top-3.5 text-neutral-500 group-focus-within:text-white transition-colors" size={18} />
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  defaultValue={state.fields?.message || ''}
                  placeholder="Tell me about your project..."
                  className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder:text-neutral-600 focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none ${state.errors?.message ? 'border-red-500 focus:border-red-500' : 'border-white/5 focus:border-white/20'
                    }`}
                  aria-describedby={state.errors?.message ? 'message-error' : undefined}
                ></textarea>
              </div>
              {state.errors?.message && (
                <p id="message-error" className="text-sm font-medium text-red-500 ml-1">
                  {state.errors.message[0]}
                </p>
              )}
            </div>

            {/* Submit Button & Status */}
            <div className="pt-2">
              <SubmitButton isSuccess={!!state.success} />
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;