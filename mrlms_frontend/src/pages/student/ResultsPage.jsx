const ResultsPage = () => (
  <div className="dashboard-panel">
    <h2 className="dashboard-section-title">Results</h2>
    <div className="mt-4 grid gap-6 md:grid-cols-3">
      <div className="dashboard-subcard p-4 text-slate-900 dark:text-white">Completed Assignments: 8/10</div>
      <div className="dashboard-subcard p-4 text-slate-900 dark:text-white">Average Quiz: 82%</div>
      <div className="dashboard-subcard p-4 text-slate-900 dark:text-white">Overall Progress: 56%</div>
    </div>
  </div>
);

export default ResultsPage;
