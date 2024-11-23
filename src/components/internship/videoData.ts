// src/videoData.ts

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
        videoUrl: "https://www.youtube.com/watch?v=nOLb9g_7zWE&pp=ygUccmVhY3QgbmF0aXZlIG9yIGZsdXR0ZXIgMjAyNA%3D%3D"
    },
    {
        id: 2,
        title: "Student-Centered Learning Approach",
        description: "Exploring the benefits of a student-centered learning environment.",
        videoUrl: "https://www.youtube.com/watch?v=nOLb9g_7zWE&pp=ygUccmVhY3QgbmF0aXZlIG9yIGZsdXR0ZXIgMjAyNA%3D%3D"
    },
    // Add more video objects as needed
];
