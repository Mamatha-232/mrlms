import { Link } from 'react-router-dom';
import { courses, assignments } from '../../data/mockData';
import { motion } from 'framer-motion';

const StudentDashboard = () => {
  const enrolled = courses.slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Student Dashboard</h1>
        <p className="dashboard-subtitle">Your learning overview</p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="stat-card">
            <div className="stat-number">{enrolled.length}</div>
            <div className="stat-label">Courses Enrolled</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{assignments.length}</div>
            <div className="stat-label">Assignments</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">40%</div>
            <div className="stat-label">Completed</div>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <h2 className="dashboard-section-title">Assigned Courses</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {enrolled.map((course) => (
            <motion.div key={course.id} whileHover={{ y: -4 }} className="course-card">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-instructor">{course.instructor}</p>
              <div className="course-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${course.progress}%` }} />
                </div>
                <span className="progress-text">{course.progress}%</span>
              </div>
              <Link className="course-link" to={`/student/course/${course.id}`}>
                View Course
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
