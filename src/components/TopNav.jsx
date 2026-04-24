import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const TopNav = () => {
    const [showContactModal, setShowContactModal] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const location = useLocation();

    const isLanding = location.pathname === '/';

    const navTextStyle = isLanding
        ? { color: '#ffffff', fontWeight: '700', textShadow: '0 1px 3px rgba(0,0,0,0.5)', fontSize: '18px', fontFamily: 'inherit' }
        : { color: '#4A2F1B', fontWeight: '700', fontSize: '18px', fontFamily: 'inherit' };

    const navBgClass = isLanding
        ? "fixed top-0 left-0 right-0 z-50 bg-transparent"
        : "fixed top-0 left-0 right-0 z-50 bg-[#FFF7E6]/95 backdrop-blur-sm border-b border-[#4A2F1B]/10 shadow-sm";

    return (
        <>
            <nav className={navBgClass}>
                <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-end">
                    <div className="flex items-center gap-8">
                        <button
                            onClick={() => setShowAboutModal(true)}
                            style={navTextStyle}
                            className="bg-transparent border-none cursor-pointer font-serif transition-opacity hover:opacity-70"
                        >
                            About Me
                        </button>
                        <a
                            href="https://drive.google.com/file/d/1-KpRsD5zjOZBH3a8nsRnIy09uMVIYaem/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={navTextStyle}
                            className="font-serif transition-opacity hover:opacity-70"
                        >
                            Resume
                        </a>
                        <button
                            onClick={() => setShowContactModal(true)}
                            style={navTextStyle}
                            className="bg-transparent border-none cursor-pointer font-serif transition-opacity hover:opacity-70"
                        >
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
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] bg-[#FFF7E6] rounded-2xl shadow-2xl max-w-xl w-full mx-4 border border-[#4A2F1B]/20 overflow-hidden"
                            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}
                        >
                            <div className="px-10 py-10">
                                <button onClick={() => setShowAboutModal(false)}
                                    className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-[#7A5230] hover:text-[#4A2F1B] transition-colors rounded-full">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                                <h2 style={{ color: '#4A2F1B', fontSize: '28px', fontFamily: 'inherit', marginBottom: '24px' }}>About Me</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <p style={{ fontSize: '16px', color: '#2C1810', lineHeight: '1.7', fontFamily: 'inherit' }}>
                                        I am a Product Manager with a background in AI systems, data platforms, and enterprise software. I recently completed my Master of Information Systems Management at Carnegie Mellon University.
                                    </p>
                                    <p style={{ fontSize: '16px', color: '#2C1810', lineHeight: '1.7', fontFamily: 'inherit' }}>
                                        I have about 3 years of product ownership experience across logistics, energy, and healthcare — building zero to one products, fixing broken workflows, and shipping AI-powered tools. Currently working as an AI PM at Dataengite, where I am building a data transformation engine for enterprise clients.
                                    </p>
                                    <p style={{ fontSize: '16px', color: '#2C1810', lineHeight: '1.7', fontFamily: 'inherit' }}>
                                        I can go deep technically, run rigorous discovery, and translate both into things that actually ship.
                                    </p>
                                    <div style={{ paddingTop: '8px', borderTop: '1px solid rgba(166,124,82,0.3)', marginTop: '4px' }}>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                                            {['Product Strategy', 'AI Products', 'Zero to One', 'User Research', 'Data and Analytics', 'Agile Delivery'].map(skill => (
                                                <span key={skill} style={{ fontSize: '12px', padding: '4px 12px', borderRadius: '999px', border: '1px solid rgba(74,47,27,0.2)', color: '#7A5230', fontFamily: 'inherit' }}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '13px', color: '#A67C52', fontStyle: 'italic', fontFamily: 'inherit' }}>
                                        CMU MISM · Pittsburgh, PA · Open to relocation
                                    </p>
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
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] bg-[#FFF7E6] rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-[#4A2F1B]/20 overflow-hidden"
                            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }}
                        >
                            <div className="px-10 py-10">
                                <button onClick={() => setShowContactModal(false)}
                                    className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-[#7A5230] hover:text-[#4A2F1B] transition-colors rounded-full">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                                <h2 style={{ color: '#4A2F1B', fontSize: '28px', fontFamily: 'inherit', marginBottom: '32px' }}>Get in Touch</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                    <div>
                                        <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#A67C52', marginBottom: '8px', fontWeight: 'bold' }}>Email</div>
                                        <a href="mailto:salonic0601@gmail.com" style={{ fontSize: '18px', color: '#4A2F1B', fontFamily: 'inherit' }}>
                                            salonic0601@gmail.com
                                        </a>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#A67C52', marginBottom: '8px', fontWeight: 'bold' }}>LinkedIn</div>
                                        <a href="https://www.linkedin.com/in/saloni-chaturvedi-7029701a1/" target="_blank" rel="noopener noreferrer"
                                            style={{ fontSize: '18px', color: '#4A2F1B', fontFamily: 'inherit' }}>
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
