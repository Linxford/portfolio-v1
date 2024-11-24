// src/videoData.ts

export interface TestimonialsData {
    text: string;
    rating: number;
    author: string;
    role: string;
}

export const testimonials: TestimonialsData[] = [

    {
        text: "An exceptional educator who truly understands how to engage students and make learning meaningful.",
        author: "Dr. Sarah Johnson",
        role: "Education Director",
        rating: 5,
    },
    {
        text: "Innovative teaching methods that have transformed our department's approach to education.",
        author: "Prof. Michael Chen",
        role: "Department Head",
        rating: 5,
    },
    {
        text: "Creates an inclusive and engaging learning environment where every student can thrive.",
        author: "Christiana Enni",
        role: "Fellow Educator",
        rating: 5,
    },
];
// Add more video objects as needed
