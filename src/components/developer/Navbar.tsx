import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold  bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                            <a href="/">{"< Linxford Kwabena  /> "}</a>
                        </span>
                    </div>

                    <div className="hidden md:block font-bold uppercase">
                        <div className="ml-10 flex items-center space-x-8">
                            {/* <ThemeToggle /> */}
                            <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
                            <a href="#about" className="hover:text-blue-500 transition-colors">About Me</a>
                            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
                            {/* <a href="#home" className="hover:text-blue-500 transition-colors">Home</a> */}
                            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
                            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com/linxford" target="_blank" rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/linxford" target="_blank" rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://twitter.com/linxford" target="_blank" rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                            <Twitter size={20} />
                        </a>
                        <ThemeToggle />
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 h-64' : 'opacity-0 h-0 overflow-hidden'
                }`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
                    <a href="#home" className="block px-3 py-2 hover:text-blue-500 transition-colors">Home</a>
                    <a href="#about" className="block px-3 py-2 hover:text-blue-500 transition-colors">About</a>
                    <a href="#projects" className="block px-3 py-2 hover:text-blue-500 transition-colors">Projects</a>
                    <a href="#skills" className="block px-3 py-2 hover:text-blue-500 transition-colors">Skills</a>
                    <a href="#contact" className="block px-3 py-2 hover:text-blue-500 transition-colors">Contact</a>

                    <div className="flex items-center space-x-4 px-3 py-2">
                        <a href="https://github.com/linxford" target="_blank" rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/linxford" target="_blank" rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://twitter.com/linxford" target="_blank" rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
