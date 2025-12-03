import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { workExperiences } from '../data/portfolio';

const ChapterDetails = () => {
    const { bookId, chapterId } = useParams();
    const navigate = useNavigate();

    const book = workExperiences.find(b => b.id === bookId);
    const chapter = book?.chapters.find(c => c.id === chapterId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!book || !chapter) {
        return <div className="p-10 text-center font-serif text-[var(--color-header)]">Chapter not found</div>;
    }

    return (
        <div className="min-h-screen bg-[var(--color-bg-cream)] p-6 md:p-12 relative">
            {/* Parchment Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply"
                style={{
                    backgroundImage: `url("https://www.transparenttextures.com/patterns/aged-paper.png"), 
                                       radial-gradient(circle at center, transparent 50%, rgba(74, 47, 27, 0.1) 100%)`
                }}>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Navigation Header */}
                <div className="flex justify-between items-center mb-12">
                    <div className="flex gap-4 items-center">
                        <button
                            onClick={() => navigate('/')}
                            className="text-[var(--color-date)] opacity-70 hover:opacity-100 transition-opacity font-serif flex items-center gap-2 group"
                        >
                            <img src="/icon-back.png" alt="Back" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity invert brightness-0 sepia-[.5] hue-rotate-[10deg] saturate-[300%]" onError={(e) => e.target.style.display = 'none'} />
                            Bookshop
                        </button>
                        <span className="opacity-30 text-[var(--color-date)]">/</span>
                        <button
                            onClick={() => navigate(`/book/${bookId}`)}
                            className="text-[var(--color-date)] opacity-70 hover:opacity-100 transition-opacity font-serif"
                        >
                            {book.company}
                        </button>
                        <span className="opacity-30 text-[var(--color-date)]">/</span>
                        <span className="text-[var(--color-header)] font-serif font-medium">
                            {chapter.title}
                        </span>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header */}
                    <div className="mb-6 text-center">
                        <h1 className="text-2xl md:text-3xl font-serif text-[var(--color-header)] mb-3 tracking-wide">
                            {chapter.title}
                        </h1>
                        <p className="text-base text-[var(--color-subheading)] opacity-90 max-w-2xl mx-auto font-serif italic leading-relaxed">
                            {chapter.description}
                        </p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap justify-center items-start gap-6 md:gap-10 mb-6 border-y border-[var(--color-date)]/30 py-3 bg-[#FFF7E6]/50 backdrop-blur-sm rounded-lg shadow-sm max-w-3xl mx-auto">
                        <div className="text-center min-w-[90px]">
                            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-date)] mb-1 font-bold">Role</div>
                            <div className="font-serif text-sm text-[var(--color-header)]">{chapter.role}</div>
                        </div>
                        <div className="text-center flex-1 max-w-md">
                            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-date)] mb-1 font-bold">Tech Stack</div>
                            <div className="flex flex-wrap gap-1.5 justify-center">
                                {chapter.technologies.map(tech => (
                                    <span key={tech} className="text-[11px] bg-white/80 px-2 py-0.5 rounded border border-[var(--color-date)]/30 text-[var(--color-subheading)] font-serif shadow-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="prose max-w-none mb-6 font-serif text-[var(--color-text-dark)]">
                        <h3 className="text-xl font-serif text-[var(--color-subheading)] mb-3 border-b border-[var(--color-date)]/20 pb-1 inline-block">Project Highlights</h3>
                        <ul className="space-y-1.5 mb-4 list-none pl-0">
                            {chapter.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm leading-relaxed">
                                    <span className="text-[var(--color-date)] text-base mt-[2px]">❧</span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 justify-center mt-6">
                        {chapter.links.live && (
                            <a
                                href={chapter.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[var(--color-subheading)] text-[#FFF7E6] px-6 py-2 rounded-full hover:bg-[var(--color-header)] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-serif text-sm tracking-wide"
                            >
                                View Live Project
                            </a>
                        )}
                        {chapter.links.github && (
                            <a
                                href={chapter.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#FFF7E6] text-[var(--color-header)] border-2 border-[var(--color-header)] px-6 py-2 rounded-full hover:bg-[var(--color-bg-cream)] transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 font-serif text-sm tracking-wide font-bold"
                            >
                                View Code
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ChapterDetails;
