import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { workExperiences } from '../data/portfolio';

const ChapterDetails = () => {
    const { bookId, chapterId } = useParams();
    const navigate = useNavigate();

    const book = workExperiences.find(b => b.id === bookId);
    const chapter = book?.projects.find(c => c.id === chapterId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!book || !chapter) {
        return <div className="p-10 text-center font-serif text-[var(--color-header)]">Chapter not found</div>;
    }

    const actionBullets = chapter.action ? chapter.action.split('. ').filter(s => s.trim()) : [];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-[var(--color-bg-cream)] pt-20"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}
        >
            <div className="max-w-4xl mx-auto px-6 md:px-12 pt-8 pb-20">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[13px] font-serif text-[var(--color-date)] mb-10">
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
                    <button
                        onClick={() => navigate(`/book/${bookId}`)}
                        className="hover:text-[var(--color-subheading)] transition-colors"
                    >
                        {book.company}
                    </button>
                    <span className="opacity-40">/</span>
                    <span className="text-[var(--color-header)] font-medium truncate max-w-[200px]">
                        {chapter.title}
                    </span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    {/* Header */}
                    <div className="mb-8 pb-8 border-b border-[var(--color-date)]/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-1 rounded-full" style={{ backgroundColor: book.color }}></div>
                            <span className="font-serif text-[13px] text-[var(--color-date)] italic">{book.company} · {chapter.duration}</span>
                        </div>

                        <h1 className="font-serif text-[28px] md:text-[36px] font-bold text-[var(--color-header)] leading-tight mb-3">
                            {chapter.title}
                        </h1>
                        <p className="font-serif text-[16px] text-[var(--color-subheading)] italic leading-relaxed">
                            {chapter.description}
                        </p>
                    </div>

                    {/* Role + Tech Stack — side by side, centered */}
                    <div className="flex flex-wrap gap-8 mb-8 p-6 bg-white/60 rounded-2xl border border-[var(--color-date)]/20">
                        <div className="min-w-[120px]">
                            <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-date)] mb-2 font-bold">Role</div>
                            <div className="font-serif text-[15px] text-[var(--color-header)] font-medium">{chapter.role}</div>
                        </div>
                        <div className="flex-1">
                            <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-date)] mb-2 font-bold">Tech Stack</div>
                            <div className="flex flex-wrap gap-2">
                                {chapter.technologies.map(tech => (
                                    <span key={tech} className="text-[12px] bg-white px-3 py-1 rounded-full border border-[var(--color-date)]/25 text-[var(--color-subheading)] font-serif shadow-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* STAR Format */}
                    <div className="space-y-6">
                        {chapter.situation && (
                            <div className="bg-white/60 rounded-2xl p-6 border border-[var(--color-date)]/15">
                                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-3">Situation</h3>
                                <p className="font-serif text-[15px] text-[var(--color-text-dark)] leading-relaxed">{chapter.situation}</p>
                            </div>
                        )}

                        {chapter.task && (
                            <div className="bg-white/60 rounded-2xl p-6 border border-[var(--color-date)]/15">
                                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-3">Task</h3>
                                <p className="font-serif text-[15px] text-[var(--color-text-dark)] leading-relaxed">{chapter.task}</p>
                            </div>
                        )}

                        {/* Project Highlights */}
                        {chapter.highlights && (
                            <div className="bg-white/60 rounded-2xl p-6 border border-[var(--color-date)]/15">
                                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-4">Project Highlights</h3>
                                <ul className="space-y-2">
                                    {chapter.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start gap-3 font-serif text-[15px] text-[var(--color-text-dark)] leading-relaxed">
                                            <span className="text-[var(--color-date)] flex-shrink-0 mt-[2px]">❧</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {chapter.result && (
                            <div className="bg-white/60 rounded-2xl p-6 border border-[var(--color-date)]/15">
                                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-3">Result</h3>
                                <p className="font-serif text-[15px] text-[var(--color-text-dark)] leading-relaxed">{chapter.result}</p>
                            </div>
                        )}

                        {/* Skills */}
                        {chapter.skillsUsed && (
                            <div className="bg-[var(--color-header)]/5 rounded-2xl p-6 border border-[var(--color-header)]/10">
                                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-3">Skills Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {chapter.skillsUsed.split('·').map(s => s.trim()).filter(s => s).map(skill => (
                                        <span key={skill} className="text-[12px] bg-white/80 px-3 py-1.5 rounded-full border border-[var(--color-date)]/20 text-[var(--color-header)] font-serif shadow-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Links */}
                    {(chapter.links?.live || chapter.links?.github) && (
                        <div className="flex gap-4 mt-8">
                            {chapter.links.live && (
                                <a href={chapter.links.live} target="_blank" rel="noopener noreferrer"
                                    className="bg-[var(--color-subheading)] text-[#FFF7E6] px-6 py-2.5 rounded-full hover:bg-[var(--color-header)] transition-all shadow-md font-serif text-[14px] tracking-wide">
                                    View Live Project
                                </a>
                            )}
                            {chapter.links.github && (
                                <a href={chapter.links.github} target="_blank" rel="noopener noreferrer"
                                    className="bg-white text-[var(--color-header)] border-2 border-[var(--color-header)] px-6 py-2.5 rounded-full hover:bg-[var(--color-bg-cream)] transition-all shadow-sm font-serif text-[14px] tracking-wide font-bold">
                                    View Code
                                </a>
                            )}
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ChapterDetails;
