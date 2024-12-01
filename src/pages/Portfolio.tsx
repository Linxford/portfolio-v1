import { useEffect } from 'react';
import Navbar from '../components/developer/Navbar';
import Hero from '../components/developer/Hero';
import Services from '../components/developer/Services';
import TechStack from '../components/developer/TechStack';
import Projects from '../components/developer/Projects';
import Reviews from '../components/developer/Reviews';
import Skills from '../components/developer/Skills';
import Contact from '../components/developer/Contact';
import ParticlesBackground from '../components/developer/ParticlesBackground';
import Footer from '../components/developer/Footer';
import { useGithubStore } from '../store/githubStore';
import TeachingPortfolio from '../components/internship/TeachingPortfolio';
import AboutMe from '../components/developer/AboutMe';

export default function Portfolio() {
    const fetchGithubData = useGithubStore((state) => state.fetchGithubData);

    useEffect(() => {
        fetchGithubData();
    }, [fetchGithubData]);

    return (
        <div className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
            {/* Background Effects */}
            <ParticlesBackground />
            {/* Page Sections */}
            <Navbar />
            <Hero />
            {/* <AboutMe /> */}
            <TechStack />
            <Skills />
            <Projects />
            <Services />
            <Reviews />
            <Contact />
            <Footer />
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
