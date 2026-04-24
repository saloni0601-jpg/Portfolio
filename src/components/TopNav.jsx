import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const TopNav = () => {
    const [showContactModal, setShowContactModal] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const location = useLocation();

    // On landing page use white text, on inner pages use dark text
    const isLanding = location.pathname === '/';
    const navTextClass = isLanding
        ? "font-serif text-[18px] font-bold text-white hover:text-white/70 transition-colors drop-shadow-md"
        : "font-serif text-[18px] font-bold text-[var(--color-header)] hover:text-[var(--color-subheading)] transition-colors";
    const navBgClass = isLanding
        ? "fixed top-0 left-0 right-0 z-50 bg-transparent"
        : "fixed top-0 left-0 right-0 z-50 bg-[#FFF7E6]/95 backdrop-blur-sm border-b border-[var(--color-header)]/10 shadow-sm";

    return (
        <>
            <nav className={navBgClass}>
                <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-end">
                    <div className="flex items-center gap-8">
                        <button onClick={() => setShowAboutModal(true)} className={navTextClass}>
                            About Me
                        </button>
                        <a
                            href="https://drive.google.com/file/d/1-KpRsD5zjOZBH3a8nsRnIy09uMVIYaem/view?usp=sharing"
                            target="_blank" rel="noopener noreferrer"
                            className={navTextClass}
                        >
                            Resume
                        </a>
                        <button onClick={() => setShowContactModal(true)} className={navTextClass}>
                            Contact
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {showAboutModal && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setShowAboutModal(false)}
                            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 10 }}
                            transition={{ duration: 0.25 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] bg-[#FFF7E6] rounded-2xl shadow-2xl max-w-xl w-full mx-4 border border-[var(--color-header)]/20 overflow-hidden"
                            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}
                        >
                            <div className="px-10 py-10">
                                <button onClick={() => setShowAboutModal(false)}
                                    className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-[var(--color-subheading)] hover:text-[var(--color-header)] transition-colors rounded-full hover:bg-[var(--color-header)]/10">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                                <h2 className="text-[28px] font-serif text-[var(--color-header)] mb-6 tracking-wide">About Me</h2>
                                <div className="space-y-4">
                                    <p className="text-[16px] font-serif text-[var(--color-text-dark)] leading-relaxed">
                                        I am a Product Manager with a background in AI systems, data platforms, and enterprise software. I recently completed my Master of Information Systems Management at Carnegie Mellon University.
                                    </p>
                                    <p className="text-[16px] font-serif text-[var(--color-text-dark)] leading-relaxed">
                                        I have about 3 years of product ownership experience across logistics, energy, and healthcare — building zero to one products, fixing broken workflows, and shipping AI-powered tools. Currently working as an AI PM at Dataengite, where I am building a data transformation engine for enterprise clients.
                                    </p>
                                    <p className="text-[16px] font-serif text-[var(--color-text-dark)] leading-relaxed">
                                        I can go deep technically, run rigorous discovery, and translate both into things that actually ship.
                                    </p>
                                    <div className="pt-2 border-t border-[var(--color-date)]/30">
                                        <div className="flex flex-wrap gap-2 mt-3">
                                            {['Product Strategy', 'AI Products', 'Zero to One', 'User Research', 'Data and Analytics', 'Agile Delivery'].map(skill => (
                                                <span key={skill} className="text-[12px] bg-[var(--color-header)]/8 px-3 py-1 rounded-full border border-[var(--color-header)]/20 text-[var(--color-subheading)] font-serif">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="pt-2 text-[13px] font-serif text-[var(--color-date)] italic">
                                        CMU MISM · Pittsburgh, PA · Open to relocation
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showContactModal && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setShowContactModal(false)}
                            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 10 }}
                            transition={{ duration: 0.25 }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] bg-[#FFF7E6] rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-[var(--color-header)]/20 overflow-hidden"
                            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}
                        >
                            <div className="px-10 py-10">
                                <button onClick={() => setShowContactModal(false)}
                                    className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-[var(--color-subheading)] hover:text-[var(--color-header)] transition-colors rounded-full hover:bg-[var(--color-header)]/10">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                                <h2 className="text-[28px] font-serif text-[var(--color-header)] mb-8 tracking-wide">Get in Touch</h2>
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-date)] mb-2 font-bold">Email</div>
                                        <a href="mailto:salonic0601@gmail.com" className="text-[18px] font-serif text-[var(--color-header)] hover:text-[var(--color-subheading)] transition-colors">
                                            salonic0601@gmail.com
                                        </a>
                                    </div>
                                    <div>
                                        <div className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-date)] mb-2 font-bold">LinkedIn</div>
                                        <a href="https://www.linkedin.com/in/saloni-chaturvedi-7029701a1/" target="_blank" rel="noopener noreferrer"
                                            className="text-[18px] font-serif text-[var(--color-header)] hover:text-[var(--color-subheading)] transition-colors">
                                            linkedin.com/in/saloni-chaturvedi
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default TopNav;
