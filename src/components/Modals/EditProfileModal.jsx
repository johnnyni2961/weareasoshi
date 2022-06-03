import EditProfileForm from '../Forms/EditProfileForm';
import Modal from './Modal';

const EditProfileModal = ({ show, onHide, name, email }) => {
  return (
    <Modal title="Profile" show={show} onHide={onHide}>
      <EditProfileForm onHide={onHide} name={name} email={email} />
    </Modal>
  );
};

export default EditProfileModal;
