import { useContext } from 'react';
import { Auth } from '../contexts/Auth';
import FourOhThree from '../routes/403';

const ProtectedRoute = ({ route }) => {
  const [auth] = useContext(Auth);

  if (!auth._id) {
    return <FourOhThree />;
  }

  return route;
};

export default ProtectedRoute;
