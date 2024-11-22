import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Reviews from '../components/Reviews';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import ParticlesBackground from '../components/ParticlesBackground';
import { useGithubStore } from '../store/githubStore';
import Footer from '../components/Footer';
import TechStack from '../components/TechStack';

export default function Portfolio() {
  const fetchGithubData = useGithubStore((state) => state.fetchGithubData);

  useEffect(() => {
    fetchGithubData();
  }, [fetchGithubData]);

  return (
    <div className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Projects />
      <Reviews />
      <Skills />
      <Contact />
    <Footer/>
      {/* <footer className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Linxford Kwabena. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}


// import { Container } from '../components/styles'
// import reactIcon from '/src/assets/telegram.svg'
// import linkedin from '/src/assets/linkedin.svg'
// import githubIcon from '/src/assets/github.svg'
// import whatsapp from '/src/assets/whatsapp.svg'
// import telegram from '/src/assets/telegram.svg'
// import instagramIcon from '/src/assets/instagram.svg'
// import stack from '/src/assets/stack.png'
// // import discordIcon from 'src/assets/discord.png'

// export function Footer() {
//   return (
//     <Container className="footer">
//       <a href="https://ashraf.app" className="logo">
//         <span>www.ashraf.app</span>
//       </a>
//       <div>
//         <p>
//           This Website was made with <img src={reactIcon} alt="React" />
//           {/* <span>❤️</span> */}
//         </p>
//       </div>
//       <div className="social-media">
//         <a
//           href="https://www.linkedin.com/in/ashraf-chauhan-39bb5a230/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img src={linkedin} alt="Linkedin" />
//         </a>
//         <a
//           href="https://github.com/MohamedAshraf701"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img src={githubIcon} alt="GitHub" />
//         </a>
//         <a
//           href="https://api.whatsapp.com/send/?phone=%2B919662367101&text=Hello+Ashraf"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img src={whatsapp} alt="Whatsapp" />
//         </a>
//         <a
//           href="https://stackoverflow.com/users/22268421/zaid-chauhan"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img src={stack} alt="stack" />
//         </a>
//         <a
//           href="https://www.instagram.com/ashraf_7_0_1/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <img src={instagramIcon} alt="Instagram" />
//         </a>
//       </div>
//     </Container>
//   )
// }
