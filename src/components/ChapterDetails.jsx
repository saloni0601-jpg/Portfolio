import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { workExperiences } from '../data/portfolio';

const cleanText = (text) => text
    .replace(/0→1/g, 'zero to one')
    .replace(/→/g, 'to');

const ChapterDetails = () => {
    const { bookId, chapterId } = useParams();
    const navigate = useNavigate();
    const book = workExperiences.find(b => b.id === bookId);
    const chapter = book?.projects.find(c => c.id === chapterId);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    if (!book || !chapter) return <div className="p-10 text-center font-serif text-[var(--color-header)]">Chapter not found</div>;

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-[var(--color-bg-cream)]"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}
        >
            <div className="max-w-3xl mx-auto px-12 md:px-20 pt-28 pb-20">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[13px] font-serif text-[var(--color-date)] mb-10">
                    <button onClick={() => navigate('/', { state: { openShelf: true } })} className="hover:text-[var(--color-subheading)] transition-colors">Home</button>
                    <span className="opacity-40">/</span>
                    <button onClick={() => navigate('/', { state: { openShelf: true } })} className="hover:text-[var(--color-subheading)] transition-colors">Shelf</button>
                    <span className="opacity-40">/</span>
                    <button onClick={() => navigate(`/book/${bookId}`)} className="hover:text-[var(--color-subheading)] transition-colors">{book.company}</button>
                    <span className="opacity-40">/</span>
                    <span className="text-[var(--color-header)] font-medium truncate max-w-[200px]">{cleanText(chapter.title)}</span>
                </div>

                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>

                    {/* Header */}
                    <div className="mb-8 pb-8 border-b border-[var(--color-date)]/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-1 rounded-full" style={{ backgroundColor: book.color }}></div>
                            <span className="font-serif text-[13px] text-[var(--color-date)] italic">{book.company}</span>
                        </div>
                        <h1 className="font-serif text-[28px] md:text-[34px] font-bold text-[var(--color-header)] leading-tight mb-3">
                            {cleanText(chapter.title)}
                        </h1>
                        <p className="font-serif text-[16px] text-[var(--color-subheading)] italic leading-relaxed">
                            {cleanText(chapter.description)}
                        </p>
                    </div>

                    {/* Role + Tech Stack */}
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

                    <div className="space-y-5">
                        {chapter.situation && (
                            <div className="bg-white/60 rounded-2xl p-6 border border-[var(--color-date)]/15">
                                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-3">Situation</h3>
                                <p className="font-serif text-[15px] text-[var(--color-text-dark)] leading-relaxed">{cleanText(chapter.situation)}</p>
                            </div>
                        )}
                        {chapter.task && (
                            <div className="bg-white/60 rounded-2xl p-6 border border-[var(--color-date)]/15">
                                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-3">Task</h3>
                                <p className="font-serif text-[15px] text-[var(--color-text-dark)] leading-relaxed">{cleanText(chapter.task)}</p>
                            </div>
                        )}
                        {chapter.highlights && chapter.highlights.length > 0 && (
                            <div className="bg-white/60 rounded-2xl p-6 border border-[var(--color-date)]/15">
                                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-4">Project Highlights</h3>
                                <ul className="space-y-2">
                                    {chapter.highlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-3 font-serif text-[15px] text-[var(--color-text-dark)] leading-relaxed">
                                            <span className="text-[var(--color-date)] flex-shrink-0 mt-[2px]">❧</span>
                                            <span>{cleanText(h)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {chapter.result && (
                            <div className="bg-white/60 rounded-2xl p-6 border border-[var(--color-date)]/15">
                                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-3">Result</h3>
                                <p className="font-serif text-[15px] text-[var(--color-text-dark)] leading-relaxed">{cleanText(chapter.result)}</p>
                            </div>
                        )}
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
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ChapterDetails;
