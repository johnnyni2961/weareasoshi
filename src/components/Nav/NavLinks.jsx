import { Link } from 'react-router-dom';

const NavLinks = ({ showLogin }) => (
  <>
    <li>
      <Link to="/docs">Learn More</Link>
    </li>
    <li className="lg:px-2" onClick={showLogin}>
      <a>Login</a>
    </li>
  </>
);

export default NavLinks;
