import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/authController/authController-selectors";
import PropTypes from 'prop-types';

export default function PrivateRoute ({children}){
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(<>{isLoggedIn? children: <Navigate to='/login'/>}</>)
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};