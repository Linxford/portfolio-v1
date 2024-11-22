import React, { useEffect, useState } from 'react';
import { Github, Star } from 'lucide-react';
import { useGithubStore } from '../store/githubStore';

type Repo = {
  id: string;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  cover_url?: string;
  topics?: string[];
};

export default function Projects() {
  const { repos, loading, fetchGithubData } = useGithubStore();
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);

  useEffect(() => {
    // Fetch repositories
    fetchGithubData();
  }, [fetchGithubData]);

  useEffect(() => {
    // Filter repositories with `html_url` or `project` tag
    const filtered = repos.filter((repo: Repo) => repo.html_url || (repo.topics && repo.topics.includes('project')));
    setFilteredRepos(filtered);
  }, [repos]);

  // Limit the number of repositories to show
  const featuredRepos = filteredRepos.slice(0, 6);

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
            // Skeleton loading state
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
            featuredRepos.map((repo) => (
              <div
                key={repo.id}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Repository Cover Image or Placeholder */}
                <div
                  className="relative h-48 bg-gradient-to-br from-blue-500 to-cyan-500"
                  style={{
                    backgroundImage: repo.cover_url
                      ? `url(${repo.cover_url})`
                      : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {!repo.cover_url && (
                    <div className="absolute inset-0 bg-black/20"></div>
                  )}
                  <div className="relative z-10 p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {repo.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400">{repo.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-600">
                      <Github className="mr-2" />
                      View on GitHub
                    </a>
                    <div className="flex items-center">
                      <Star className="mr-2" />
                      {repo.stargazers_count}
                    </div>
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
