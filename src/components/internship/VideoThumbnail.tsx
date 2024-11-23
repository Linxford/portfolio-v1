import React, { useState, useEffect } from 'react';
import { Loader, Play } from 'lucide-react';

interface VideoThumbnailProps {
    videoUrl: string;
    title: string;
    onClick: () => void;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ videoUrl, title, onClick }) => {
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const videoElement = document.createElement('video');
        videoElement.src = videoUrl;
        videoElement.crossOrigin = 'anonymous';

        videoElement.addEventListener('loadeddata', () => {
            videoElement.currentTime = 1;
        });

        videoElement.addEventListener('seeked', () => {
            const canvas = document.createElement('canvas');
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            canvas.getContext('2d')?.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            setThumbnail(canvas.toDataURL());
            setIsLoading(false);
        });

        videoElement.addEventListener('error', (e) => {
            console.error('Error loading video:', e);
            setIsLoading(false);
        });

        return () => {
            videoElement.remove();
        };
    }, [videoUrl]);

    return (
        <div
            className="aspect-video bg-gray-200 dark:bg-gray-700 relative group cursor-pointer"
            onClick={onClick}
        >
            {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Loader className="w-8 h-8 text-gray-500 animate-spin" />
                </div>
            ) : thumbnail ? (
                <img
                    src={thumbnail}
                    alt={`Video thumbnail ${title}`}
                    className="w-full h-full object-cover"
                />
            ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-16 h-16 text-gray-500" />
                </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-16 h-16 text-white" />
            </div>
        </div>
    );
};

export default VideoThumbnail;
