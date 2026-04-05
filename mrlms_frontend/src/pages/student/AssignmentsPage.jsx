import { assignments } from '../../data/mockData';
import { Link } from 'react-router-dom';

const AssignmentsPage = () => (
  <div className="dashboard-panel">
    <h2 className="dashboard-section-title">Assignments</h2>
    <ul className="mt-4 space-y-3">
      {assignments.map((a) => (
        <li key={a.id} className="dashboard-subcard flex items-center justify-between gap-4 p-4">
          <div>
            <p className="font-semibold text-slate-900 dark:text-slate-100">{a.title}</p>
            <p className="mt-1 text-xs dashboard-muted">Due: {a.due}</p>
          </div>
          <Link
            to="/student/submit"
            className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
          >
            Submit
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default AssignmentsPage;
