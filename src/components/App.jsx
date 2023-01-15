import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { fetchingCurrentUser } from 'redux/authController/authController-operations';
import { selectIsFetchingCurrentUser } from 'redux/authController/authController-selectors';
import Loader from './Loader';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { useMedia } from 'react-use';

const DashBoardPage = lazy(() => import('../pages/DashboardPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const HomeTab = lazy(() => import('./HomeTab'));
const DiagramTab = lazy(() => import('./DiagramTab'));
const Currency = lazy(() => import('./Currency'));
const UserPage = lazy(() => import('./UserPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingCurrentUser());
  }, [dispatch]);

  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  const isMobile = useMedia('(max-width: 767px)');

  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute
                  component={<DashBoardPage />}
                  redirectTo="/login"
                />
              }
            >
              <Route index element={<HomeTab />} />
              <Route path="diagram" element={<DiagramTab />} />
              <Route path="user" element={<UserPage />} />
              {isMobile && <Route path="currency" element={<Currency />} />}
            </Route>
            <Route
              path="/login"
              element={<PublicRoute component={<LoginPage />} />}
            />
            <Route
              path="/registration"
              element={<PublicRoute component={<RegistrationPage />} />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
};
