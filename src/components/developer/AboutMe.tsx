// import React from 'react';
// import { MyPic } from '../../utils/helpers';

// const AboutMe: React.FC = () => {
//     return (
//         <section id='about' className="py-16 bg-gray-50 dark:bg-gray-900">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 {/* Header Section */}
//                 <div className="text-center mb-12">
//                     <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">About Me</h2>
//                     <p className="text-gray-600 dark:text-gray-400 mt-4">
//                         A passionate educator and developer, blending creativity, technology, and teaching to inspire learning and growth.
//                     </p>
//                 </div>

//                 {/* Main Content */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//                     {/* Image Section */}
//                     <div className="relative w-full h-auto flex justify-center">
//                         <img
//                             src={MyPic} // Replace with your image URL or import
//                             alt="About Me"
//                             className="rounded-lg shadow-lg max-w-full object-cover h-80 md:h-96"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30 rounded-lg"></div>
//                     </div>

//                     {/* Text Section */}
//                     <div>
//                         <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Who Am I?</h3>
//                         <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
//                             Hello! I'm a teacher and software developer passionate about empowering individuals through education and technology.
//                             With a strong background in <strong>teaching methodologies</strong> and software development, I aim to create impactful
//                             learning experiences that drive meaningful change.
//                         </p>

//                         <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Key Highlights:</h4>
//                         <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
//                             <li>Educator with experience in creating inclusive and engaging classroom environments.</li>
//                             <li>Software developer skilled in building modern, responsive web applications.</li>
//                             <li>Committed to lifelong learning and helping others grow.</li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Call to Action */}
//                 <div className="text-center mt-12">
//                     <a
//                         href="/resume.pdf" // Replace with your resume link or any other relevant file link
//                         download
//                         className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
//                     >
//                         Download My Resume
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutMe;


import React from 'react';
import { MyPic } from '../../utils/helpers';

const AboutMe: React.FC = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">About Me</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Passionate developer with a flair for building innovative solutions and solving real-world problems.
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img
                            src={MyPic}// Replace with your photo or illustration
                            alt="Developer Portrait"
                            className="rounded-lg shadow-lg max-w-full h-80 object-cover md:h-96"
                        />
                    </div>

                    {/* Text Section */}
                    <div>
                        <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Hi, I'm [Your Name]!</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            As a developer, I am deeply passionate about crafting efficient and scalable software solutions. With experience
                            in <strong>modern web and mobile technologies</strong>, I strive to deliver exceptional user experiences through
                            clean code and innovative design.
                        </p>

                        {/* Key Highlights */}
                        <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">What I Bring:</h4>
                        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
                            <li>Expertise in frontend frameworks like <strong>React</strong> and <strong>Flutter</strong>.</li>
                            <li>Proficiency in backend technologies including <strong>Node.js</strong> and <strong>Firebase</strong>.</li>
                            <li>Experience with responsive design and accessibility best practices.</li>
                            <li>A passion for learning and staying updated with emerging technologies.</li>
                        </ul>
                    </div>
                </div>

                {/* Stats and CTA */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Years of Experience</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Projects Delivered</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Client Satisfaction</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">∞</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">Lines of Code</p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <a
                        href="/resume.pdf" // Replace with your resume link
                        download
                        className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                    >
                        Download My Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
