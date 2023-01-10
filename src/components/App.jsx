import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { fetchingCurrentUser } from 'redux/authController/authController-operations';
import { selectIsFetchingCurrentUser } from 'redux/authController/authController-selectors';
import Loader from './Loader';

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

  useEffect(()=>{
    dispatch(fetchingCurrentUser())
  },[dispatch]);

  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

  return (

      <>
        {isFetchingCurrentUser 
          ? <Loader/>
          :<Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/">
                <Route path="/" element={<DashBoardPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="registration" element={<RegistrationPage />} />
                <Route path="404" element={<PageNotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
              </Route>
            </Routes>
          </Suspense>
        }
    </>);
};
