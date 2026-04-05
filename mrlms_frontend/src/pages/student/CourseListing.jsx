import { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../../data/mockData';

const CourseListing = () => {
  const [term, setTerm] = useState('');
  const filtered = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(term.toLowerCase()) ||
      c.instructor.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div className="dashboard-panel">
      <h2 className="dashboard-section-title">Courses</h2>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search courses"
        className="dashboard-input mt-4"
      />
      <div className="mt-5 grid gap-6 md:grid-cols-3">
        {filtered.map((course) => (
          <div key={course.id} className="dashboard-subcard">
            <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{course.title}</h4>
            <p className="mt-3 text-sm dashboard-muted">{course.description}</p>
            <p className="mt-2 text-xs dashboard-muted">Instructor: {course.instructor}</p>
            <Link
              to={`/student/course/${course.id}`}
              className="mt-4 inline-flex text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            >
              Explore
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseListing;
