import { Link } from 'react-router-dom';
import { courses } from '../../data/mockData';

const TeacherDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Teacher Dashboard</h1>
        <p className="dashboard-subtitle">Manage teaching workflows, track activity, and stay on top of submissions.</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="stat-card">
            <div className="stat-number">{courses.length}</div>
            <div className="stat-label">Courses</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">28</div>
            <div className="stat-label">Submissions</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">12</div>
            <div className="stat-label">New Enrollments</div>
          </div>
        </div>
      </div>

      <div className="dashboard-card">
        <h2 className="dashboard-section-title">Quick Actions</h2>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link className="dashboard-button-primary" to="/teacher/create-course">
            Create Course
          </Link>
          <Link className="dashboard-button-secondary" to="/teacher/manage-courses">
            Manage Courses
          </Link>
          <Link className="dashboard-button-secondary" to="/teacher/submissions">
            View Submissions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
