import { useState, useEffect } from 'react';
import PageTitle from '../Typography/PageTitle';
import CTA from '../CTA/CTA';
import PageButton from '../Typography/PageButton';
import CreateProjectModal from '../Modals/CreateProjectModal';
import ProjectsTable from '../Tables/ProjectsTable';
import { getProjects } from '../../hooks/useProject';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (e) => setShowModal(!showModal);

  useEffect(async () => {
    setProjects(await getProjects());
  }, []);

  return (
    <>
      <div>
        <PageTitle>Projects</PageTitle>
        <PageButton
          style="primary"
          label="Create project"
          onClick={toggleModal}
        />
      </div>

      <CTA />

      {projects.length ? <ProjectsTable projects={projects} /> : null}

      <CreateProjectModal
        show={showModal}
        onHide={toggleModal}
        setProjects={setProjects}
      />
    </>
  );
};

export default Projects;
