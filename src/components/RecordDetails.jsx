import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { standaloneProjects } from '../data/portfolio';

const RecordDetails = () => {
    const { recordId } = useParams();
    const navigate = useNavigate();
    const project = standaloneProjects.find(p => p.id === recordId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <div className="p-10 text-center font-serif text-[var(--color-header)]">Record not found</div>;
    }

    const skillsArray = project.skillsUsed
        ? project.skillsUsed.split('·').map(s => s.trim()).filter(s => s)
        : [];
    const actionBullets = project.action
        ? project.action.split('\n').filter(s => s.trim())
        : [];
    const resultBullets = project.result
        ? project.result.split('\n').filter(s => s.trim())
        : [];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-[var(--color-bg-cream)] pt-20"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}
        >
            <div className="max-w-5xl mx-auto px-6 md:px-12 pt-8 pb-20">

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
                    <span className="text-[var(--color-header)] font-medium truncate max-w-[220px]">{project.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 items-start">

                    {/* Left — Record visual */}
                    <div className="flex flex-col items-center gap-4">
                        {/* Vinyl record */}
                        <div className="relative w-[160px] h-[160px] lg:w-[180px] lg:h-[180px] rounded-full shadow-2xl bg-[#111] flex items-center justify-center flex-shrink-0">
                            {/* Grooves */}
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute rounded-full border border-gray-800 opacity-40"
                                    style={{ inset: `${(i + 1) * 5}%` }}
                                ></div>
                            ))}
                            {/* Center label */}
                            <div
                                className="w-[42%] h-[42%] rounded-full flex flex-col items-center justify-center text-center p-2 shadow-inner"
                                style={{ backgroundColor: project.color }}
                            >
                                <div className="w-2 h-2 bg-white rounded-full mb-1.5"></div>
                                <div className="text-white font-bold text-[9px] leading-tight px-1 line-clamp-3">
                                    {project.title}
                                </div>
                            </div>
                            {/* Shine */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/8 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Category badge */}
                        <div
                            className="inline-block px-3 py-1.5 rounded-full text-[12px] font-serif font-bold text-white shadow-sm"
                            style={{ backgroundColor: project.color }}
                        >
                            {project.category}
                        </div>

                        <p className="font-serif text-[12px] text-[var(--color-date)] italic text-center">{project.year}</p>

                        {/* LinkedIn link for projects without live/github */}
                        {!project.links?.live && !project.links?.github && (
                            <a
                                href="https://www.linkedin.com/in/saloni-chaturvedi-7029701a1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[12px] font-serif text-[var(--color-subheading)] hover:text-[var(--color-header)] transition-colors underline underline-offset-2 text-center"
                            >
                                View on LinkedIn →
                            </a>
                        )}

                        {/* Links */}
                        {(project.links?.live || project.links?.github) && (
                            <div className="flex flex-col gap-2 w-full">
                                {project.links.live && (
                                    <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                                        className="bg-[var(--color-subheading)] text-[#FFF7E6] px-4 py-2 rounded-full hover:bg-[var(--color-header)] transition-colors shadow-sm font-serif text-[13px] text-center">
                                        View Live
                                    </a>
                                )}
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                                        className="bg-white text-[var(--color-header)] border-2 border-[var(--color-header)] px-4 py-2 rounded-full hover:bg-[var(--color-bg-cream)] transition-colors font-serif text-[13px] text-center font-bold">
                                        View Code
                                    </a>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Right — Content */}
                    <div>
                        {/* Title + description */}
                        <div className="mb-6 pb-6 border-b border-[var(--color-date)]/20">
                            <h1 className="font-serif text-[26px] md:text-[32px] font-bold text-[var(--color-header)] leading-tight mb-3">
                                {project.title}
                            </h1>
                            <p className="font-serif text-[15px] text-[var(--color-subheading)] italic leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* STAR content */}
                        <div className="space-y-5">
                            {project.situation && (
                                <div>
                                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-2">Situation</h3>
                                    <p className="font-serif text-[15px] text-[var(--color-text-dark)] leading-relaxed">{project.situation}</p>
                                </div>
                            )}

                            {project.task && (
                                <div>
                                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-2">Task</h3>
                                    <p className="font-serif text-[15px] text-[var(--color-text-dark)] leading-relaxed">{project.task}</p>
                                </div>
                            )}

                            {actionBullets.length > 0 && (
                                <div>
                                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[var(--color-subheading)] mb-2">Action</h3>
                                    <ul className="space-y-1.5">
                                        {actionBullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-start gap-2 font-serif text-[15px] text-[var(--color-text-dark)] leading-relaxed">
                                                <span className="text-[var(--color-date)] flex-shrink-0 mt-[2px]">❧</span>
                                                <span>{bullet}</span>
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
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Skills */}
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

                            {/* Technologies */}
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
            </div>
        </motion.div>
    );
};

export default RecordDetails;
