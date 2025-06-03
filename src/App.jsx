import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import LoadingScreen from './components/LoadingScreen';
import LoginPage from './pages/LoginPage';
import { useAuth } from './hooks/useAuth';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Products = lazy(() => import('./pages/Products'));
const Orders = lazy(() => import('./pages/Orders'));
const TeamMembers = lazy(() => import('./pages/TeamMembers'));
const Settings = lazy(() => import('./pages/Settings'));
const NotFound = lazy(() => import('./pages/NotFound'));

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  return isAuthenticated ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route
          path="dashboard"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="products"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <Products />
            </Suspense>
          }
        />
        <Route
          path="orders"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <Orders />
            </Suspense>
          }
        />
        <Route
          path="team"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <TeamMembers />
            </Suspense>
          }
        />
        <Route
          path="settings"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <Settings />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<LoadingScreen />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
