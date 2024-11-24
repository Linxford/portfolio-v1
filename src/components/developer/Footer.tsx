import reactIcon from '/src/assets/react-icon.svg'
import linkedin from '/src/assets/linkedin.svg'
import githubIcon from '/src/assets/github.svg'
import whatsapp from '/src/assets/whatsapp.svg'
import telegram from '/src/assets/telegram.svg'
import instagramIcon from '/src/assets/instagram.svg'
import stack from '/src/assets/stack.png'

import { LinkedIn, WhatsApp, StackOverflow, Telegram, Github, Instagram } from '../../utils/helpers'

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-gray-600 dark:text-gray-400">
                {/* Left Section */}
                <div className="text-sm">
                    © {new Date().getFullYear()} Crafted with 🩵 by <a href={Github} className="hover:underline">Linxford Kwabena.
                    </a> </div>

                {/* Center Section */}
                <div className="flex items-center my-4 md:my-0">
                    <p className="text-sm mr-2">This Website was made with</p>
                    <img
                        src={reactIcon}
                        alt="React"
                        className="w-5 h-5"
                    />
                </div>

                {/* Right Section */}
                <div className="flex space-x-4">
                    <a href={LinkedIn} aria-label="LinkedIn" className="hover:opacity-75" target='_blank'>
                        <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
                    </a>
                    <a href={Github} aria-label="GitHub" className="hover:opacity-75" target='_blank'>
                        <img src={githubIcon} alt="GitHub" className="w-5 h-5" />
                    </a>
                    <a href={WhatsApp} aria-label="WhatsApp" className="hover:opacity-75" target='_blank'>
                        <img src={whatsapp} alt="WhatsApp" className="w-5 h-5" />
                    </a>
                    <a href={StackOverflow} aria-label="StackOverflow" className="hover:opacity-75" target='_blank'>
                        <img src={stack} alt="StackOverflow" className="w-5 h-5" />
                    </a>
                    <a href={Instagram} aria-label="Instagram" className="hover:opacity-75" target='_blank'>
                        <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
                    </a>
                    <a href={Telegram} aria-label="Telegram" className="hover:opacity-75" target='_blank'>
                        <img src={telegram} alt="Instagram" className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
