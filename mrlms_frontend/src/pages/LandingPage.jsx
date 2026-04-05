import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { courses } from '../data/mockData';

const LandingPage = () => {
  return (
    <div className="space-y-10">
      <section className="glass-card p-8 rounded-3xl border border-white/10 dark:border-white/10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="max-w-xl">
            <motion.h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              EduBoost LMS - Multi-Role Learning Management System
            </motion.h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">A premium LMS experience with role-based dashboards, immersive courses and smart progress analytics.</p>
            <div className="mt-6 flex gap-3">
              <Link to="/login" className="btn-primary">Get Started</Link>
              <Link to="/about" className="btn-secondary">How it works</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            {courses.map((course) => (
              <motion.div key={course.id} className="glass-card p-4 rounded-2xl" whileHover={{ scale: 1.02 }}>
                <h4 className="text-slate-900 dark:text-white font-bold">{course.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{course.instructor}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <motion.article className="glass-card p-6 rounded-2xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">For Students</h3>
          <p className="text-slate-600 dark:text-slate-300 mt-2">Track all your learning progress, do quizzes, submit assignments and explore courses.</p>
        </motion.article>
        <motion.article className="glass-card p-6 rounded-2xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">For Teachers</h3>
          <p className="text-slate-600 dark:text-slate-300 mt-2">Create courses quickly, manage classes, track submissions, and grade with ease.</p>
        </motion.article>
        <motion.article className="glass-card p-6 rounded-2xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">For Admins</h3>
          <p className="text-slate-600 dark:text-slate-300 mt-2">Admin panel with analytics, user and course management, and system settings.</p>
        </motion.article>
      </section>
    </div>
  );
};

export default LandingPage;
