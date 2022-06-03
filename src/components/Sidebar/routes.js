import FormsIcon from '../Icons/FormsIcon';
import HomeIcon from '../Icons/HomeIcon';
import PersonIcon from '../Icons/PersonIcon';
import ProjectIcon from '../Icons/ProjectIcon';

const routes = [
  {
    path: '/dashboard',
    icon: HomeIcon,
    name: 'Dashboard',
  },
  {
    path: '/projects',
    icon: ProjectIcon,
    name: 'Projects',
  },
  {
    path: '/cards',
    icon: FormsIcon,
    name: 'Forms',
  },
];

export default routes;
