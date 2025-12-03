import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { standaloneProjects } from '../data/portfolio';

const RecordDetails = () => {
    const { recordId } = useParams();
    const navigate = useNavigate();
    const project = standaloneProjects.find(p => p.id === recordId);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return <div className="p-10 text-center">Record not found</div>;
    }

    return (
        <div className="min-h-screen bg-[var(--color-cream)] p-6 md:p-12 overflow-hidden">
            <div className="max-w-6xl mx-auto h-full flex flex-col">
                {/* Navigation Header */}
                <div className="flex justify-between items-center mb-8 z-10 relative">
                    <button
                        onClick={() => navigate('/')}
                        className="absolute top-8 left-8 text-[var(--color-subheading)] hover:text-[var(--color-header)] transition-colors font-serif text-lg z-50 flex items-center gap-3 group"
                    >
                        <img src="/icon-back.png" alt="Back" className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity" onError={(e) => e.target.style.display = 'none'} />
                        <span className="tracking-wide">Return to Shelf</span>
                    </button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center min-h-[70vh]">
                    <p className="text-[var(--color-warm-wood)] mb-6 font-serif italic animate-pulse">
                        Click the record to flip and see details
                    </p>

                    {/* Flip Container */}
                    <div
                        className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] cursor-pointer perspective-1000"
                        onClick={() => setIsFlipped(!isFlipped)}
                    >
                        <motion.div
                            initial={false}
                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                            transition={{ duration: 0.8, type: "spring", stiffness: 260, damping: 20 }}
                            className="w-full h-full relative preserve-3d"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* FRONT: Vinyl Record */}
                            <div
                                className="absolute inset-0 backface-hidden flex items-center justify-center"
                                style={{ backfaceVisibility: 'hidden' }}
                            >
                                <div className="relative w-full h-full rounded-full shadow-2xl bg-black flex items-center justify-center">
                                    {/* Vinyl Grooves */}
                                    {[...Array(8)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute rounded-full border border-gray-800 opacity-40"
                                            style={{
                                                inset: `${(i + 1) * 4}%`,
                                                borderColor: i % 2 === 0 ? '#333' : '#222'
                                            }}
                                        ></div>
                                    ))}

                                    {/* Label */}
                                    <div
                                        className="w-[35%] h-[35%] rounded-full flex flex-col items-center justify-center text-center p-4 shadow-inner"
                                        style={{ backgroundColor: project.color }}
                                    >
                                        <div className="w-2 h-2 bg-white rounded-full mb-2"></div>
                                        <h2 className="text-white font-bold text-sm md:text-xl leading-tight drop-shadow-md">
                                            {project.title}
                                        </h2>
                                        <p className="text-white/80 text-xs md:text-sm mt-1">{project.year}</p>
                                    </div>

                                    {/* Shine */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* BACK: Project Details (Sleeve/Back Cover) */}
                            <div
                                className="absolute inset-0 backface-hidden bg-[#FFF7E6] rounded-xl shadow-2xl p-4 md:p-6 overflow-y-auto border border-[var(--color-date)]/30"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                    backgroundImage: `url("https://www.transparenttextures.com/patterns/aged-paper.png")`
                                }}
                            >
                                <div className="h-full flex flex-col space-y-3">
                                    {/* Header */}
                                    <div className="border-b border-[var(--color-date)]/30 pb-2">
                                        <div className="inline-block px-2 py-0.5 rounded-full text-[10px] font-serif font-semibold tracking-wide text-white mb-2 shadow-sm"
                                            style={{ backgroundColor: project.color }}>
                                            {project.category}
                                        </div>
                                        <h1 className="text-base md:text-lg font-serif text-[var(--color-header)] mb-1">
                                            {project.title}
                                        </h1>
                                        <p className="text-sm text-[var(--color-subheading)] font-serif italic">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* STAR Format Content */}
                                    <div className="flex-1 space-y-3 font-serif text-[var(--color-text-dark)]">
                                        {/* Situation */}
                                        {project.situation && (
                                            <div>
                                                <h3 className="text-xs font-bold text-[var(--color-subheading)] mb-1 tracking-wide uppercase">Situation</h3>
                                                <p className="text-sm leading-relaxed">{project.situation}</p>
                                            </div>
                                        )}

                                        {/* Task */}
                                        {project.task && (
                                            <div>
                                                <h3 className="text-xs font-bold text-[var(--color-subheading)] mb-1 tracking-wide uppercase">Task</h3>
                                                <p className="text-sm leading-relaxed">{project.task}</p>
                                            </div>
                                        )}

                                        {/* Action */}
                                        {project.action && (
                                            <div>
                                                <h3 className="text-xs font-bold text-[var(--color-subheading)] mb-1 tracking-wide uppercase">Action</h3>
                                                <p className="text-sm leading-relaxed whitespace-pre-line">{project.action}</p>
                                            </div>
                                        )}

                                        {/* Result */}
                                        {project.result && (
                                            <div>
                                                <h3 className="text-xs font-bold text-[var(--color-subheading)] mb-1 tracking-wide uppercase">Result</h3>
                                                <p className="text-sm leading-relaxed whitespace-pre-line">{project.result}</p>
                                            </div>
                                        )}

                                        {/* Skills Used */}
                                        {project.skillsUsed && (
                                            <div className="bg-[var(--color-header)]/5 p-2 rounded-lg border border-[var(--color-header)]/10">
                                                <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-subheading)] mb-1">Skills Used</h3>
                                                <p className="text-sm text-[var(--color-text-dark)]">{project.skillsUsed}</p>
                                            </div>
                                        )}

                                        {/* Technologies */}
                                        {project.technologies && project.technologies.length > 0 && (
                                            <div>
                                                <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-subheading)] mb-1">Technologies</h3>
                                                <div className="flex flex-wrap gap-1">
                                                    {project.technologies.map(tech => (
                                                        <span key={tech} className="bg-white/80 px-2 py-0.5 rounded border border-[var(--color-date)]/20 text-[10px] text-[var(--color-header)] font-serif shadow-sm">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Links (if available) */}
                                    {(project.links?.live || project.links?.github) && (
                                        <div className="flex gap-2 pt-2 border-t border-[var(--color-date)]/20">
                                            {project.links.live && (
                                                <a
                                                    href={project.links.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="bg-[var(--color-subheading)] text-[#FFF7E6] px-3 py-1 rounded hover:bg-[var(--color-header)] transition-colors shadow-md text-xs text-center flex-1 font-serif"
                                                >
                                                    View Live
                                                </a>
                                            )}
                                            {project.links.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="bg-transparent text-[var(--color-header)] border border-[var(--color-header)] px-3 py-1 rounded hover:bg-[var(--color-bg-cream)] transition-colors text-xs text-center flex-1 font-serif font-bold"
                                                >
                                                    Code
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecordDetails;
