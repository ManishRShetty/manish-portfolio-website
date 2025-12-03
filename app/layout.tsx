import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Manish R Shetty | AI Product Engineer',
    description: 'Building autonomous AI agents and scalable SaaS platforms. Expert in Next.js, Generative AI, and DevOps.',

    openGraph: {
        title: 'Manish R Shetty | AI Product Engineer',
        description: 'Building autonomous AI agents and scalable SaaS platforms.',
        type: 'website',
        url: 'https://manish.dev',
        siteName: 'Manish R Shetty Portfolio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Manish R Shetty - AI Engineer',
            },
        ],
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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1&display=swap" rel="stylesheet" />

            </head>

            <body className="font-sans antialiased bg-black text-white selection:bg-purple-500 selection:text-white">
                {children}
            </body>
        </html>
    );
}