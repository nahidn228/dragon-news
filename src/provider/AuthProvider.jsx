/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = "Nahid";
  const authInfo = {
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
