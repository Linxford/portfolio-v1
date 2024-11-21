import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  const { theme } = useThemeStore();
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
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