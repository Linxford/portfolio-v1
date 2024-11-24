// src/videoData.ts
import videoSrc from '/src/assets/videos/fb1.mp4';

export interface VideoData {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
}
 
export const videoData: VideoData[] = [
    {
        id: 1,
        title: "Interactive Teaching Methods",
        description: "A demonstration of engaging teaching techniques in the classroom.",
        videoUrl: videoSrc
    },
    {
        id: 2,
        title: "Student-Centered Learning Approach",
        description: "Exploring the benefits of a student-centered learning environment.",
        videoUrl: videoSrc
    },
    // Add more video objects as needed
];
