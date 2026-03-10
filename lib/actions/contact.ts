'use server';

import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations/contact';

// We initialize Resend if the API key is available, but guard its usage.
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export type ActionState = {
    success?: boolean;
    message?: string;
    errors?: Record<string, string[]>;
    fields?: Record<string, string>;
};

export async function submitContactForm(
    prevState: ActionState | null,
    formData: FormData
): Promise<ActionState> {
    // 1. Bot Protection: Check the honeypot field
    const honeypot = formData.get('botField');
    if (honeypot) {
        // Instantly return fake success if the honeypot is filled
        return {
            success: true,
            message: 'Thank you for your message! I will get back to you soon.',
        };
    }

    // Extract fields
    const rawData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
    };

    // 2. Strict Validation: Validate payload on the server
    const validatedFields = contactFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Please fix the errors in the form.',
            errors: validatedFields.error.flatten().fieldErrors,
            fields: rawData,
        };
    }

    // 3. Dispatch using Resend
    const { name, email, message } = validatedFields.data;

    if (!resend) {
        console.warn('RESEND_API_KEY is not set. Simulating success.');
        return {
            success: true,
            message: 'Thank you for your message! I will get back to you soon.',
        };
    }

    try {
        const { error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // Update with a verified domain in production
            to: process.env.CONTACT_EMAIL || 'your-email@example.com',
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            replyTo: email,
        });

        if (error) {
            console.error('Error sending email:', error);
            return {
                success: false,
                message: 'Something went wrong. Please try again later.',
                fields: rawData,
            };
        }

        // Success response
        return {
            success: true,
            message: 'Thank you for your message! I will get back to you soon.',
        };
    } catch (err) {
        console.error('Unexpected error:', err);
        return {
            success: false,
            message: 'An unexpected error occurred. Please try again later.',
            fields: rawData,
        };
    }
}
