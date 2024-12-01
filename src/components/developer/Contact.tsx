import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, LucideIcon } from 'lucide-react';
import { useContent } from '../../hooks/useContent';

export default function Contact() {
    const content = useContent('contact');
    const socialLinks = content.social_links || [];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        fetch('https://formsubmit.co/ajax/linxford7@gmail.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Form successfully submitted:', data);
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                        {content.title || 'Get In Touch'}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {content.description || 'Have a project in mind? Let\'s discuss how we can work together.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-[1px] rounded-xl">
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                        <Mail className="text-blue-500" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                                        <p className="text-gray-600 dark:text-gray-400">{content.email || "linxford7@gmail.com"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-[1px] rounded-xl">
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                                        <MapPin className="text-purple-500" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Location</h3>
                                        <p className="text-gray-600 dark:text-gray-400">{content.location || "Accra Ghana"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-[1px] rounded-xl">
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                                        <Phone className="text-green-500" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Phone</h3>
                                        <p className="text-gray-600 dark:text-gray-400">{content.phone || "+233 249 771 777"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center gap-6">
                            {socialLinks.map((link: any, index: number) => {
                                const iconMap: { [key: string]: LucideIcon } = {
                                    github: Github,
                                    linkedin: Linkedin,
                                    twitter: Twitter
                                };
                                const Icon = iconMap[link.platform] || Github;

                                return (
                                    <a key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                                        <Icon size={24} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                required
                                placeholder='enter your name here'
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                required
                                placeholder='enter email address'
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                required
                                placeholder='please enter your message here, let it be precise, and realistic'
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center justify-center gap-2 group"
                        >
                            Send Message
                            <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
