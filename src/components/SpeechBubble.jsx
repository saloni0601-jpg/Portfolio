import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SpeechBubble = ({ isVisible, onClose, text }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute top-[20%] right-[20%] z-50 max-w-xs md:max-w-sm pointer-events-auto"
                >
                    <div className="relative bg-[#FFF0F5]/90 backdrop-blur-sm p-8 rounded-[2rem] rounded-bl-none shadow-xl border-2 border-[#8B4513]">
                        {/* Triangle pointer */}
                        <div className="absolute -bottom-3 left-10 w-6 h-6 bg-[#FFF0F5]/90 border-r-2 border-b-2 border-[#8B4513] rotate-45"></div>

                        {/* Close button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose();
                            }}
                            className="absolute -top-3 -right-3 w-8 h-8 bg-[#8B4513] text-white rounded-full flex items-center justify-center text-sm hover:bg-[#A0522D] transition-colors shadow-md"
                            aria-label="Close speech bubble"
                        >
                            ✕
                        </button>

                        <p className="font-serif text-xl text-[#5D4037] leading-relaxed text-center font-medium">
                            {text}
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SpeechBubble;
