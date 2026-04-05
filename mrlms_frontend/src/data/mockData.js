export const courses = [
  {
    id: 'c1', title: 'React Modern Build', instructor: 'Alice Johnson', duration: '12h', progress: 45,
    description: 'Build fast React apps with hooks, context and router.',
    students: 1234, rating: 4.8,
  },
  {
    id: 'c2', title: 'Advanced JavaScript', instructor: 'Daniel Smith', duration: '10h', progress: 72,
    description: 'Master closures, async/await, patterns and memory.',
    students: 860, rating: 4.7,
  },
  {
    id: 'c3', title: 'UI/UX Design Foundations', instructor: 'Emma Wright', duration: '8h', progress: 28,
    description: 'Design elegant interfaces with modern trends.',
    students: 430, rating: 4.6,
  },
];

export const assignments = [
  { id: 'a1', title: 'React Hooks Implementation', due: '2026-04-15', status: 'Pending' },
  { id: 'a2', title: 'State Management Exploration', due: '2026-04-20', status: 'Submitted' },
];

export const quizzes = [
  { id: 'q1', title: 'React Basics', questions: 10, time: 15 },
  { id: 'q2', title: 'JS Advanced', questions: 12, time: 20 },
];

export const users = [
  { id: 'u1', name: 'John Doe', role: 'student', email: 'student@domain.com', username: 'student', password: 'student' },
  { id: 'u2', name: 'Sarah Lee', role: 'teacher', email: 'teacher@domain.com', username: 'teacher', password: 'teacher' },
  { id: 'u3', name: 'Admin', role: 'admin', email: 'admin@mrms.com', username: 'admin', password: 'admin' },
];
