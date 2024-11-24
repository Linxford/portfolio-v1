// src/components/ScrollToTopComponent.jsx
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { themeColors, ThemeOption } from '../components/theme';

interface ScrollToTopComponentProps {
    showScrollTop: boolean;
    scrollToTop: () => void;
    colorTheme: ThemeOption;
}

const ScrollToTopComponent: React.FC<ScrollToTopComponentProps> = ({ showScrollTop, scrollToTop, colorTheme }) => {
    return (
        <>
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg ${themeColors[colorTheme].button} text-white transition-all duration-300 hover:scale-110`}
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
            )}
        </>
    );
};

export default ScrollToTopComponent;
