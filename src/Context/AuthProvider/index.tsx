import { createContext, ReactNode, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext };
export default AuthProvider;
