import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { workExperiences, standaloneProjects } from '../data/portfolio';

const BookSpine = ({ color }) => (
    <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        <rect x="2" y="0" width="24" height="36" rx="2" fill={color} />
        <rect x="2" y="0" width="5" height="36" rx="1" fill="rgba(0,0,0,0.15)" />
        <rect x="6" y="8" width="16" height="2" rx="1" fill="rgba(255,255,255,0.4)" />
        <rect x="6" y="13" width="12" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
        <rect x="6" y="24" width="14" height="2" rx="1" fill="rgba(255,255,255,0.3)" />
        <rect x="6" y="29" width="10" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
    </svg>
);

const MenuPanel = ({ isOpen, onClose }) => {
    const panelVariants = {
        closed: { x: "100%" },
        open: { x: 0, transition: { type: "spring", stiffness: 280, damping: 28 } }
    };
    const containerVariants = {
        open: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
        closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } }
    };
    const itemVariants = {
        open: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
        closed: { y: 16, opacity: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/25 z-40 backdrop-blur-[2px]"
                    />
                    <motion.div
                        initial="closed" animate="open" exit="closed"
                        variants={panelVariants}
                        className="fixed top-0 right-0 h-full w-[92vw] md:w-[68vw] lg:w-[58vw] bg-[#FFF7E6] z-50 overflow-y-auto shadow-2xl rounded-l-3xl border-l border-[var(--color-header)]/15"
                        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}
                    >
                        <button
                            onClick={onClose}
                            className="fixed top-6 right-6 z-[60] w-10 h-10 flex items-center justify-center bg-white/70 rounded-full border border-[var(--color-header)]/15 shadow-sm text-[var(--color-subheading)] hover:text-[var(--color-header)] hover:shadow-md transition-all"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="px-10 md:px-14 pt-16 pb-20">
                            <div className="mb-10">
                                <h2 className="text-[32px] md:text-[36px] font-serif text-[var(--color-header)] tracking-wide mb-1">Collection</h2>
                                <p className="text-[15px] font-serif text-[var(--color-subheading)] italic opacity-80">Every book holds a chapter of my journey.</p>
                            </div>

                            <motion.div variants={containerVariants} initial="closed" animate="open" className="space-y-14">

                                {/* Chronicles of Work */}
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <h3 className="text-[13px] uppercase tracking-[0.2em] font-bold text-[var(--color-date)]">Chronicles of Work</h3>
                                        <div className="flex-1 h-px bg-[var(--color-date)]/20"></div>
                                    </div>
                                    <div className="space-y-4">
                                        {workExperiences.map((exp) => (
                                            <motion.div key={exp.id} variants={itemVariants}>
                                                <Link to={`/book/${exp.id}`} className="block group">
                                                    <div className="bg-white/60 hover:bg-white/90 rounded-2xl px-6 py-5 border border-[var(--color-header)]/10 hover:border-[var(--color-header)]/20 hover:shadow-md transition-all duration-200 ease-out">
                                                        <div className="flex items-center justify-between gap-4">
                                                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                                                <BookSpine color={exp.color} />
                                                                <div className="min-w-0">
                                                                    <h4 className="font-serif text-[20px] md:text-[22px] font-bold text-[var(--color-header)] group-hover:text-[var(--color-subheading)] transition-colors leading-tight mb-1">
                                                                        {exp.company}
                                                                    </h4>
                                                                    <p className="font-serif text-[15px] text-[var(--color-subheading)] mb-1">{exp.role}</p>
                                                                    <p className="font-serif text-[13px] text-[var(--color-date)] italic">{exp.period} · {exp.location}</p>
                                                                </div>
                                                            </div>
                                                            <span className="font-serif text-[13px] text-[var(--color-subheading)] italic opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">Open</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Records */}
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <h3 className="text-[13px] uppercase tracking-[0.2em] font-bold text-[var(--color-date)]">Project Records</h3>
                                        <div className="flex-1 h-px bg-[var(--color-date)]/20"></div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {standaloneProjects.map((project) => (
                                            <motion.div key={project.id} variants={itemVariants}>
                                                <Link to={`/record/${project.id}`} className="block group h-full">
                                                    <div className="bg-white/60 hover:bg-white/90 rounded-2xl px-5 py-5 border border-[var(--color-header)]/10 hover:border-[var(--color-header)]/20 hover:shadow-md transition-all duration-200 ease-out h-full flex flex-col">
                                                        <div className="inline-block self-start px-2.5 py-1 rounded-full text-[11px] font-serif font-bold tracking-wide text-white mb-3 shadow-sm"
                                                            style={{ backgroundColor: project.color }}>
                                                            {project.category}
                                                        </div>
                                                        <h4 className="font-serif text-[15px] font-bold text-[var(--color-header)] group-hover:text-[var(--color-subheading)] transition-colors leading-snug mb-1 flex-1">
                                                            {project.title}
                                                        </h4>
                                                        <p className="font-serif text-[12px] text-[var(--color-date)] italic">{project.year}</p>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MenuPanel;
