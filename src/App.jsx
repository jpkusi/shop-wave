import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import LoadingScreen from './components/LoadingScreen'

// Lazy-loaded pages
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Products = lazy(() => import('./pages/Products'))
const Orders = lazy(() => import('./pages/Orders'))
const TeamMembers = lazy(() => import('./pages/TeamMembers'))
const Settings = lazy(() => import('./pages/Settings'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
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
  )
}

export default App