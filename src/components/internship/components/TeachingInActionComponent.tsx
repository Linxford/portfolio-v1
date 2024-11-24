// src/components/TeachingInActionComponent.jsx
import React from 'react';
import { Camera } from 'lucide-react';
import ImageModal from './ImageModal';
import { images } from './data/imageData'; // Replace with actual image data
import { themeColors, ThemeOption } from './theme';

interface TeachingInActionComponentProps {
    selectedImageIndex: number | null;
    setSelectedImageIndex: (index: number | null) => void;
    colorTheme: ThemeOption;
}

const TeachingInActionComponent: React.FC<TeachingInActionComponentProps> = ({ selectedImageIndex, setSelectedImageIndex, colorTheme }) => {
    return (
        <section id="teaching-action" className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <Camera className={`w-12 h-12 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        Teaching in Action
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Capturing moments of learning and growth
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                            onClick={() => setSelectedImageIndex(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="font-semibold">Teaching Session {index + 1}</p>
                                    <p className="text-sm">Interactive Learning Experience</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedImageIndex !== null && (
                <ImageModal
                    initialIndex={selectedImageIndex}
                    onClose={() => setSelectedImageIndex(null)}
                />
            )}
        </section>
    );
};

export default TeachingInActionComponent;
