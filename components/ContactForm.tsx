'use client';

import { useActionState, useEffect, useRef } from 'react';
import { submitContactForm, type ActionState } from '@/lib/actions/contact';
import { useFormStatus } from 'react-dom';

const initialState: ActionState = {
    success: false,
    message: '',
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full rounded-md bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center px-4 py-3 text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
            {pending ? (
                <>
                    <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    Sending...
                </>
            ) : (
                'Send Message'
            )}
        </button>
    );
}

export default function ContactForm() {
    const [state, formAction] = useActionState(submitContactForm, initialState);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.success) {
            formRef.current?.reset();
        }
    }, [state.success]);

    return (
        <div className="w-full max-w-lg mx-auto">
            {state.message && (
                <div
                    className={`mb-6 p-4 rounded-lg text-sm font-medium ${state.success
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800'
                            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800'
                        }`}
                    role="alert"
                >
                    {state.message}
                </div>
            )}

            <form ref={formRef} action={formAction} className="space-y-6">
                {/* Honeypot field (Bot Protection) */}
                <div aria-hidden="true" className="hidden" style={{ display: 'none' }}>
                    <label htmlFor="botField">Skip this field if you are human</label>
                    <input type="text" id="botField" name="botField" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        defaultValue={state.fields?.name || ''}
                        className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 dark:placeholder:text-zinc-400 ${state.errors?.name
                                ? 'border-red-500 focus-visible:ring-red-500'
                                : 'border-zinc-200 dark:border-zinc-800'
                            }`}
                        aria-describedby={state.errors?.name ? 'name-error' : undefined}
                    />
                    {state.errors?.name && (
                        <p id="name-error" className="text-sm font-medium text-red-500">
                            {state.errors.name[0]}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        defaultValue={state.fields?.email || ''}
                        className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 dark:placeholder:text-zinc-400 ${state.errors?.email
                                ? 'border-red-500 focus-visible:ring-red-500'
                                : 'border-zinc-200 dark:border-zinc-800'
                            }`}
                        aria-describedby={state.errors?.email ? 'email-error' : undefined}
                    />
                    {state.errors?.email && (
                        <p id="email-error" className="text-sm font-medium text-red-500">
                            {state.errors.email[0]}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="How can I help you?"
                        rows={5}
                        defaultValue={state.fields?.message || ''}
                        className={`flex min-h-[120px] w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 dark:placeholder:text-zinc-400 ${state.errors?.message
                                ? 'border-red-500 focus-visible:ring-red-500'
                                : 'border-zinc-200 dark:border-zinc-800'
                            }`}
                        aria-describedby={state.errors?.message ? 'message-error' : undefined}
                    />
                    {state.errors?.message && (
                        <p id="message-error" className="text-sm font-medium text-red-500">
                            {state.errors.message[0]}
                        </p>
                    )}
                </div>

                <SubmitButton />
            </form>
        </div>
    );
}
