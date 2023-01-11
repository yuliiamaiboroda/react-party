import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { fetchingCurrentUser } from 'redux/authController/authController-operations';
import { selectIsFetchingCurrentUser } from 'redux/authController/authController-selectors';
import HomeTab from './HomeTab/HomeTab';
import Loader from './Loader';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import DiagramTab from './DiagramTab/DiagramTab';
import Currency from './Currency/Currency';

const DashBoardPage = lazy(() =>
  import('../pages/DashboardPage/DashBoardPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingCurrentUser());
  }, [dispatch]);

  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route
                path="/"
                element={
                  <PrivateRoute
                    component={<DashBoardPage />}
                    redirectTo="/login"
                  />
                }
              >
                     <Route index element={<HomeTab />}/>
                <Route path ="/diagram" element={<DiagramTab />} />
                <Route path ="/currency" element={<Currency />}/>
                {/* <Route index element={<HomeTab />} />
                <Route path="currency" element={<h1>Stat</h1>} /> */}
              </Route>
              <Route
                path="login"
                element={<PublicRoute component={<LoginPage />} />}
              />
              <Route
                path="registration"
                element={<PublicRoute component={<RegistrationPage />} />}
              />
              <Route path="404" element={<PageNotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};
