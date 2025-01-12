import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import AdminLayout from './components/admin/AdminLayout';
import LoginPage from './components/admin/LoginPage';
import Dashboard from './components/admin/Dashboard';
import ProjectsManager from './components/admin/ProjectsManager';
import ServicesManager from './components/admin/ServicesManager';
import ReviewsManager from './components/admin/ReviewsManager';
import ContentManager from './components/admin/ContentManager';
import { useThemeStore } from './store/themeStore';
import { useAuthStore } from './store/authStore';
import { APP_NAME, Developer, Developer_Contact, formatDate } from './utils/helpers';
import { initGA, logPageView } from './utils/analytics';
import TeachingPortfolio from './components/internship/TeachingPortfolio';
import React from 'react';


function App() {
    const { theme } = useThemeStore();
    const checkAuth = useAuthStore((state) => state.checkAuth);
    const location = useLocation();

    // Initialize GA
    useEffect(() => {
        initGA();
        logPageView(location.pathname); // Log the initial page load
    }, []);

    // Log page views on route changes
    useEffect(() => {
        logPageView(location.pathname);
    }, [location]);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    // Reactively apply theme changes
    React.useEffect(() => {
        const root = document.documentElement;
        const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        if (isDark) root.classList.add('dark');
        else root.classList.remove('dark');
    }, [theme]);

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/teaching" element={<TeachingPortfolio />} /> {/* Move this before the admin routes */}
                <Route path="/admin/login" element={<LoginPage />} />
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="projects" element={<ProjectsManager />} />
                    <Route path="services" element={<ServicesManager />} />
                    <Route path="reviews" element={<ReviewsManager />} />
                    <Route path="content" element={<ContentManager />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;

console.log(formatDate(new Date()));
console.log(`Welcome to ${APP_NAME}`);
console.log(`Developed by 👉 ${Developer}`);
console.log(`Developer Contact 👉 ${Developer_Contact}`);
