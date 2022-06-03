import { useState } from 'react';
import Modal from './Modal';
import { setProjectStatus } from '../../hooks/useProject';
import { setFormStatus } from '../../hooks/useForm';
import SpinnerIcon from '../Icons/SpinnerIcon';
import { useNavigate } from 'react-router-dom';

const ArchiveModal = ({
  show,
  onHide,
  projectId,
  formId,
  active,
  setActive,
}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onClick = async (e) => {
    setLoading(true);

    const archived = formId
      ? await setFormStatus(projectId, formId, active)
      : await setProjectStatus(projectId, active);

    if (archived) {
      setLoading(false);
      onHide();
      setActive(active);
    }
  };

  return (
    <Modal title="Are you sure?" show={show} onHide={onHide}>
      {!active ? (
        <h1>
          Archiving will make the {formId ? 'form' : 'project'} readonly. Means
          users cannot{' '}
          {formId ? 'submit records to this form' : 'clone this project'}. You
          can revert back anytime by using the{' '}
          <span className="font-semibold">Unarchive</span> option.
        </h1>
      ) : (
        <h1>
          Unarchiving will make the {formId ? 'form' : 'project'} active again
          {formId
            ? '.'
            : ', including all the forms associated with the project.'}
        </h1>
      )}

      <button className="btn btn-primary mt-5 w-full" onClick={onClick}>
        {loading && <SpinnerIcon size={5} />}
        Yes
      </button>
    </Modal>
  );
};

export default ArchiveModal;
