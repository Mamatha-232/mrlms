import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useMemo } from 'react';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ProfilePage from './pages/ProfilePage';
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsersPage from './pages/admin/ManageUsersPage';
import ManageCoursesPage from './pages/admin/ManageCoursesPage';
import AnalyticsPage from './pages/admin/AnalyticsPage';
import SettingsPage from './pages/admin/SettingsPage';
import CourseListing from './pages/student/CourseListing';
import CourseDetails from './pages/student/CourseDetails';
import VideoLearning from './pages/student/VideoLearning';
import AssignmentsPage from './pages/student/AssignmentsPage';
import SubmitAssignmentPage from './pages/student/SubmitAssignmentPage';
import QuizPage from './pages/student/QuizPage';
import ResultsPage from './pages/student/ResultsPage';
import CreateCoursePage from './pages/teacher/CreateCoursePage';
import ManageTeacherCoursesPage from './pages/teacher/ManageCoursesPage';
import UploadMaterialsPage from './pages/teacher/UploadMaterialsPage';
import CreateAssignmentPage from './pages/teacher/CreateAssignmentPage';
import CreateQuizPage from './pages/teacher/CreateQuizPage';
import StudentSubmissionsPage from './pages/teacher/StudentSubmissionsPage';
import { AuthProvider, useAuth } from './routes/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import Layout from './layouts/Layout';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const themeClass = darkMode ? 'dark' : '';

  return (
    <AuthProvider>
      <div className={themeClass}>
        <Router>
          <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              {/* <Route path="/register" element={<RegisterPage />} /> */}
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

              <Route path="/student" element={<ProtectedRoute role="student"><StudentDashboard /></ProtectedRoute>} />
              <Route path="/student/courses" element={<ProtectedRoute role="student"><CourseListing /></ProtectedRoute>} />
              <Route path="/student/course/:id" element={<ProtectedRoute role="student"><CourseDetails /></ProtectedRoute>} />
              <Route path="/student/video/:id" element={<ProtectedRoute role="student"><VideoLearning /></ProtectedRoute>} />
              <Route path="/student/assignments" element={<ProtectedRoute role="student"><AssignmentsPage /></ProtectedRoute>} />
              <Route path="/student/submit" element={<ProtectedRoute role="student"><SubmitAssignmentPage /></ProtectedRoute>} />
              <Route path="/student/quiz" element={<ProtectedRoute role="student"><QuizPage /></ProtectedRoute>} />
              <Route path="/student/results" element={<ProtectedRoute role="student"><ResultsPage /></ProtectedRoute>} />

              <Route path="/teacher" element={<ProtectedRoute role="teacher"><TeacherDashboard /></ProtectedRoute>} />
              <Route path="/teacher/create-course" element={<ProtectedRoute role="teacher"><CreateCoursePage /></ProtectedRoute>} />
              <Route path="/teacher/manage-courses" element={<ProtectedRoute role="teacher"><ManageTeacherCoursesPage /></ProtectedRoute>} />
              <Route path="/teacher/upload-materials" element={<ProtectedRoute role="teacher"><UploadMaterialsPage /></ProtectedRoute>} />
              <Route path="/teacher/create-assignment" element={<ProtectedRoute role="teacher"><CreateAssignmentPage /></ProtectedRoute>} />
              <Route path="/teacher/create-quiz" element={<ProtectedRoute role="teacher"><CreateQuizPage /></ProtectedRoute>} />
              <Route path="/teacher/submissions" element={<ProtectedRoute role="teacher"><StudentSubmissionsPage /></ProtectedRoute>} />

              <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
              <Route path="/admin/manage-users" element={<ProtectedRoute role="admin"><ManageUsersPage /></ProtectedRoute>} />
              <Route path="/admin/manage-courses" element={<ProtectedRoute role="admin"><ManageCoursesPage /></ProtectedRoute>} />
              <Route path="/admin/analytics" element={<ProtectedRoute role="admin"><AnalyticsPage /></ProtectedRoute>} />
              <Route path="/admin/settings" element={<ProtectedRoute role="admin"><SettingsPage /></ProtectedRoute>} />

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
