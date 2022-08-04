import { Link } from 'react-router-dom';

const NavLinks = ({ showLogin }) => (
  <>
    <li>
      <a href="https://asoshi.notion.site/ASOSHI-Memo-Public-Version-3b72486177da4b3cb48ca09a223c82ea">Learn More</a>
    </li>
    <li>
      <a href="paywall.html">Jump Ahead</a>
    </li>
    <li className="lg:px-2" onClick={showLogin}>
      <a>Secret...</a>
    </li>
  </>
);

export default NavLinks;
