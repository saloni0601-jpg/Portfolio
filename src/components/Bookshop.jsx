import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SpeechBubble from './SpeechBubble';
import MenuPanel from './MenuPanel';

const Bookshop = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(location.state?.openShelf || false);
    const [showSpeechBubble, setShowSpeechBubble] = useState(!location.state?.openShelf);
    const [isTalking, setIsTalking] = useState(false);
    const [isHoveringCharacter, setIsHoveringCharacter] = useState(false);

    useEffect(() => {
        if (location.state?.openShelf) {
            setIsMenuOpen(true);
            setShowSpeechBubble(false);
        }
    }, [location.state]);

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
        <div className="relative w-full h-screen overflow-hidden bg-[#2C1810] pt-16">
            <div
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[2s]"
                style={{
                    backgroundImage: 'url("/bookshop-scene.jpg")',
                    transform: isMenuOpen ? 'scale(1.05)' : 'scale(1)'
                }}
            >
                {/* Clickable wall overlay */}
                <div
                    onClick={handleWallClick}
                    className="absolute inset-0 cursor-pointer z-10 group"
                    title="Click anywhere to explore my work"
                >
                    <div className="absolute inset-0 bg-[var(--color-glow)] opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
                </div>

                {/* Character hover zone */}
                <div
                    className="absolute bottom-0 right-[12%] w-[28%] h-[65%] z-20 cursor-pointer"
                    onMouseEnter={() => {
                        setIsHoveringCharacter(true);
                        if (!isMenuOpen) setShowSpeechBubble(true);
                    }}
                    onMouseLeave={() => setIsHoveringCharacter(false)}
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowSpeechBubble(true);
                    }}
                >
                    {/* Character image swaps between still/talking */}
                    <img
                        src={isTalking ? '/character-talking.svg' : '/character-still.svg'}
                        alt="Saloni"
                        className="absolute bottom-0 right-0 w-full h-full object-contain pointer-events-none"
                        onError={(e) => e.target.style.display = 'none'}
                    />
                </div>

                <SpeechBubble
                    isVisible={showSpeechBubble && !isMenuOpen}
                    onClose={() => setShowSpeechBubble(false)}
                    text="Welcome! Click anywhere on the wall to explore my work →"
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

            <MenuPanel
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </div>
    );
};

export default Bookshop;
