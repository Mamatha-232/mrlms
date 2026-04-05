import { useState } from 'react';

const CreateAssignmentPage = () => {
  const [assignment, setAssignment] = useState({ title: '', due: '' });

  return (
    <div className="dashboard-panel mx-auto max-w-xl">
      <h2 className="dashboard-section-title">Create Assignment</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('Assignment created');
          setAssignment({ title: '', due: '' });
        }}
        className="mt-4 space-y-3"
      >
        <input
          value={assignment.title}
          onChange={(e) => setAssignment((a) => ({ ...a, title: e.target.value }))}
          placeholder="Title"
          className="dashboard-input"
          required
        />
        <input
          value={assignment.due}
          onChange={(e) => setAssignment((a) => ({ ...a, due: e.target.value }))}
          type="date"
          className="dashboard-input"
          required
        />
        <button className="dashboard-button-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateAssignmentPage;
