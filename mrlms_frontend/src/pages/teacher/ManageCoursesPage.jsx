import { courses } from '../../data/mockData';

const ManageCoursesPage = () => {
  const handleEdit = (course) => {
    alert(`Edit course: ${course.title}`);
  };

  const handleDelete = (course) => {
    alert(`Delete course: ${course.title}? (mock)`);
  };

  return (
    <div className="dashboard-panel">
      <h2 className="dashboard-section-title">Manage Courses</h2>
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        {courses.map((c) => (
          <div key={c.id} className="dashboard-subcard">
            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">{c.title}</h4>
            <p className="mt-2 text-sm dashboard-muted">{c.instructor}</p>
            <div className="mt-4 flex gap-2">
              <button onClick={() => handleEdit(c)} className="dashboard-button-primary text-xs">
                Edit
              </button>
              <button onClick={() => handleDelete(c)} className="dashboard-button-secondary text-xs">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCoursesPage;
