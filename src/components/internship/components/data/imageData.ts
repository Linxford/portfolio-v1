// src/imageData.ts
import profileImage from '/src/assets/images/linxford_prof.png';
import img1 from '/src/assets/images/IMG-20241122-WA0009.jpg'

interface ImageData {
    src: string;
    title: string;
    description: string;
    alt: string;
}

export const images: ImageData[] = [
    {
        src: img1,
        title: "Working on TLR for the school",
        description: "Creating TLRs for the school from JHS 1 to JHS 3 offering computing",
        alt: "TLRs being created"
    },
    {
        src: profileImage,
        title: "Group Discussion",
        description: "Facilitating a group discussion on current events in our social studies class.",
        alt: ''
    }, {
        src: profileImage,
        title: "Interactive Learning Session",
        description: "Students engaging in a hands-on experiment during our science class.",
        alt: ''
    },
    {
        src: profileImage,
        title: "Group Discussion",
        description: "Facilitating a group discussion on current events in our social studies class.",
        alt: ''
    }, {
        src: profileImage,
        title: "Interactive Learning Session",
        description: "Students engaging in a hands-on experiment during our science class.",
        alt: ''
    },
    {
        src: profileImage,
        title: "Group Discussion",
        description: "Facilitating a group discussion on current events in our social studies class.",
        alt: ''
    }, {
        src: profileImage,
        title: "Interactive Learning Session",
        description: "Students engaging in a hands-on experiment during our science class.",
        alt: ''
    },
    {
        src: profileImage,
        title: "Group Discussion",
        description: "Facilitating a group discussion on current events in our social studies class.",
        alt: ''
    },
    // Add more video objects as needed
];
