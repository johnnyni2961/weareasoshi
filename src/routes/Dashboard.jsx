import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import { SidebarContext } from '../contexts/Sidebar';
import Container from '../components/Container/Container';

const Dashboard = ({ component }) => {
  const Component = component;

  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [location]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && 'overflow-hidden'
      }`}
    >
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <Container>
          <Component />
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
