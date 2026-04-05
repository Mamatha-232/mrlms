import { courses } from '../../data/mockData';

const ManageCoursesPage = () => {
  const handleApprove = (course) => {
    alert(`Approve course: ${course.title}`);
  };

  const handleRemove = (course) => {
    alert(`Remove course: ${course.title}? (mock)`);
  };

  return (
    <div className="dashboard-panel">
      <h2 className="dashboard-section-title">Admin Manage Courses</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <div key={course.id} className="dashboard-subcard">
            <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{course.title}</p>
            <p className="mt-2 text-sm dashboard-muted">Instructor: {course.instructor}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button onClick={() => handleApprove(course)} className="dashboard-button-secondary text-xs">
                Approve
              </button>
              <button onClick={() => handleRemove(course)} className="dashboard-button-secondary text-xs">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCoursesPage;
