// src/components/StatsSectionComponent.jsx
import React from 'react';
import { Users, Book, Trophy, Star, Code } from 'lucide-react';
import { themeColors, ThemeOption } from '../components/theme';

interface StatsSectionComponentProps {
    colorTheme: ThemeOption;
}

const StatsSectionComponent: React.FC<StatsSectionComponentProps> = ({ colorTheme }) => {
    const stats = [
        { icon: Users, label: 'Students Taught', value: '100+' },
        { icon: Book, label: 'Courses Developed', value: '12' },
        { icon: Trophy, label: 'Awards Received', value: '5' },
        { icon: Star, label: 'Average Rating', value: '4.9/5' },
        // {icon: Code, label: 'Coding ', value: '12'}
    ];

    return (
        <section className="py-12 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700 transform hover:scale-105 transition-transform duration-300"
                        >
                            <stat.icon className={`w-8 h-8 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
                            <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{stat.value}</div>
                            <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSectionComponent;
