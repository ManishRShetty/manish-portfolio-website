'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, Calendar, Clock, ArrowUpRight } from 'lucide-react';

// --- Configuration ---
const IOS_SPRING = {
    type: "spring" as const,
    stiffness: 500,
    damping: 30,
    mass: 1
};

const FADE_IN_UP = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
};

// --- Data ---
const BLOG_POSTS = [
    {
        id: '1',
        title: 'Interface as Ambient Light',
        excerpt: 'Redefining the screen not as a container, but as a light source. The shift to ambient computing.',
        category: 'Design',
        readTime: '5 min',
        date: 'Oct 24',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
        featured: true
    },
    {
        id: '2',
        title: 'Fluid Gestures',
        excerpt: 'Physics-based interactions in React. Making digital objects feel heavy and real.',
        category: 'Engineering',
        readTime: '8 min',
        date: 'Oct 22',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: '3',
        title: 'Dark Mode Psychology',
        excerpt: 'Contrast ratios and melatonin. Why true black isn\'t always the answer.',
        category: 'Research',
        readTime: '4 min',
        date: 'Oct 18',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: '4',
        title: 'Server Actions',
        excerpt: 'The death of the API route. Structuring logic where it belongs.',
        category: 'Engineering',
        readTime: '12 min',
        date: 'Oct 15',
        image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=2564&auto=format&fit=crop'
    }
];

const CATEGORIES = ['All', 'Design', 'Engineering', 'Research'];

export default function AppleStyleBlog() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const [selectedArticle, setSelectedArticle] = useState<typeof BLOG_POSTS[0] | null>(null);

    const filteredPosts = BLOG_POSTS.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">

            {/* Ambient Background Glows - subtle and moving */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
                <div className="absolute bottom-[-20%] right-[20%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">

                {/* --- Header Area --- */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={FADE_IN_UP}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center mb-20 space-y-8"
                >
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent pb-2">
                        Insights.
                    </h1>

                    {/* iOS Segmented Control & Search Hybrid */}
                    <div className="flex flex-col md:flex-row items-center gap-4 bg-white/[0.08] backdrop-blur-xl p-1.5 rounded-full border border-white/[0.08] shadow-2xl shadow-black/50">

                        {/* Categories */}
                        <div className="flex items-center relative">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`
                    relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-200 z-10
                    ${activeCategory === cat ? 'text-black' : 'text-white/60 hover:text-white'}
                  `}
                                >
                                    {activeCategory === cat && (
                                        <motion.div
                                            layoutId="activeTab"
                                            transition={IOS_SPRING}
                                            className="absolute inset-0 bg-white rounded-full shadow-sm z-[-1]"
                                        />
                                    )}
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="w-[1px] h-6 bg-white/10 hidden md:block" />

                        {/* Spotlight Search */}
                        <div className="relative group w-full md:w-64 px-2">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors" size={16} />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-white/40 pl-9 py-2"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* --- Content Grid --- */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.map((post) => (
                            <motion.div
                                layout
                                key={post.id}
                                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
                                transition={IOS_SPRING}
                                onMouseEnter={() => setHoveredCard(post.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                onClick={() => setSelectedArticle(post)}
                                className={`
                  group relative overflow-hidden rounded-[32px] cursor-pointer
                  ${post.featured ? 'md:col-span-2 aspect-[2/1]' : 'aspect-[4/3]'}
                `}
                            >
                                {/* Image Background with Parallax Feel */}
                                <div className="absolute inset-0 bg-gray-900">
                                    <motion.img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover opacity-80 transition-opacity duration-700 group-hover:opacity-60"
                                        animate={{
                                            scale: hoveredCard === post.id ? 1.05 : 1
                                        }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                </div>

                                {/* Glass Overlay Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="relative z-10 space-y-3 transform transition-transform duration-500 group-hover:-translate-y-2">

                                        <div className="flex items-center gap-3">
                                            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-white border border-white/10">
                                                {post.category}
                                            </span>
                                            <span className="text-white/60 text-xs font-medium flex items-center gap-1">
                                                {post.date}
                                            </span>
                                        </div>

                                        <h3 className={`font-bold text-white leading-tight ${post.featured ? 'text-4xl max-w-lg' : 'text-2xl'}`}>
                                            {post.title}
                                        </h3>

                                        <p className={`text-white/70 line-clamp-2 ${post.featured ? 'text-lg max-w-xl' : 'text-sm'}`}>
                                            {post.excerpt}
                                        </p>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{
                                                opacity: hoveredCard === post.id ? 1 : 0,
                                                y: hoveredCard === post.id ? 0 : 10
                                            }}
                                            className="flex items-center gap-2 text-white font-medium pt-2"
                                        >
                                            Read Article <span className="bg-white text-black rounded-full p-1"><ChevronRight size={14} /></span>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Apple-style sheen on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredPosts.length === 0 && (
                    <div className="py-20 text-center text-white/40 font-medium">
                        No results found.
                    </div>
                )}

            </div>

            {/* Article Modal */}
            <AnimatePresence>
                {selectedArticle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedArticle(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={IOS_SPRING}
                            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-zinc-900/95 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedArticle(null)}
                                className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-all duration-200"
                                aria-label="Close modal"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>

                            {/* Article Image */}
                            <div className="relative w-full h-80 overflow-hidden rounded-t-3xl">
                                <img
                                    src={selectedArticle.image}
                                    alt={selectedArticle.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                            </div>

                            {/* Article Content */}
                            <div className="p-8 md:p-12 space-y-6">
                                {/* Category and Date */}
                                <div className="flex items-center gap-4">
                                    <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white border border-white/10">
                                        {selectedArticle.category}
                                    </span>
                                    <div className="flex items-center gap-4 text-white/60 text-sm">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={16} />
                                            {selectedArticle.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock size={16} />
                                            {selectedArticle.readTime}
                                        </span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                    {selectedArticle.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-xl text-white/70 leading-relaxed">
                                    {selectedArticle.excerpt}
                                </p>

                                {/* Article Body - Placeholder */}
                                <div className="pt-6 space-y-4 text-white/80 leading-relaxed">
                                    <p>
                                        This is where your full article content would go. You can add multiple paragraphs,
                                        images, code snippets, and other rich content here.
                                    </p>
                                    <p>
                                        The modal is fully responsive and scrollable, allowing you to display articles of any length.
                                        The backdrop blur effect creates depth, and the smooth animations provide a premium feel.
                                    </p>
                                    <p>
                                        You can enhance this further by adding markdown support, syntax highlighting for code blocks,
                                        or fetching content from a CMS or markdown files.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}