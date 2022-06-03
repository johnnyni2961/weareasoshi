import { useEffect, useState } from 'react';
import PageTitle from '../Typography/PageTitle';
import CTA from '../CTA/CTA';
import InfoCard from '../Cards/InfoCard';
import { getProjects } from '../../hooks/useProject';
import ProjectsTable from '../Tables/ProjectsTable';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    setProjects(await getProjects());
  }, []);

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <CTA />

      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total projects" value="137">
          {/* <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          /> */}
        </InfoCard>
        <InfoCard title="Total forms" value="1337">
          {/* <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          /> */}
        </InfoCard>
        <InfoCard title="Total records" value="31337">
          {/* <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          /> */}
        </InfoCard>
        <InfoCard title="Archived projects" value="37">
          {/* <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          /> */}
        </InfoCard>
      </div>

      {/* <DashboardTable /> */}
      {projects.length ? (
        <ProjectsTable projects={projects} readonly={true} />
      ) : null}
    </>
  );
};

export default Dashboard;
