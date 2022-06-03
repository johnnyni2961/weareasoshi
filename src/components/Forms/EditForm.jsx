import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import SpinnerIcon from '../Icons/SpinnerIcon';
import { onChange, updateForm } from '../../hooks/useForm';
import {
  textLabel,
  textInput,
  textArea,
  checkBoxLabel,
  tooltipError,
} from '../../utils/classes';

const EditForm = ({
  name,
  description,
  onSuccess,
  setName,
  setDescription,
}) => {
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [error, setError] = useState('');
  const { projectId, formId } = useParams();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onNameChange = (e) => onChange(e, setNewName, setError);
  const onDescriptionChange = (e) => onChange(e, setNewDescription, setError);
  const onSubmit = async (e) => {
    const updatedForm = await updateForm(
      projectId,
      formId,
      { name: newName, description: newDescription },
      setError
    );

    // Hide modal
    if (updatedForm) {
      onSuccess();
      setName(updatedForm.name);
      setDescription(updatedForm.description);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className={textLabel}>
          Name
        </label>
        <span
          className={`w-full ${error ? tooltipError : ''}`}
          data-tip={error}
        >
          <input
            type="text"
            id="name"
            className={textInput}
            placeholder="my-awesome-form"
            value={newName}
            required
            onChange={onNameChange}
          />
        </span>
      </div>
      <div>
        <label htmlFor="description" className={textLabel}>
          Description
        </label>
        <div className="relative">
          <textarea
            id="description"
            className={textArea}
            value={newDescription}
            rows={3}
            placeholder="Optional description"
            onChange={onDescriptionChange}
          ></textarea>
        </div>
      </div>
      <button type="submit" className="w-full btn btn-primary">
        {isSubmitting && <SpinnerIcon size={5} />}
        Update
      </button>
    </form>
  );
};

export default EditForm;
