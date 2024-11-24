// src/components/VideoHighlightsComponent.jsx
import React from 'react';
import { Video } from 'lucide-react';
import VideoModal from './VideoModal';
import VideoThumbnail from './VideoThumbnail';
import { videoData } from './data/videoData'; // Replace with actual video data
import { themeColors, ThemeOption } from './theme';

interface VideoHighlightsComponentProps {
    selectedVideoId: number | null;
    setSelectedVideoId: (id: number | null) => void;
    colorTheme: ThemeOption
}

const VideoHighlightsComponent: React.FC<VideoHighlightsComponentProps> = ({ selectedVideoId, setSelectedVideoId, colorTheme }) => {
    return (
        <section id='video-highlights' className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <Video className={`w-12 h-12 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Video Highlights
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                    Capturing moments of learning and growth
                </p>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {videoData.map((video) => (
                        <div
                            key={video.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                        >
                            <VideoThumbnail
                                videoUrl={video.videoUrl}
                                title={video.title}
                                onClick={() => setSelectedVideoId(video.id)}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                                    {video.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {video.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedVideoId && <VideoModal videoId={selectedVideoId} onClose={() => setSelectedVideoId(null)} />}
        </section>
    );
};

export default VideoHighlightsComponent;
