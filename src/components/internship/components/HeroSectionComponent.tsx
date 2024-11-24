// src/components/HeroSectionComponent.jsx
import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import { themeColors, ThemeOption } from '../components/theme';
import profileImage from '/src/assets/images/linxford_prof.png';

interface HeroSectionComponentProps {
    colorTheme: ThemeOption;
}

const HeroSectionComponent: React.FC<HeroSectionComponentProps> = ({ colorTheme }) => {
    return (
        <section id="home" className={`bg-gradient-to-r ${themeColors[colorTheme].primary} text-white py-20`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Teaching Portfolio</h1>
                        <p className="text-xl text-gray-100 mb-8">
                            Inspiring minds and shaping futures through innovative education
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#contact"
                                className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Get in Touch
                            </a>
                            <a
                                href="#teaching-philosophy"
                                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            <img
                                src={profileImage}
                                alt="Teacher Profile"
                                className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                                <Award className={`w-8 h-8 ${themeColors[colorTheme].text}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionComponent;
