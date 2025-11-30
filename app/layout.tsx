import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Manish R Shetty — Full Stack Developer',
    description: 'Manish R Shetty — Building fast, scalable, and user-centered web apps using Next.js & DevOps.',
    openGraph: {
        title: 'Manish R Shetty — Full Stack Developer',
        description: 'Building fast, scalable, and user-centered web apps using Next.js & DevOps.',
        type: 'website',
        images: ['https://picsum.photos/1200/630'],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
                <script src="https://cdn.tailwindcss.com"></script>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    fontFamily: {
                      sans: ['Satoshi','Inter', 'sans-serif'],
                    },
                  },
                },
              }
            `,
                    }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
