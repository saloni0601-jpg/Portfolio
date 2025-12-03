import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SpeechBubble from './SpeechBubble';
import MenuPanel from './MenuPanel';

const Bookshop = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showSpeechBubble, setShowSpeechBubble] = useState(true);
    const [isTalking, setIsTalking] = useState(false);
    const [isHoveringCharacter, setIsHoveringCharacter] = useState(false);

    // Handle talking animation
    useEffect(() => {
        let interval;
        if (showSpeechBubble || isHoveringCharacter) {
            interval = setInterval(() => {
                setIsTalking(prev => !prev);
            }, 300);
        } else {
            setIsTalking(false);
        }
        return () => clearInterval(interval);
    }, [showSpeechBubble, isHoveringCharacter]);

    const handleWallClick = () => {
        setIsMenuOpen(true);
        setShowSpeechBubble(false);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[#2C1810]">
            {/* Main Background Scene */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[2s]"
                style={{
                    backgroundImage: 'url("/ghibli-bookshop-character.png")',
                    transform: isMenuOpen ? 'scale(1.05)' : 'scale(1)'
                }}
            >
                {/* Interactive Wall Overlay */}
                <div
                    onClick={handleWallClick}
                    className="absolute inset-0 cursor-pointer z-10 group"
                    title="Click to explore collection"
                >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-[var(--color-glow)] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>

                {/* Character Interaction Area - Invisible but interactive */}
                {/* Character Interaction Area */}
                <div
                    className="absolute bottom-0 right-[15%] w-[25%] h-[60%] z-20 cursor-pointer"
                    onMouseEnter={() => {
                        setIsHoveringCharacter(true);
                        if (!isMenuOpen) setShowSpeechBubble(true);
                    }}
                    onMouseLeave={() => setIsHoveringCharacter(false)}
                    onClick={() => setShowSpeechBubble(true)}
                >
                </div>

                {/* Speech Bubble */}
                <SpeechBubble
                    isVisible={showSpeechBubble && !isMenuOpen}
                    onClose={() => setShowSpeechBubble(false)}
                    text="Click on the wall to explore our collection of stories"
                />

                {/* Floating Dust Motes (CSS Animation) */}
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

            {/* Menu Panel */}
            <MenuPanel
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </div>
    );
};

export default Bookshop;
