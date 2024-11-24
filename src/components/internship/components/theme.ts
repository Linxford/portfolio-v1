// src/theme.ts
export type ThemeOption = 'emerald' | 'blue' | 'purple' | 'rose';

export type ThemeColors = {
    primary: string;
    button: string;
    text: string;
    border: string;
};

export const themeColors: Record<ThemeOption, ThemeColors> = {
    emerald: {
        primary: 'from-emerald-600 to-teal-600',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        text: 'text-emerald-600',
        border: 'border-emerald-600',
    },
    blue: {
        primary: 'from-blue-600 to-indigo-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        text: 'text-blue-600',
        border: 'border-blue-600',
    },
    purple: {
        primary: 'from-purple-600 to-pink-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        text: 'text-purple-600',
        border: 'border-purple-600',
    },
    rose: {
        primary: 'from-rose-600 to-pink-600',
        button: 'bg-rose-600 hover:bg-rose-700',
        text: 'text-rose-600',
        border: 'border-rose-600',
    },
};
