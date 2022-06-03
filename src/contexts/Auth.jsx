import { createContext, useEffect, useState } from 'react';
import { getProfile } from '../hooks/useAuth';

const Auth = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ _id: null, name: null, email: null });

  // Upon browser reload, auth object will be reset
  // This will re-populate it
  useEffect(async () => {
    const user = await getProfile();

    setAuth((current) => ({ ...user }));
  }, []);

  return <Auth.Provider value={[auth, setAuth]}>{children}</Auth.Provider>;
};

export { Auth };
export default AuthProvider;
