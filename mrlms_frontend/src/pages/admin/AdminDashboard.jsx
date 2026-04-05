import { users, courses } from '../../data/mockData';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', users: 40, courses: 10 },
  { name: 'Week 2', users: 75, courses: 14 },
  { name: 'Week 3', users: 110, courses: 18 },
  { name: 'Week 4', users: 155, courses: 22 },
];

const AdminDashboard = () => (
  <div className="space-y-6">
    <div className="dashboard-card">
      <h1 className="dashboard-title">Admin Overview</h1>
      <p className="dashboard-subtitle">Track platform activity, adoption, and course health in one place.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="stat-card">
          <div className="stat-number">{users.length}</div>
          <div className="stat-label">Total Users</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{courses.length}</div>
          <div className="stat-label">Total Courses</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">156</div>
          <div className="stat-label">Active Users</div>
        </div>
      </div>
    </div>

    <div className="dashboard-card">
      <h2 className="dashboard-section-title">Growth Analytics</h2>
      <div className="mt-4 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#0f172a" strokeWidth={3} />
            <Line type="monotone" dataKey="courses" stroke="#475569" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
