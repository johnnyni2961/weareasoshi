import NavBrand from './NavBrand';
import { NavItems, NavItemsDropdown } from './NavItems';
import ToggleThemeIcon from '../Icons/ToggleThemeIcon';

const NavBar = ({ toggleTheme, showLogin }) => {
  return (
    <div
      className="navbar sticky top-0 z-10 bg-base-100 backdrop-blur lg:border-b dark:border-b-slate-50/[0.06] shadow-sm py-1"
      data-aos="zoom-in"
      data-aos-delay="300"
      data-aos-once="true"
    >
      <NavBrand />
      <ToggleThemeIcon toggle={toggleTheme} />
      <NavItems showLogin={showLogin} />
      <NavItemsDropdown showLogin={showLogin} />
    </div>
  );
};

export default NavBar;
