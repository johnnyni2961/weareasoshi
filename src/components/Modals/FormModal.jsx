import Modal from './Modal';
import CreateForm from '../Forms/CreateForm';
import ShareForm from '../Forms/ShareForm';
import { useNavigate, useParams } from 'react-router';

const ValidateFormModal = ({ show, onSuccess }) => {
  return (
    <Modal title="Create form" show={show} closable={false}>
      <CreateForm onSuccess={onSuccess} />
    </Modal>
  );
};

const ShareFormModal = ({
  projectId,
  formId,
  show,
  onHide,
  shareTo,
  setShareTo,
  addedUsers,
  setAddedUsers,
}) => {
  return (
    <Modal title="Share form" show={show} onHide={onHide}>
      <ShareForm
        projectId={projectId}
        formId={formId}
        shareTo={shareTo}
        setShareTo={setShareTo}
        addedUsers={addedUsers}
        setAddedUsers={setAddedUsers}
        onSuccess={onHide}
      />
    </Modal>
  );
};

const FormResponseModal = ({ show, onHide, title, body, created }) => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const onClick = (e) => {
    onHide();

    if (created) {
      navigate(`/projects/${projectId}`);
    }
  };

  return (
    <Modal title={title} show={show} onHide={onClick}>
      <p className="text-lg mb-5">{body}</p>
      <button className="w-full btn btn-primary" onClick={onClick}>
        Continue
      </button>
    </Modal>
  );
};

export default ValidateFormModal;
export { FormResponseModal, ShareFormModal };
