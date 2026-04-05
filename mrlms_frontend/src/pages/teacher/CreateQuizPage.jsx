import { useState } from 'react';

const CreateQuizPage = () => {
  const [quiz, setQuiz] = useState({ title: '', questions: 5 });

  return (
    <div className="dashboard-panel mx-auto max-w-xl">
      <h2 className="dashboard-section-title">Create Quiz</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Quiz created: ${quiz.title}`);
          setQuiz({ title: '', questions: 5 });
        }}
        className="mt-4 space-y-3"
      >
        <input
          value={quiz.title}
          onChange={(e) => setQuiz((q) => ({ ...q, title: e.target.value }))}
          placeholder="Quiz Title"
          className="dashboard-input"
          required
        />
        <input
          type="number"
          value={quiz.questions}
          onChange={(e) => setQuiz((q) => ({ ...q, questions: Number(e.target.value) }))}
          min={1}
          className="dashboard-input"
        />
        <button className="dashboard-button-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateQuizPage;
