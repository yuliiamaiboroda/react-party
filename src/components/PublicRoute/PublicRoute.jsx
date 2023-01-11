import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/authController/authController-selectors';
import PropTypes from 'prop-types';

export default function PublicRoute({ component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? component : <Navigate to={redirectTo} replace />;
}

PublicRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirecTo: PropTypes.string,
};
