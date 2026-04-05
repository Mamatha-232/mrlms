import { useParams, Link } from 'react-router-dom';
import { courses } from '../../data/mockData';

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id) || courses[0];

  return (
    <div className="dashboard-panel">
      <h2 className="dashboard-section-title">{course.title}</h2>
      <p className="dashboard-muted mt-2">{course.description}</p>
      <div className="mt-6 space-y-2 text-sm text-slate-700 dark:text-slate-200">
        <p>Instructor: {course.instructor}</p>
        <p>Duration: {course.duration}</p>
        <p>Rating: {course.rating}</p>
      </div>
      <div className="mt-6 flex gap-3">
        <Link to={`/student/video/${course.id}`} className="dashboard-button-primary">
          Start Video
        </Link>
        <Link to="/student/assignments" className="dashboard-button-secondary">
          Assignments
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
