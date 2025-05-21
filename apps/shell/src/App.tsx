import { lazy, Suspense } from 'react';

const RemoteDashboard = lazy(() => import('dashboard/DashboardApp'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <RemoteDashboard />
    </Suspense>
  );
}