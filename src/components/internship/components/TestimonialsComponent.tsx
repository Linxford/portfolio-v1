// src/components/TestimonialsComponent.jsx
import React from 'react';
import { MessageSquare, Star } from 'lucide-react';
import { themeColors, ThemeOption } from '../components/theme';
import { testimonials } from './data/testimonialsData'; // Replace with actual testimonials data

interface TestimonialsComponentProps {
    colorTheme: ThemeOption;
    selectedTestimonial: number;
    setSelectedTestimonial: (index: number) => void;
}

const TestimonialsComponent: React.FC<TestimonialsComponentProps> = ({ colorTheme, selectedTestimonial, setSelectedTestimonial }) => {
    return (
        <section id="testimonials" className="py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <MessageSquare className={`w-12 h-12 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Testimonials</h2>
                    <p className="text-gray-600 dark:text-gray-400">What colleagues and students say</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="overflow-hidden">
                            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${selectedTestimonial * 100}%)` }}>
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-4">
                                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-lg">
                                            <div className="flex items-center mb-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">"{testimonial.text}"</p>
                                            <div>
                                                <div className="font-semibold text-gray-800 dark:text-white">{testimonial.author}</div>
                                                <div className="text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center mt-6 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setSelectedTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${selectedTestimonial === index
                                        ? themeColors[colorTheme].button
                                        : 'bg-gray-300 dark:bg-gray-600'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsComponent;
