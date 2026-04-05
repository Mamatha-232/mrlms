import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../routes/AuthContext';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Layout = ({ children, darkMode, setDarkMode }) => {
  const auth = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const publicPages = ['/', '/about', '/contact', '/login', '/forgot-password'];
  const isDashboardPage = auth.isAuthenticated && !publicPages.includes(location.pathname);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    setSidebarOpen(false);
  }, [children]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDashboardPage
          ? 'dashboard-shell'
          : darkMode
            ? 'bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-slate-100'
            : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 text-slate-900'
      }`}
    >
      <header
        className={`sticky top-0 z-40 p-4 ${
          isDashboardPage
            ? 'dashboard-header'
            : 'backdrop-blur-xl glass-card border-b border-white/10'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {isDashboardPage && (
              <button
                onClick={() => setSidebarOpen((prev) => !prev)}
                className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white md:hidden"
                aria-label="Toggle navigation"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
            <Link
              to="/"
              className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}
            >
              EduBoost LMS
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className={`rounded-xl border px-3 py-2 transition ${
                isDashboardPage
                  ? 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800'
                  : 'border-white/20 focus:outline-none hover:bg-white/10 hover:shadow-md hover:shadow-indigo-500/20'
              }`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {auth.isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className={`text-sm ${isDashboardPage ? 'text-slate-600 dark:text-slate-300' : ''}`}>
                  {auth.user.name} ({auth.user.role})
                </span>
                <button
                  onClick={auth.logout}
                  className={`text-sm ${
                    isDashboardPage
                      ? 'text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
                      : 'text-red-400 hover:text-red-300'
                  }`}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="text-sm hover:text-indigo-300">
                Login
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className={`mx-auto max-w-7xl p-4 md:p-6 ${isDashboardPage ? 'md:ml-64' : ''}`}>
        {isDashboardPage && (
          <Sidebar
            role={auth.user.role}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        )}

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`w-full ${isDashboardPage ? 'mx-auto max-w-6xl py-2' : ''}`}
        >
          {children}
        </motion.section>
      </main>

      <footer
        className={`py-6 text-center text-sm ${
          isDashboardPage
            ? 'text-slate-500 dark:text-slate-400'
            : darkMode
              ? 'text-slate-400'
              : 'text-slate-600'
        }`}
      >
        (c) 2026 MRMS. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
