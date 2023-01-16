import Loader from 'components/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function SharedLoyaout() {
  return (
    <Suspense fallback={<Loader/>}>
      <Outlet />
    </Suspense>
  );
}
