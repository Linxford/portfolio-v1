import React, { useState, useRef, useEffect } from 'react';
import { X, Loader, Play } from 'lucide-react';
import { videoData, } from './videoData';

interface VideoModalProps {
    videoId: number;
    onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoId, onClose }) => {
    const [isVideoLoading, setIsVideoLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const video = videoData.find(v => v.id === videoId);

    useEffect(() => {
        if (!video) return;

        const videoElement = document.createElement('video');
        videoElement.src = video.videoUrl;
        videoElement.crossOrigin = 'anonymous'; // Add this line if your video is hosted on a different domain

        videoElement.addEventListener('loadeddata', () => {
            generateThumbnail(videoElement);
        });

        videoElement.addEventListener('error', (e) => {
            console.error('Error loading video:', e);
            setIsVideoLoading(false);
        });

        return () => {
            videoElement.remove();
        };
    }, [video]);

    const generateThumbnail = (videoElement: HTMLVideoElement) => {
        videoElement.currentTime = 1; // Set to 1 second to avoid black frames at the start

        videoElement.addEventListener('seeked', () => {
            const canvas = document.createElement('canvas');
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            canvas.getContext('2d')?.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            setThumbnail(canvas.toDataURL());
            setIsVideoLoading(false);
        }, { once: true });
    };

    const handlePlayClick = () => {
        setIsPlaying(true);
    };

    if (!video) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="relative bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full animate-fadeIn"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                >
                    <X className="w-8 h-8" />
                </button>

                <div className="aspect-video bg-gray-900 rounded-t-lg overflow-hidden shadow-2xl">
                    {isVideoLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <Loader className="w-8 h-8 text-white animate-spin" />
                        </div>
                    )}

                    {!isPlaying ? (
                        <div
                            className="w-full h-full relative cursor-pointer group"
                            onClick={handlePlayClick}
                        >
                            {thumbnail ? (
                                <img
                                    src={thumbnail}
                                    alt={`Video thumbnail ${video.title}`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                                    <Loader className="w-8 h-8 text-white animate-spin" />
                                </div>
                            )}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Play className="w-16 h-16 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    ) : (
                        <video
                            ref={videoRef}
                            src={video.videoUrl}
                            controls
                            autoPlay
                            className="w-full h-full"
                            onLoadStart={() => setIsVideoLoading(true)}
                            onLoadedData={() => setIsVideoLoading(false)}
                        />
                    )}
                </div>

                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{video.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{video.description}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
