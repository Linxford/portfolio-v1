// src/components/ImageModal.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { images } from './data/imageData';

interface ImageModalProps {
    image: string | null;
    onClose: () => void;
    initialIndex: number;
    title: string;
    description: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose, initialIndex, title, description }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    // Helper function for image navigation
    const navigateImage = (direction: 'next' | 'prev') => {
        if (setCurrentIndex === null) return;
        const newIndex = direction === 'next'
            ? (currentIndex + 1) % images.length
            : (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };
    if (!image) return null;
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="relative bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full animate-fadeIn"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                >
                    <X className="w-8 h-8" />
                </button>

                <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/3">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-auto rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                    </div>
                    <div className="p-6 md:w-1/3">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{title}</h2>
                        <p className="text-gray-600 dark:text-gray-300">{description}</p>
                    </div>
                </div>
                {/* Navigation buttons */}
                <button
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                >
                    <ChevronLeft className="w-8 h-8 " />
                </button>
                <button
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>
        </div>
    );

};

export default ImageModal;
