// src/components/ContactComponent.jsx
import React from 'react';
import { Calendar, Linkedin, Mail } from 'lucide-react';
import { themeColors, ThemeOption } from './theme';

interface ContactComponentProps {
    colorTheme: ThemeOption;
}

const ContactComponent: React.FC<ContactComponentProps> = ({ colorTheme }) => {
    return (
        <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <Mail className={`w-6 h-6 ${themeColors[colorTheme].text}`} />
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Let's Connect</h2>
                        <p className="text-gray-600 dark:text-gray-400">Reach out to discuss educational opportunities</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Send a Message</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 dark:text-white"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 dark:text-white"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                                    <textarea
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 dark:text-white h-32"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className={`w-full ${themeColors[colorTheme].button} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}>
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                                <div className="flex items-center space-x-4">
                                    <Mail className={`w-6 h-6 ${themeColors[colorTheme].text}`} />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                                        <a href="mailto:linxford7@gmail.com" className="text-gray-600 dark:text-gray-400 hover:underline">
                                            linxford7@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                                <div className="flex items-center space-x-4">
                                    <Linkedin className={`w-6 h-6 ${themeColors[colorTheme].text}`} />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h4>
                                        <a href="https://linkedin.com/in/linxford" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:underline">
                                            View Profile
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                                <div className="flex items-center space-x-4">
                                    <Calendar className={`w-6 h-6 ${themeColors[colorTheme].text}`} />
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-white">Office Hours</h4>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Monday - Friday: 9:00 AM - 5:00 PM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactComponent;
