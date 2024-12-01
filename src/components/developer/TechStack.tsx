import React from "react";
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaAws,
    FaDatabase,
} from "react-icons/fa";
import { SiFlutter, SiFirebase, SiGraphql, SiMongodb, SiTailwindcss, SiMaterialdesign } from "react-icons/si";

const techStack = [
    {
        icon: SiFlutter,
        title: "Flutter",
        description: "Cross-platform app development framework for building beautiful, responsive mobile apps."
    },
    {
        icon: FaReact,
        title: "React & React Native",
        description: "Powerful tools for building dynamic web and mobile applications."
    },
    {
        icon: SiFirebase,
        title: "Firebase",
        description: "Comprehensive platform for cloud storage, real-time databases, and authentication."
    },
    {
        icon: FaAws,
        title: "AWS",
        description: "Cloud computing services for secure, scalable backend solutions."
    },
    //   {
    //     icon: SiGraphql,
    //     title: "GraphQL",
    //     description: "Efficient API query language for flexible and precise data fetching."
    //   },
    {
        icon: FaNodeJs,
        title: "Node.js",
        description: "JavaScript runtime for building scalable backend systems."
    },
    {
        icon: SiMongodb,
        title: "MongoDB",
        description: "NoSQL database for scalable, high-performance storage."
    },
    {
        icon: FaPython,
        title: "Python",
        description: "General-purpose programming language for AI and backend development."
    },

    {
        icon: SiMaterialdesign,
        title: "Material UI",
        description: "Framework for modern and responsive designs by google."
    },
    {
        icon: SiTailwindcss,
        title: "Tailwind CSS",
        description: "Utility-first CSS framework for modern, responsive UI designs."
    }
];

export default function TechStack() {
    return (

        <section  id="techstack" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Tech Stack</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Tools and technologies I use to build exceptional products.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {techStack.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <div key={index} className="h-full bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 mb-6 mx-auto rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                                    <Icon className="w-full h-full text-white text-2xl" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 font-display text-center">{tech.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-center">{tech.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
