import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import MenuPanel from './MenuPanel';

const SpeechBubblePopup = ({ isVisible, onClose, text, style }) => (
    <AnimatePresence>
        {isVisible && (
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute z-50 pointer-events-auto"
                style={style}
            >
                <div className="relative bg-[#FFF0F5]/92 backdrop-blur-sm px-6 py-4 rounded-2xl rounded-bl-none shadow-xl border-2 border-[#8B4513] max-w-[280px]">
                    <div className="absolute -bottom-3 left-8 w-5 h-5 bg-[#FFF0F5]/92 border-r-2 border-b-2 border-[#8B4513] rotate-45"></div>
                    <button
                        onClick={(e) => { e.stopPropagation(); onClose(); }}
                        className="absolute -top-3 -right-3 w-7 h-7 bg-[#8B4513] text-white rounded-full flex items-center justify-center text-xs hover:bg-[#A0522D] transition-colors shadow-md"
                    >
                        x
                    </button>
                    <p className="font-serif text-[15px] text-[#5D4037] leading-relaxed text-center">
                        {text}
                    </p>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

const Bookshop = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(location.state?.openShelf || false);
    const [showSaloniBubble, setShowSaloniBubble] = useState(!location.state?.openShelf);
    const [showCatBubble, setShowCatBubble] = useState(false);

    useEffect(() => {
        if (location.state?.openShelf) {
            setIsMenuOpen(true);
            setShowSaloniBubble(false);
        }
    }, [location.state]);

    const handleWallClick = () => {
        setIsMenuOpen(true);
        setShowSaloniBubble(false);
        setShowCatBubble(false);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#2C1810]">
            <div
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[2s]"
                style={{
                    backgroundImage: 'url("/ghibli-bookshop-character.png")',
                    transform: isMenuOpen ? 'scale(1.05)' : 'scale(1)'
                }}
            >
                {/* Wall click overlay */}
                <div
                    onClick={handleWallClick}
                    className="absolute inset-0 cursor-pointer z-10 group"
                    title="Click anywhere to explore my work"
                >
                    <div className="absolute inset-0 bg-[var(--color-glow)] opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
                </div>

                {/* Saloni hotspot — right side, larger zone */}
                <div
                    className="absolute bottom-0 right-[5%] w-[40%] h-[80%] z-20 cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowSaloniBubble(prev => !prev);
                        setShowCatBubble(false);
                    }}
                />

                {/* Cat hotspot — bottom left, larger zone */}
                <div
                    className="absolute bottom-0 left-[0%] w-[30%] h-[35%] z-20 cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowCatBubble(prev => !prev);
                        setShowSaloniBubble(false);
                    }}
                />

                {/* Saloni speech bubble — above her */}
                <SpeechBubblePopup
                    isVisible={showSaloniBubble && !isMenuOpen}
                    onClose={() => setShowSaloniBubble(false)}
                    text="Hi, I am Saloni — an AI Product Manager and CMU grad. Click anywhere to explore my work."
                    style={{ bottom: '72%', right: '8%' }}
                />

                {/* Cat speech bubble — above the cat */}
                <SpeechBubblePopup
                    isVisible={showCatBubble && !isMenuOpen}
                    onClose={() => setShowCatBubble(false)}
                    text="3 years of product ownership. Zero to one launches across 3 countries. 13 projects shipped. I have been here for all of it."
                    style={{ bottom: '38%', left: '5%' }}
                />

                {/* Dust motes */}
                <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white rounded-full opacity-0"
                            style={{
                                width: Math.random() * 4 + 1 + 'px',
                                height: Math.random() * 4 + 1 + 'px',
                                left: Math.random() * 100 + '%',
                                top: Math.random() * 100 + '%',
                                animation: `dustMote ${Math.random() * 10 + 10}s infinite linear`,
                                animationDelay: `-${Math.random() * 10}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            <MenuPanel isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
    );
};

export default Bookshop;
