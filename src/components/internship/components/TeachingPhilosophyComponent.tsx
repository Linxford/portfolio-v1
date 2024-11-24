// src/components/TeachingPhilosophyComponent.jsx
import React from 'react';
import { Lightbulb } from 'lucide-react';
import { themeColors, ThemeOption } from './theme';


interface TeachingPhilosophyComponentProps {
    colorTheme: ThemeOption;
}
const TeachingPhilosophyComponent:React.FC <TeachingPhilosophyComponentProps>= ({colorTheme}) => {
    // const TimelineComponent: React.FC<TimelineComponentProps> = ({ colorTheme }) => {

    return (
        <section id="teaching-philosophy" className="py-16">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <Lightbulb className={`w-12 h-12 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Teaching Philosophy</h2>
                    <p className="text-gray-600 dark:text-gray-400">My approach to education and learning</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        My teaching philosophy centers on creating an engaging and inclusive environment where every student feels empowered to learn. I believe in the power of curiosity-driven education and aim to inspire lifelong learning in my students.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Through interactive teaching methods and personalized attention, I strive to create meaningful connections between theoretical concepts and real-world applications, making learning both relevant and enjoyable for all students.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TeachingPhilosophyComponent;
