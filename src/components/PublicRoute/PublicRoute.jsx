import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "redux/authController/authController-selectors";
import PropTypes from 'prop-types';

export default function PublicRoute ({children}){
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(<>{isLoggedIn ? <Navigate to='/home'/> : children }</>)
};

PublicRoute.propTypes = {
    children: PropTypes.node,
};
