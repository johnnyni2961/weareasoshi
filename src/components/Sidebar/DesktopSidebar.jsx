import SidebarContent from './SidebarContent';

const DesktopSidebar = (props) => {
  return (
    <aside className="z-29 flex-shrink-0 hidden w-64 h-screen overflow-y-auto bg-white dark:bg-gray-800 lg:block">
      <SidebarContent />
    </aside>
  );
};

export default DesktopSidebar;
