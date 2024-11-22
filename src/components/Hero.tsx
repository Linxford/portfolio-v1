import React from 'react';
import { ArrowRight, Download, Github, Smartphone, Code2, Sparkles } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { useGithubStore } from '../store/githubStore';
import { useContent } from '../hooks/useContent';

export default function Hero() {
  const { profile } = useGithubStore();
  const content = useContent('hero');

  const stats = content.stats || [
    { label: 'Apps Developed', value: '20+' },
    { label: 'Clean Architecture', value: 'Yes' },
    { label: 'UI/UX Focused', value: 'Yes' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                  {content.title || 'Full-Stack Developer and AI Solution Architect'}
                </span>
                <div className="h-20">
                  <TypeAnimation
                    sequence={[
                      content.subtitle || 'Building Beautiful Apps',
                      2000,
                      'Creating Amazing UIs',
                      2000,
                      'Crafting Mobile Experiences',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="block text-3xl md:text-5xl mt-2"
                  />
                </div>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl font-light">
                {content.description || profile?.bio || 'Crafting exceptional mobile experiences with Flutter.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
                {content.cta_primary || 'View Projects'}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="/resume.pdf" download
                className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-105">
                {content.cta_secondary || 'Download CV'}
                <Download className="ml-2" size={20} />
              </a>
            </div>

            <div className="flex flex-wrap gap-8">
              {stats.map((stat: { label: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; value: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => {
                const Icon = index === 0 ? Smartphone : index === 1 ? Code2 : Sparkles;
                return (
                  <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Icon className="text-blue-500" />
                    <span>{stat.label}: {stat.value}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative animate-float lg:w-3/4 mx-auto">
            <div className="relative aspect-square rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 p-1">
              <img
                src={profile?.avatar_url || "src/assets/linxford_prof.png"}
                alt="Developer Profile"
                className="rounded-full w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full"></div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl animate-pulse">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium dark:text-gray-300">Available for Projects</span>
              </div>
            </div>

            <a href="https://github.com/linxford"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-4 -right-4 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12">
              <Github size={24} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
