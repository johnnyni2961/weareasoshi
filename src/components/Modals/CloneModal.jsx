import Modal from './Modal';
import CloneProjectForm from '../Forms/CloneProjectForm';

const CloneModal = ({
  name,
  description,
  show,
  onHide,
  setName,
  setDescription,
}) => {
  return (
    <Modal title="Clone project" show={show} onHide={onHide}>
      <CloneProjectForm
        name={name}
        description={description}
        onSuccess={onHide}
        setName={setName}
        setDescription={setDescription}
      />
    </Modal>
  );
};

export default CloneModal;
