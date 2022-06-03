import { useState } from 'react';
import Modal from './Modal';
import { deleteProject } from '../../hooks/useProject';
import { deleteForm } from '../../hooks/useForm';
import SpinnerIcon from '../Icons/SpinnerIcon';
import { useNavigate } from 'react-router-dom';

const DeleteModal = ({ show, onHide, projectId, formId }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onClick = async (e) => {
    setLoading(true);

    const deleted = formId
      ? await deleteForm(projectId, formId)
      : await deleteProject(projectId);

    if (deleted) {
      setLoading(false);
      onHide();

      navigate(formId ? `/projects/${projectId}` : '/projects');
    }
  };

  return (
    <Modal title="Are you sure?" show={show} onHide={onHide}>
      <h1 className="leading-relaxed">
        This action cannot be undone. Doing so will also delete all the{' '}
        {formId ? 'records' : 'forms and records'} associated with this{' '}
        {formId ? 'form' : 'project'}. If that's not desired, use{' '}
        <span className="font-semibold">Archive</span> option instead.
      </h1>
      <button className="btn btn-primary mt-5 w-full" onClick={onClick}>
        {loading && <SpinnerIcon size={5} />}
        Yes
      </button>
    </Modal>
  );
};

export default DeleteModal;
