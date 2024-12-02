// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// type Theme = 'system' | 'light' | 'dark';

// interface ThemeState {
//     theme: Theme;
//     setTheme: (theme: Theme) => void;
//     isDark: boolean;
// }

// export const useThemeStore = create<ThemeState>()(
//     persist(
//         (set) => ({
//             theme: 'system',
//             isDark: false,
//             setTheme: (theme) => {
//                 const isDark =
//                     theme === 'system'
//                         ? window.matchMedia('(prefers-color-scheme: dark)').matches
//                         : theme === 'dark';
//                 set({ theme, isDark });

//                 if (theme === 'dark' || (theme === 'system' && isDark)) {
//                     document.documentElement.classList.add('dark');
//                 } else {
//                     document.documentElement.classList.remove('dark');
//                 }
//             },
//         }),
//         {
//             name: 'theme-storage',
//         }
//     )
// );
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
                    theme === 'dark' ||
                    (theme === 'system' &&
                        window.matchMedia('(prefers-color-scheme: dark)').matches);

                set({ theme, isDark });

                if (isDark) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            },
        }),
        {
            name: 'theme-storage', // Key for localStorage
        }
    )
);

// Apply theme on app load
const applySavedTheme = () => {
    const savedTheme = JSON.parse(localStorage.getItem('theme-storage') || '{}');
    const theme: Theme = savedTheme?.state?.theme || 'system';

    const isDark =
        theme === 'dark' ||
        (theme === 'system' &&
            window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};

// Call this function early in your app's entry file (e.g., `index.tsx` or `App.tsx`)
applySavedTheme();
