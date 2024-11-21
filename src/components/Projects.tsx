import React from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { useGithubStore } from '../store/githubStore';

export default function Projects() {
  const { repos, loading } = useGithubStore();

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my recent Flutter applications showcasing clean architecture, 
            beautiful UI, and exceptional user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array(6).fill(0).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 dark:bg-gray-800 h-48 rounded-t-xl"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-b-xl space-y-3">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                </div>
              </div>
            ))
          ) : (
            repos.map((repo) => (
              <div key={repo.id} 
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-cyan-500 p-4">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-white mb-2">{repo.name}</h3>
                    <div className="flex items-center gap-4 text-white/80">
                      <div className="flex items-center gap-1">
                        <Star size={16} />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={16} />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {repo.homepage && (
                      <a href={repo.homepage} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {repo.description || 'No description available'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {repo.topics?.map((topic: string) => (
                      <span key={topic} 
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}