import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { workExperiences } from '../data/portfolio';

const BookDetails = () => {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const book = workExperiences.find(b => b.id === bookId);

    if (!book) {
        return <div className="p-10 text-center font-serif text-[var(--color-header)]">Book not found</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-[var(--color-bg-cream)] pt-20"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}
        >
            {/* Breadcrumb */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 pt-8 pb-4">
                <div className="flex items-center gap-2 text-[13px] font-serif text-[var(--color-date)]">
                    <button
                        onClick={() => navigate('/', { state: { openShelf: true } })}
                        className="hover:text-[var(--color-subheading)] transition-colors"
                    >
                        Home
                    </button>
                    <span className="opacity-40">/</span>
                    <button
                        onClick={() => navigate('/', { state: { openShelf: true } })}
                        className="hover:text-[var(--color-subheading)] transition-colors"
                    >
                        Shelf
                    </button>
                    <span className="opacity-40">/</span>
                    <span className="text-[var(--color-header)] font-medium">{book.company}</span>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-12 pb-20">
                {/* Header */}
                <div className="mb-10 pt-4 border-b border-[var(--color-date)]/20 pb-8">
                    {/* Color accent line */}
                    <div className="w-12 h-1 rounded-full mb-5" style={{ backgroundColor: book.color }}></div>

                    <h1 className="font-serif text-[36px] md:text-[48px] font-bold text-[var(--color-header)] leading-tight mb-2">
                        {book.company}
                    </h1>
                    <p className="font-serif text-[18px] md:text-[20px] text-[var(--color-subheading)] mb-1">
                        {book.role}
                    </p>
                    <p className="font-serif text-[14px] text-[var(--color-date)] italic mb-6">
                        {book.period} · {book.location}
                    </p>
                    <p className="font-serif text-[16px] text-[var(--color-text-dark)] leading-relaxed max-w-3xl">
                        {book.description}
                    </p>

                    {/* Key metrics */}
                    {book.highlights && (
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
                            {book.highlights.map((h, i) => (
                                <div key={i} className="flex items-start gap-2 text-[14px] font-serif text-[var(--color-text-dark)]">
                                    <span className="text-[var(--color-date)] mt-[2px] flex-shrink-0">❧</span>
                                    <span>{h}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Projects */}
                <div>
                    <h2 className="text-[13px] uppercase tracking-[0.2em] font-bold text-[var(--color-date)] mb-6">
                        Projects & Chapters
                    </h2>

                    <div className="space-y-4">
                        {book.projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.07, duration: 0.3 }}
                            >
                                <Link
                                    to={`/book/${bookId}/chapter/${project.id}`}
                                    className="block group"
                                >
                                    <div className="bg-white/70 hover:bg-white/95 rounded-2xl px-6 py-5 border border-[var(--color-header)]/10 hover:border-[var(--color-header)]/20 hover:shadow-md transition-all duration-200 ease-out">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--color-date)] font-bold font-serif">
                                                        {project.role}
                                                    </span>
                                                    <span className="text-[var(--color-date)]/30">·</span>
                                                    <span className="text-[11px] font-serif text-[var(--color-date)] italic">
                                                        {project.duration}
                                                    </span>
                                                </div>
                                                <h3 className="font-serif text-[18px] md:text-[20px] font-bold text-[var(--color-header)] group-hover:text-[var(--color-subheading)] transition-colors leading-snug mb-2">
                                                    {project.title}
                                                </h3>
                                                <p className="font-serif text-[14px] text-[var(--color-text-dark)] opacity-75 leading-relaxed">
                                                    {project.description}
                                                </p>

                                                {/* Tech tags */}
                                                <div className="flex flex-wrap gap-1.5 mt-3">
                                                    {project.technologies.slice(0, 4).map(tech => (
                                                        <span key={tech} className="text-[11px] bg-[var(--color-header)]/6 px-2 py-0.5 rounded-full border border-[var(--color-date)]/20 text-[var(--color-subheading)] font-serif">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.technologies.length > 4 && (
                                                        <span className="text-[11px] text-[var(--color-date)] font-serif italic">
                                                            +{project.technologies.length - 4} more
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <span className="font-serif text-[13px] text-[var(--color-subheading)] italic opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1">
                                                Read →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BookDetails;
