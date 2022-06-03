import { useContext, useState } from 'react';
import routes from './routes';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Auth } from '../../contexts/Auth';
import Logo from '../Icons/Logo';
import PersonIcon from '../Icons/PersonIcon';
import EditProfileModal from '../Modals/EditProfileModal';

const Icon = ({ icon }) => {
  const Icon = icon;
  return <Icon />;
};

const SidebarContent = () => {
  const [auth] = useContext(Auth);
  const location = useLocation();
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const toggleShowEditProfileModal = (e) =>
    setShowEditProfileModal(!showEditProfileModal);

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <Link
        className="ml-6 text-2xl font-bold text-gray-800 dark:text-gray-200"
        to="/"
      >
        <Logo width={30} height={30} />
        <span className="mx-1">BaaP</span>
      </Link>
      <ul className="mt-6">
        {routes.map((route) => (
          <li className="relative px-6 py-3" key={route.name}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                isActive
                  ? 'inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 text-gray-800 dark:text-gray-100'
                  : 'inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200'
              }
            >
              {location.pathname === route.path && (
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              )}
              <Icon icon={route.icon} />
              <span className="ml-4">{route.name}</span>
            </NavLink>
          </li>
        ))}
        <li className="relative px-6 py-3">
          <a
            onClick={toggleShowEditProfileModal}
            className="cursor-pointer inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
          >
            <PersonIcon />
            <span className="ml-4">Profile</span>
          </a>
        </li>
      </ul>

      <EditProfileModal
        show={showEditProfileModal}
        onHide={toggleShowEditProfileModal}
        name={auth.name}
        email={auth.email}
      />
    </div>
  );
};

export default SidebarContent;
