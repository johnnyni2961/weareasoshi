import { Link } from 'react-router-dom';

const NavLinks = ({ showLogin }) => (
  <>
    <li>
      <a href="https://getwaitlist.com/waitlist/4107">Join Waitlist!</a>
    </li>
    <li>
      <a href="https://asoshi-paywall.vercel.app/">Dive Ahead</a>
    </li>
    <li className="lg:px-2" onClick={showLogin}>
      <a>Secret...</a>
    </li>
  </>
);

export default NavLinks;
