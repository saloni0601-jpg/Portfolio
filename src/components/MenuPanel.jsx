import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { workExperiences, standaloneProjects } from '../data/portfolio';

const MenuPanel = ({ isOpen, onClose }) => {
    // Animation variants for the panel
    const panelVariants = {
        closed: { x: "100%", boxShadow: "none" },
        open: {
            x: 0,
            boxShadow: "-10px 0 30px rgba(0,0,0,0.3)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    };

    // Animation variants for list items
    const containerVariants = {
        open: {
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const itemVariants = {
        open: { y: 0, opacity: 1 },
        closed: { y: 20, opacity: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/20 z-40 backdrop-blur-[2px]"
                    />

                    {/* Sliding Panel */}
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={panelVariants}
                        className="fixed top-0 right-0 h-full w-[90vw] md:w-[70vw] bg-[var(--color-bg-cream)] z-50 overflow-y-auto shadow-2xl rounded-l-[24px] border-l border-[var(--color-header)]/20"
                    >
                        {/* Parchment Texture & Vignette Overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-multiply"
                            style={{
                                backgroundImage: `url("https://www.transparenttextures.com/patterns/aged-paper.png"), 
                                                   linear-gradient(to right, rgba(74, 47, 27, 0.05), transparent 10%)`
                            }}>
                        </div>

                        {/* Soft Left Edge Gradient Overlay */}
                        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--color-header)]/5 to-transparent pointer-events-none rounded-l-[24px]"></div>

                        <div className="relative p-10 md:p-16 min-h-full flex flex-col">
                            <button
                                onClick={onClose}
                                className="absolute top-8 right-8 text-[var(--color-subheading)] hover:text-[var(--color-header)] transition-colors transform hover:scale-110 duration-200 group"
                            >
                                <div className="bg-white/50 p-2 rounded-full border border-[var(--color-header)]/10 shadow-sm group-hover:shadow-md transition-all">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </div>
                            </button>

                            <h2 className="text-[28px] font-serif text-[var(--color-header)] mb-2 mt-4 border-b-2 border-[var(--color-date)]/30 pb-4 inline-block self-start tracking-wide">
                                Collection
                            </h2>
                            <p className="text-[var(--color-subheading)] mb-12 text-[18px] italic font-serif opacity-90">
                                Choose a story from the shelves… every book holds a chapter of my journey.
                            </p>

                            <motion.div variants={containerVariants} initial="closed" animate="open" className="flex-1 space-y-16">

                                {/* Books Section (Work Experiences) */}
                                <div>
                                    <h3 className="text-[22px] font-serif text-[var(--color-header)] mb-8 tracking-wide">
                                        Chronicles of Work
                                    </h3>

                                    <div className="space-y-6">
                                        {workExperiences.map((experience) => (
                                            <motion.div key={experience.id} variants={itemVariants}>
                                                <Link
                                                    to={`/book/${experience.id}`}
                                                    className="block group"
                                                >
                                                    <div className="bg-[#FFF7E6] p-6 rounded-[20px] shadow-[inset_0_0_20px_rgba(74,47,27,0.03),0_4px_10px_rgba(0,0,0,0.05)] border border-[var(--color-header)]/10 hover:shadow-[inset_0_0_20px_rgba(74,47,27,0.05),0_8px_20px_rgba(74,47,27,0.1)] hover:-translate-y-1 transition-all duration-300 ease-out relative">

                                                        {/* Inner Glow */}
                                                        <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_0_15px_rgba(255,247,230,0.8)] pointer-events-none"></div>

                                                        {/* Category Badge */}
                                                        <div className="inline-block px-3 py-1 rounded-full text-[14px] font-serif font-semibold tracking-wide text-white mb-3 shadow-sm"
                                                            style={{ backgroundColor: experience.color }}>
                                                            {experience.company}
                                                        </div>

                                                        <div className="relative z-10">
                                                            <h4 className="font-serif text-[20px] font-semibold text-[var(--color-header)] group-hover:text-[var(--color-subheading)] transition-colors mb-2">
                                                                {experience.role}
                                                            </h4>
                                                            <div className="flex items-center gap-2 text-[15px] text-[var(--color-date)] font-serif italic">
                                                                <span>{experience.period}</span>
                                                            </div>
                                                        </div>

                                                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[var(--color-subheading)] font-serif italic text-[14px] flex items-center gap-2">
                                                            Open Book <span className="text-lg">→</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Records Section (Standalone Projects) */}
                                <div>
                                    <h3 className="text-[22px] font-serif text-[var(--color-header)] mb-8 tracking-wide">
                                        Project Records
                                    </h3>

                                    <div className="space-y-5">
                                        {standaloneProjects.map((project) => (
                                            <motion.div key={project.id} variants={itemVariants}>
                                                <Link
                                                    to={`/record/${project.id}`}
                                                    className="block group"
                                                >
                                                    <div className="bg-[#FFF7E6] p-6 rounded-[20px] shadow-[inset_0_0_20px_rgba(74,47,27,0.03),0_4px_10px_rgba(0,0,0,0.05)] border border-[var(--color-header)]/10 hover:shadow-[inset_0_0_20px_rgba(74,47,27,0.05),0_8px_20px_rgba(74,47,27,0.1)] hover:-translate-y-1 transition-all duration-300 ease-out relative">

                                                        {/* Inner Glow */}
                                                        <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_0_15px_rgba(255,247,230,0.8)] pointer-events-none"></div>

                                                        <div className="flex items-center gap-4">
                                                            {/* Record Visual */}
                                                            <div className="relative w-12 h-12 flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                                                                <div className="absolute inset-0 bg-[#1a1a1a] rounded-full shadow-sm flex items-center justify-center border-2 border-[#2C1810]">
                                                                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: project.color }}></div>
                                                                </div>
                                                            </div>

                                                            <div className="flex-1 relative z-10">
                                                                {/* Category Badge */}
                                                                <div className="inline-block px-3 py-1 rounded-full text-[12px] font-serif font-semibold tracking-wide text-white mb-2 shadow-sm"
                                                                    style={{ backgroundColor: project.color }}>
                                                                    {project.category}
                                                                </div>

                                                                <h4 className="font-serif text-[18px] font-semibold text-[var(--color-header)] group-hover:text-[var(--color-subheading)] transition-colors mb-1">
                                                                    {project.title}
                                                                </h4>
                                                                <p className="text-[14px] text-[var(--color-date)] font-serif italic">
                                                                    {project.year}
                                                                </p>
                                                            </div>

                                                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[var(--color-subheading)] font-serif italic text-[14px] flex items-center gap-2">
                                                                Play <span className="text-lg">→</span>
                                                            </div>
                                                        </div>
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
