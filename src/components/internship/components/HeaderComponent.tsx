// src/components/HeaderComponent.jsx
import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Camera, Clock, Lightbulb, Mail, MessageSquare, PlayCircle } from 'lucide-react';
import { themeColors, ThemeOption } from '../components/theme';

interface HeaderComponentProps {

    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    colorTheme: ThemeOption;
    setColorTheme: (theme: ThemeOption) => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ isMenuOpen, setIsMenuOpen, colorTheme, setColorTheme }) => {
    // Navigation links with icons
    const [, setActiveSection] = useState('home');
    const navigationLinks = [
        { id: 'home', label: 'Home', icon: BookOpen },
        { id: 'teaching-action', label: 'Teaching in Action', icon: Camera },
        { id: 'video-highlights', label: 'Video Highlights', icon: PlayCircle },
        { id: 'teaching-philosophy', label: 'Philosophy', icon: Lightbulb },
        { id: 'timeline', label: 'Journey', icon: Clock },
        { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
        { id: 'contact', label: 'Contact', icon: Mail },
    ];
     return (
        <header className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <a href="/teaching">
                        <div className="flex items-center space-x-3">
                            <BookOpen className={`h-8 w-8 ${themeColors[colorTheme].text}`} />
                            <span className="text-xl font-bold text-gray-800 dark:text-white">EduPortfolio</span>
                        </div>
                    </a>

                    <div className="hidden md:flex space-x-2">
                        {Object.keys(themeColors).map((theme) => (
                            <button
                                key={theme}
                                onClick={() => setColorTheme(theme as ThemeOption)}
                                className={`w-6 h-6 rounded-full ${theme === 'emerald' ? 'bg-emerald-600' :
                                    theme === 'blue' ? 'bg-blue-600' :
                                        theme === 'purple' ? 'bg-purple-600' :
                                            'bg-rose-600'
                                    } ${colorTheme === theme ? 'ring-2 ring-offset-2' : ''}`}
                            />
                        ))}
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6">
                        {navigationLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className={`flex items-center space-x-1 text-gray-600 hover:${themeColors[colorTheme].text} dark:text-gray-300 transition-colors`}
                            >
                                <link.icon className="w-4 h-4" />
                                <span>{link.label}</span>
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 dark:text-gray-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
                    <div className="px-4 py-2 space-y-2">
                        {navigationLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    setActiveSection(link.id);
                                }}
                            >
                                <link.icon className="w-4 h-4" />
                                <span>{link.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default HeaderComponent;
