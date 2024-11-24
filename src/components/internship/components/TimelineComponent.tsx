// src/components/TimelineComponent.jsx
import React from 'react';
import { Clock } from 'lucide-react';
import { themeColors, ThemeOption } from '../components/theme';
import { timeline } from './data/timelineData'; // Replace with actual timeline data

interface TimelineComponentProps {
    colorTheme: ThemeOption;
}

const TimelineComponent: React.FC<TimelineComponentProps> = ({ colorTheme }) => {
    return (
        <section id="timeline" className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Clock className={`w-12 h-12 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Professional Journey</h2>
                    <p className="text-gray-600 dark:text-gray-400">My path in education</p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {timeline.map((item, index) => (
                        <div key={index} className="relative pl-8 pb-8">
                            <div className="absolute left-0 top-0 h-full w-px bg-gray-300 dark:bg-gray-700"></div>
                            <div className={`absolute left-0 top-0 w-2 h-2 rounded-full -translate-x-1/2 ${themeColors[colorTheme].button}`}></div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-102 transition-transform duration-300">
                                <div className={`text-sm font-semibold mb-2 ${themeColors[colorTheme].text}`}>{item.year}</div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TimelineComponent;
