import { useState } from 'react';

const CreateCoursePage = () => {
  const [course, setCourse] = useState({ title: '', description: '', duration: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Course created: ${course.title}`);
    setCourse({ title: '', description: '', duration: '' });
  };

  return (
    <div className="dashboard-panel mx-auto max-w-xl">
      <h2 className="dashboard-section-title">Create Course</h2>
      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <input
          value={course.title}
          onChange={(e) => setCourse((c) => ({ ...c, title: e.target.value }))}
          placeholder="Course Title"
          className="dashboard-input"
          required
        />
        <textarea
          value={course.description}
          onChange={(e) => setCourse((c) => ({ ...c, description: e.target.value }))}
          placeholder="Description"
          className="dashboard-input min-h-32"
          required
        />
        <input
          value={course.duration}
          onChange={(e) => setCourse((c) => ({ ...c, duration: e.target.value }))}
          placeholder="Duration"
          className="dashboard-input"
          required
        />
        <button className="dashboard-button-primary">Publish Course</button>
      </form>
    </div>
  );
};

export default CreateCoursePage;
