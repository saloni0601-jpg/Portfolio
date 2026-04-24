import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { standaloneProjects } from '../data/portfolio';

const RecordDetails = () => {
    const { recordId } = useParams();
    const navigate = useNavigate();
    const project = standaloneProjects.find(p => p.id === recordId);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    if (!project) return <div className="p-10 text-center font-serif text-[var(--color-header)]">Record not found</div>;

    const cleanText = (text) => text
        .replace(/0→1/g, 'zero to one')
        .replace(/→/g, 'to');

    const skillsArray = project.skillsUsed
        ? project.skillsUsed.split('·').map(s => s.trim()).filter(s => s)
        : [];
    const actionBullets = project.action ? project.action.split('\n').filter(s => s.trim()) : [];
    const resultBullets = project.result ? project.result.split('\n').filter(s => s.trim()) : [];

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-[var(--color-bg-cream)] flex flex-col pt-20"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}
        >
            <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full px-10 md:px-16 pt-8 pb-20">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-[13px] font-serif text-[var(--color-date)] mb-10">
                    <button onClick={() => navigate('/', { state: { openShelf: true } })} className="hover:text-[var(--color-subheading)] transition-colors">Home</button>
                    <span className="opacity-40">/</span>
                    <button onClick={() => navigate('/', { state: { openShelf: true } })} className="hover:text-[var(--color-subheading)] transition-colors">Shelf</button>
                    <span className="opacity-40">/</span>
                    <span className="text-[var(--color-header)] font-medium truncate max-w-[220px]">{project.title}</span>
                </div>

                {/* Content centered vertically */}
                <div className="flex-1 flex flex-col justify-center">

                    {/* Title + category + description */}
                    <div className="mb-8 pb-6 border-b border-[var(--color-date)]/20">
                        <div className="inline-block px-3 py-1.5 rounded-full text-[12px] font-serif font-bold text-white shadow-sm mb-4"
                            style={{ backgroundColor: project.color }}>
                            {project.category}
                        </div>
                        <h1 className="font-serif text-[26px] md:text-[32px] font-bold text-[var(--color-header)] leading-tight mb-3">
                            {cleanText(project.title)}
                        </h1>
                        <p className="font-serif text-[15px] text-[var(--color-subheading)] italic leading-relaxed">
                            {cleanText(project.description)}
                        </p>
                        <p className="font-serif text-[13px] text-[var(--color-date)] mt-2 italic">{project.year}</p>
                    </div>

                    {/* STAR */}
                    <div className="space-y-5">
                        {project.situation && (
                            <div>
                                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-2">Situation</h3>
                                <p className="font-serif text-[15px] text-[var(--color-text-dark)] leading-relaxed">{cleanText(project.situation)}</p>
                            </div>
                        )}
                        {project.task && (
                            <div>
                                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-2">Task</h3>
                                <p className="font-serif text-[15px] text-[var(--color-text-dark)] leading-relaxed">{cleanText(project.task)}</p>
                            </div>
                        )}
                        {actionBullets.length > 0 && (
                            <div>
                                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-2">Action</h3>
                                <ul className="space-y-1.5">
                                    {actionBullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-2 font-serif text-[15px] text-[var(--color-text-dark)] leading-relaxed">
                                            <span className="text-[var(--color-date)] flex-shrink-0 mt-[2px]">❧</span>
                                            <span>{cleanText(bullet)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {resultBullets.length > 0 && (
                            <div>
                                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-2">Result</h3>
                                <ul className="space-y-1.5">
                                    {resultBullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start gap-2 font-serif text-[15px] text-[var(--color-text-dark)] leading-relaxed">
                                            <span className="text-[var(--color-date)] flex-shrink-0 mt-[2px]">❧</span>
                                            <span>{cleanText(bullet)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {skillsArray.length > 0 && (
                            <div className="pt-4 border-t border-[var(--color-date)]/20">
                                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-3">Skills Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillsArray.map(skill => (
                                        <span key={skill} className="text-[12px] bg-white/80 px-3 py-1.5 rounded-full border border-[var(--color-date)]/20 text-[var(--color-header)] font-serif shadow-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                        {project.technologies && project.technologies.length > 0 && (
                            <div>
                                <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-3">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="text-[12px] bg-[var(--color-header)]/6 px-3 py-1 rounded-full border border-[var(--color-header)]/15 text-[var(--color-header)] font-serif">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default RecordDetails;
