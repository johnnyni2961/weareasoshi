import { useEffect } from 'react';
import { logout } from '../hooks/useAuth';

const Logout = ({ all }) => {
  useEffect(() => {
    logout(all);
    // Anyhow, react router navigate doesn't seem to work exclusively for '/'
    // So no option but to use window.location
    window.location.pathname = '/';
  });

  return null;
};

export default Logout;
