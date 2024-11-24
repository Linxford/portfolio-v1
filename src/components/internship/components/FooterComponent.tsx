// src/components/FooterComponent.jsx
import React from 'react';
import { themeColors, ThemeOption } from '../components/theme';
import { BookOpen, Camera } from 'lucide-react';
import { Github } from '../../../utils/helpers';
import reactIcon from '/src/assets/react-icon.svg'
interface FooterComponentProps {
    colorTheme: ThemeOption;
}

const FooterComponent: React.FC<FooterComponentProps> = ({ colorTheme }) => {
    return (
        <footer className="bg-gray-800 text-white pt-16 pb-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <BookOpen className={`h-8 w-8 ${themeColors[colorTheme].text}`} />
                            <span className="text-xl font-bold">EduPortfolio</span>
                        </div>
                        <p className="text-gray-400">
                            Dedicated to excellence in education and inspiring the next generation of learners.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                                    <BookOpen className="w-4 h-4" />
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#teaching-action" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                                    <Camera className="w-4 h-4" />
                                    <span>Teaching in Action</span>
                                </a>
                            </li>
                            {/* Add more links as needed */}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Teaching Materials</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">Research Papers</a>
                            </li>
                            {/* Add more resources as needed */}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
                        <p className="text-gray-400 mb-4">Subscribe to my newsletter for educational insights and updates.</p>
                        <div className="space-y-2 ">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50"
                            />
                            <button
                                // className={`w-full ${themeColors[colorTheme].button} px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white'}
                                className={`${themeColors[colorTheme].button} text-white px-4 py-2 rounded-lg font-semibold transition-colors bg-emerald-600 hover:bg-emerald-700`}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 mb-4 md:mb-0">
                            {/* &copy; {new Date().getFullYear()} Teaching Portfolio. All rights reserved.
                        </div>
                        <div className="text-sm"> */}
                            &copy; {new Date().getFullYear()} Crafted with 🩵 by <a href={Github} className="hover:underline">Linxford Kwabena.
                            </a> </div>
                        <div className="flex items-center my-4 md:my-0 ">
                            <p className="text-gray-400 mr-2">This Website was made with</p>
                            <img
                                src={reactIcon}
                                alt="React"
                                className="w-5 h-5"
                            />
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
