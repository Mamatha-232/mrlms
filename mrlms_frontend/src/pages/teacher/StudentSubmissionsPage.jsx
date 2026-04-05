import { assignments } from '../../data/mockData';

const StudentSubmissionsPage = () => {
  const handleReview = (assignment) => {
    alert(`Review submission for: ${assignment.title}`);
  };

  return (
    <div className="dashboard-panel">
      <h2 className="dashboard-section-title">Student Submissions</h2>
      <div className="mt-4 space-y-3">
        {assignments.map((a) => (
          <div key={a.id} className="dashboard-subcard flex items-center justify-between gap-4 p-4">
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-100">{a.title}</p>
              <p className="mt-1 text-sm dashboard-muted">Due: {a.due}</p>
            </div>
            <button onClick={() => handleReview(a)} className="dashboard-button-secondary">
              Review
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentSubmissionsPage;
