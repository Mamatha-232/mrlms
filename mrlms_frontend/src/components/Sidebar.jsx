import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import {
  Home,
  BookOpen,
  FileText,
  HelpCircle,
  BarChart3,
  Plus,
  Settings,
  Upload,
  Users,
  TrendingUp,
  Award
} from 'lucide-react';

const items = {
  student: [
    { label: 'Overview', to: '/student', icon: Home },
    { label: 'Courses', to: '/student/courses', icon: BookOpen },
    { label: 'Assignments', to: '/student/assignments', icon: FileText },
    { label: 'Quizzes', to: '/student/quiz', icon: HelpCircle },
    { label: 'Results', to: '/student/results', icon: Award },
  ],
  teacher: [
    { label: 'Overview', to: '/teacher', icon: Home },
    { label: 'Create Course', to: '/teacher/create-course', icon: Plus },
    { label: 'Manage Courses', to: '/teacher/manage-courses', icon: BookOpen },
    { label: 'Upload Materials', to: '/teacher/upload-materials', icon: Upload },
    { label: 'Submissions', to: '/teacher/submissions', icon: FileText },
  ],
  admin: [
    { label: 'Dashboard', to: '/admin', icon: Home },
    { label: 'Manage Users', to: '/admin/manage-users', icon: Users },
    { label: 'Manage Courses', to: '/admin/manage-courses', icon: BookOpen },
    { label: 'Analytics', to: '/admin/analytics', icon: TrendingUp },
    { label: 'Settings', to: '/admin/settings', icon: Settings },
  ],
};

const Sidebar = ({ role, isOpen, onClose }) => {
  const list = items[role] || [];
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target) && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay (mobile only) */}
      {isOpen && (
        <div 
          className="sidebar-overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}
      >
        <h3 className="mb-6 px-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          {role} panel
        </h3>
        <ul className="flex flex-col gap-1">
          {list.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'sidebar-link-active' : 'sidebar-link-inactive'}`
                  }
                  onClick={onClose}
                >
                  <Icon size={18} className="sidebar-icon" />
                  <span className="sidebar-text">{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
