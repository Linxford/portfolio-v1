import { create } from 'zustand';
import { Octokit } from 'octokit';

interface GithubState {
  repos: any[];
  profile: any;
  loading: boolean;
  fetchGithubData: () => Promise<void>;
}

const octokit = new Octokit();
const USERNAME = 'linxford';

export const useGithubStore = create<GithubState>((set) => ({
  repos: [],
  profile: null,
  loading: false,
  fetchGithubData: async () => {
    set({ loading: true });
    try {
      const [profileResponse, reposResponse] = await Promise.all([
        octokit.request('GET /users/{username}', { username: USERNAME }),
        octokit.request('GET /users/{username}/repos', { 
          username: USERNAME,
          sort: 'updated',
          per_page: 6
        })
      ]);

      set({ 
        profile: profileResponse.data,
        repos: reposResponse.data,
        loading: false
      });
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      set({ loading: false });
    }
  }
}));