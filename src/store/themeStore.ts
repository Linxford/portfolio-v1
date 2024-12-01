import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'system' | 'light' | 'dark';

interface ThemeState {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    isDark: boolean;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: 'system',
            isDark: false,
            setTheme: (theme) => {
                const isDark =
                    theme === 'system'
                        ? window.matchMedia('(prefers-color-scheme: dark)').matches
                        : theme === 'dark';
                set({ theme, isDark });

                if (theme === 'dark' || (theme === 'system' && isDark)) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            },
        }),
        {
            name: 'theme-storage',
        }
    )
);
