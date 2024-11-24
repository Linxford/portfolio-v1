// src/TeachingPortfolio.jsx
import { useState, useEffect } from 'react';
import HeaderComponent from './components/HeaderComponent';
import HeroSectionComponent from './components/HeroSectionComponent';
import StatsSectionComponent from './components/StatsSectionComponent';
import TeachingInActionComponent from './components/TeachingInActionComponent';
import VideoHighlightsComponent from './components/VideoHighlightsComponent';
import TeachingPhilosophyComponent from './components/TeachingPhilosophyComponent';
import TimelineComponent from './components/TimelineComponent';
import TestimonialsComponent from './components/TestimonialsComponent';
import ContactComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';
import ScrollToTopComponent from './components/ScrollToTopComponent';
import { ThemeOption } from './components/theme';

const TeachingPortfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [colorTheme, setColorTheme] = useState<ThemeOption>('emerald');
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null);
    const [selectedTestimonial, setSelectedTestimonial] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
            <HeaderComponent
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                colorTheme={colorTheme}
                setColorTheme={setColorTheme}
            />
            <main className="pt-20 pb-12">
                <HeroSectionComponent colorTheme={colorTheme} />
                <StatsSectionComponent colorTheme={colorTheme} />
                <TeachingInActionComponent
                    selectedImageIndex={selectedImageIndex}
                    setSelectedImageIndex={setSelectedImageIndex}
                    colorTheme={colorTheme}
                />
                <VideoHighlightsComponent
                    selectedVideoId={selectedVideoId}
                    setSelectedVideoId={setSelectedVideoId}
                    colorTheme={colorTheme}
                />
                <TeachingPhilosophyComponent colorTheme={colorTheme} />
                <TimelineComponent colorTheme={colorTheme} />
                <TestimonialsComponent
                    colorTheme={colorTheme}
                    selectedTestimonial={selectedTestimonial}
                    setSelectedTestimonial={setSelectedTestimonial}
                />
                <ContactComponent colorTheme={colorTheme} />
            </main>
            <FooterComponent colorTheme={colorTheme} />
            <ScrollToTopComponent
                showScrollTop={showScrollTop}
                scrollToTop={scrollToTop}
                colorTheme={colorTheme}
            />
        </div>
    );
};

export default TeachingPortfolio;
