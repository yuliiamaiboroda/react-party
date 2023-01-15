import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function SharedLoyaout() {
  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  );
}
