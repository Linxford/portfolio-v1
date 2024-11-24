// src/videoData.ts
import videoSrc from '/src/assets/videos/fb1.mp4';

export interface TimelineData {
    title: string;
    description: string;
    year: string;
}

export const timeline: TimelineData[] = [
    {
        year: '2024',
        title: 'Senior Education Specialist',
        description: 'Led professional development initiatives and mentored new teachers.',
    },
    {
        year: '2023',
        title: 'Curriculum Developer',
        description: 'Designed innovative learning programs and assessment methods.',
    },
    {
        year: '2022',
        title: 'Teaching Excellence Award',
        description: 'Recognized for outstanding contribution to student success.',
    },
    // Add more video objects as needed
];
