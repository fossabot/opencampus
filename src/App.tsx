import { Route, Routes } from 'react-router-dom';
import { useAuthStateEffect } from './hooks';
import {
  ActionPage,
  LoginPage,
  ResetPage,
  SignupPage,
} from './pages/authentication';
import { CompaniesPage } from './pages/dashboard/collage/CompaniesPage';
import { PostsPage } from './pages/dashboard/collage/PostsPage';
import { ReportsPage } from './pages/dashboard/collage/ReportsPage';
import { StudentsPage } from './pages/dashboard/collage/StudentsPage';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { HomePage } from './pages/dashboard/HomePage';
import { JobFeedPage } from './pages/dashboard/JobFeedPage';
import { MessagesPage } from './pages/dashboard/MessagesPage';
import { NotificationPage } from './pages/dashboard/NotificationPage';
import { OnboardingPage } from './pages/dashboard/OnboardingPage';
import { SettingsPage } from './pages/dashboard/SettingsPage';
import { NoMatchPage } from './pages/NoMatchPage';

function App() {
  useAuthStateEffect();

  return (
    <Routes>
      <Route path='/' element={<DashboardPage />}>
        <Route index element={<HomePage />} />
        <Route path='settings' element={<SettingsPage />} />
        {/* Default */}
        <Route path='jobs' element={<JobFeedPage />} />
        <Route path='messages' element={<MessagesPage />} />
        <Route path='notifications' element={<NotificationPage />} />
        {/* Collage */}
        <Route path='students' element={<StudentsPage />} />
        <Route path='companies' element={<CompaniesPage />} />
        <Route path='posts' element={<PostsPage />} />
        <Route path='reports' element={<ReportsPage />} />
      </Route>
      <Route path='onboarding' element={<OnboardingPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='signup' element={<SignupPage />} />
      <Route path='reset' element={<ResetPage />} />
      <Route path='__action' element={<ActionPage />} />
      <Route path='*' element={<NoMatchPage />} />
    </Routes>
  );
}

export default App;
