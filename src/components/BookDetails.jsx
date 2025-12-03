import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { workExperiences } from '../data/portfolio';

const BookDetails = () => {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const book = workExperiences.find(b => b.id === bookId);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Trigger opening animation after mount
        const timer = setTimeout(() => setIsOpen(true), 100);
        return () => clearTimeout(timer);
    }, []);

    if (!book) {
        return <div className="p-10 text-center font-serif text-[var(--color-header)]">Book not found</div>;
    }

    return (
        <div className="min-h-screen bg-[var(--color-header)] flex items-center justify-center p-4 md:p-8 overflow-hidden relative">
            {/* Background Ambience */}
            <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }}>
            </div>
            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.4)_100%)]"></div>

            <button
                onClick={() => navigate('/')}
                className="absolute top-8 left-8 text-[#E6C9A8] hover:text-[#FFF7E6] transition-colors font-serif text-xl z-50 flex items-center gap-3 group"
            >
                <img src="/icon-back.png" alt="Back" className="w-6 h-6 opacity-80 group-hover:opacity-100 transition-opacity invert brightness-0 sepia-[.5] hue-rotate-[10deg] saturate-[300%]" onError={(e) => e.target.style.display = 'none'} />
                <span className="tracking-wide">Return to Shelf</span>
            </button>

            {/* Book Container */}
            <div className="relative w-full max-w-6xl aspect-[1.6/1] perspective-2000">
                <motion.div
                    className="w-full h-full relative preserve-3d transition-all duration-1000"
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: isOpen ? -10 : 0 }} // Slight tilt for 3D effect
                >
                    {/* Book Cover (Front) - Animates open */}
                    <motion.div
                        className="absolute top-0 left-1/2 w-1/2 h-full bg-[#8B4513] origin-left shadow-2xl z-20 rounded-r-xl flex items-center justify-center"
                        style={{
                            backgroundColor: book.color,
                            transformStyle: 'preserve-3d'
                        }}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: isOpen ? -180 : 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        {/* Front Cover Design */}
                        <div className="absolute inset-0 backface-hidden border-[6px] border-[#FFF7E6]/20 m-6 rounded flex flex-col items-center justify-center text-center p-10" style={{ backfaceVisibility: 'hidden' }}>
                            <h1 className="text-[#FFF7E6] font-serif text-5xl md:text-7xl mb-6 drop-shadow-lg tracking-wide">{book.company}</h1>
                            <div className="w-24 h-[2px] bg-[#FFF7E6]/60 mb-6"></div>
                            <p className="text-[#FFF7E6]/90 uppercase tracking-[0.2em] text-2xl font-light">{book.role}</p>
                        </div>

                        {/* Inner Cover (Left Page) */}
                        <div
                            className="absolute inset-0 backface-hidden bg-[#FFF7E6] rounded-l-xl p-10 md:p-14 flex flex-col items-center justify-center shadow-[inset_10px_0_20px_rgba(0,0,0,0.1)]"
                            style={{
                                transform: 'rotateY(180deg)',
                                backfaceVisibility: 'hidden',
                                backgroundImage: `url("https://www.transparenttextures.com/patterns/aged-paper.png")`
                            }}
                        >
                            <div className="flex-1 flex items-center justify-center border border-[var(--color-date)]/30 p-8 m-2 relative w-full">
                                <div className="text-center">
                                    <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-header)] mb-6 tracking-wide">
                                        {book.company}
                                    </h2>
                                    <div className="w-24 h-[2px] bg-[var(--color-date)]/60 mx-auto mb-6"></div>
                                    <p className="font-serif text-xl md:text-2xl text-[var(--color-subheading)] mb-4">
                                        {book.role}
                                    </p>
                                    <p className="font-serif text-lg text-[var(--color-date)] italic">
                                        {book.period}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Back Cover (Right Page) - Static base */}
                    <div className="absolute top-0 left-1/2 w-1/2 h-full bg-[#FFF7E6] rounded-r-xl shadow-xl z-10 flex flex-col p-8 md:p-12"
                        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/aged-paper.png")` }}>
                        <div className="flex-1 border border-[var(--color-date)]/30 p-6 md:p-8 m-2 relative overflow-y-auto custom-scrollbar">

                            {/* Title */}
                            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-header)] mb-4 text-center tracking-wide">
                                {book.company}
                            </h2>

                            {/* Role & Period */}
                            <div className="text-center mb-6 pb-6 border-b border-[var(--color-date)]/30">
                                <p className="font-serif text-lg text-[var(--color-subheading)] mb-1">{book.role}</p>
                                <p className="font-serif text-base text-[var(--color-date)] italic">{book.period}</p>
                            </div>

                            {/* Description */}
                            <p className="font-serif text-base md:text-lg text-[var(--color-text-dark)] leading-relaxed mb-8 text-center px-4">
                                {book.description}
                            </p>

                            {/* Table of Contents */}
                            <h3 className="font-serif text-2xl text-[var(--color-subheading)] mb-6 text-center italic tracking-wide">
                                Table of Contents
                            </h3>

                            <div className="space-y-5">
                                {book.chapters.map((chapter, index) => (
                                    <Link to={`/book/${bookId}/chapter/${chapter.id}`} key={chapter.id} className="block group">
                                        <div className="border-b border-dashed border-[var(--color-date)]/40 pb-3 hover:border-[var(--color-subheading)] transition-colors">
                                            <div className="flex items-start gap-4 mb-2">
                                                <span className="font-serif text-[var(--color-date)] font-bold text-sm italic flex-shrink-0 mt-1">
                                                    Chapter {index + 1}
                                                </span>
                                                <div className="flex-1">
                                                    <h4 className="font-serif text-lg md:text-xl text-[var(--color-header)] group-hover:text-[var(--color-subheading)] transition-colors leading-tight mb-1">
                                                        {chapter.title}
                                                    </h4>
                                                    <p className="text-sm text-[var(--color-text-dark)] opacity-70 font-serif italic leading-relaxed">
                                                        {chapter.description}
                                                    </p>
                                                </div>
                                                <span className="text-xs text-[var(--color-subheading)] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 duration-300 font-serif italic flex-shrink-0 mt-1">
                                                    Read →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Decorative Page Number */}
                            <div className="absolute bottom-2 right-6 text-[var(--color-date)] opacity-50 font-serif text-lg">
                                1
                            </div>
                        </div>
                    </div>

                    {/* Spine (visible when closed) */}
                    <motion.div
                        className="absolute top-0 left-1/2 w-14 h-full bg-[#3E2723] origin-left rounded-l-sm"
                        style={{
                            transform: 'translateX(-100%) rotateY(-90deg)',
                            backgroundColor: book.color,
                            filter: 'brightness(0.7) contrast(1.2)'
                        }}
                    ></motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default BookDetails;
