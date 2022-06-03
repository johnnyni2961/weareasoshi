import Modal from './Modal';
import EditProjectForm from '../Forms/EditProjectForm';
import EditForm from '../Forms/EditForm';

const EditModal = ({
  type,
  name,
  description,
  access,
  addedUsers,
  show,
  onHide,
  setName,
  setDescription,
  setAccess,
  setAddedUsers,
}) => {
  const Component = type === 'project' ? EditProjectForm : EditForm;

  return (
    <Modal title={`Edit ${type}`} show={show} onHide={onHide}>
      <Component
        name={name}
        description={description}
        access={access}
        addedUsers={addedUsers}
        onSuccess={onHide}
        setName={setName}
        setDescription={setDescription}
        setAccess={setAccess}
        setAddedUsers={setAddedUsers}
      />
    </Modal>
  );
};

export default EditModal;
