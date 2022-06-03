import Modal from './Modal';
import CreateProjectForm from '../Forms/CreateProjectForm';

const CreateProjectModal = ({ show, onHide, setProjects }) => {
  return (
    <Modal title="Create new project" show={show} onHide={onHide}>
      <CreateProjectForm onSuccess={onHide} setProjects={setProjects} />
    </Modal>
  );
};

export default CreateProjectModal;
