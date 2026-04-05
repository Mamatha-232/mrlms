import { useState, useEffect } from 'react';
import { quizzes } from '../../data/mockData';

const sampleQuestions = [
  { q: 'What is React?', options: ['Library', 'Framework', 'Language', 'IDE'], answer: 0 },
  { q: 'What hook manages state?', options: ['useEffect', 'useState', 'useMemo', 'useRef'], answer: 1 },
];

const QuizPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(Array(sampleQuestions.length).fill(false));
  const [showResults, setShowResults] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [time, setTime] = useState(180);

  useEffect(() => {
    if (selectedQuiz) {
      setTime(selectedQuiz.time * 60);
      const timer = setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
      return () => clearInterval(timer);
    }
  }, [selectedQuiz]);

  const handleNext = () => {
    if (selected !== null) {
      setAnswered((prev) => {
        const newAnswered = [...prev];
        newAnswered[questionIndex] = true;
        return newAnswered;
      });
      setScore((prev) => prev + (selected === sampleQuestions[questionIndex].answer ? 1 : 0));
    }
    setSelected(null);
    if (questionIndex < sampleQuestions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setQuestionIndex((i) => i + 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setQuestionIndex((i) => i - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleQuestionSelect = (idx) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setQuestionIndex(idx);
      setIsTransitioning(false);
    }, 300);
  };

  const handleRetake = () => {
    setShowResults(false);
    setQuestionIndex(0);
    setSelected(null);
    setScore(0);
    setAnswered(Array(sampleQuestions.length).fill(false));
    setTime(selectedQuiz.time * 60);
  };

  if (!selectedQuiz) {
    return (
      <div className="dashboard-panel mx-auto max-w-3xl">
        <h2 className="dashboard-section-title">Available Quizzes</h2>
        <div className="mt-6 grid gap-4">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              onClick={() => setSelectedQuiz(quiz)}
              className="dashboard-subcard cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{quiz.title}</h3>
              <p className="mt-1 dashboard-muted">
                {quiz.questions} questions | {quiz.time} minutes
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="dashboard-panel mx-auto max-w-3xl">
        <h2 className="dashboard-section-title">Quiz Results</h2>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-200">
          Your Score: {score}/{sampleQuestions.length}
        </p>
        <button onClick={handleRetake} className="dashboard-button-primary mt-4">
          Retake Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard-panel mx-auto max-w-3xl">
      <button onClick={() => setSelectedQuiz(null)} className="dashboard-button-secondary mb-4">
        Back to Quizzes
      </button>
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="dashboard-section-title mb-0">{selectedQuiz.title}</h2>
        <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Timer: {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <div className="flex gap-2">
          {sampleQuestions.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleQuestionSelect(idx)}
              className={`h-8 w-8 rounded-full border text-sm transition-colors ${
                idx === questionIndex
                  ? 'border-slate-900 bg-slate-900 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900'
                  : answered[idx]
                    ? 'border-slate-400 bg-slate-200 text-slate-700 dark:border-slate-500 dark:bg-slate-700 dark:text-slate-100'
                    : 'border-slate-300 text-slate-500 dark:border-slate-700 dark:text-slate-400'
              }`}
              disabled={isTransitioning}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm dashboard-muted">
          Question {questionIndex + 1} of {sampleQuestions.length}
        </p>
        <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
          {sampleQuestions[questionIndex].q}
        </p>
        <div className="mt-4 space-y-3">
          {sampleQuestions[questionIndex].options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`w-full rounded-xl border p-3 text-left transition-colors ${
                selected === idx
                  ? "border-slate-700 bg-slate-800 text-white"
              : "border-slate-300 bg-white text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            }`}
              disabled={isTransitioning}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          <button
            onClick={handlePrevious}
            className="dashboard-button-secondary"
            disabled={questionIndex === 0 || isTransitioning}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="dashboard-button-primary"
            disabled={selected === null || isTransitioning}
          >
            {questionIndex === sampleQuestions.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
