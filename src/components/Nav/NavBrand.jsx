import Logo from '../Icons/Logo';

const NavBrand = ({ toggleTheme }) => {
  return (
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-3xl">
        <Logo />
        <h1 className="ml-1 lg:mb-1 lg:text-4xl">BaaP</h1>
      </a>
    </div>
  );
};

export default NavBrand;
