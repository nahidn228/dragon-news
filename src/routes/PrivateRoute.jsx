/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loading></Loading>
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateRoute;
