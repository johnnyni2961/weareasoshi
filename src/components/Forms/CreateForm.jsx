import { useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import SpinnerIcon from '../Icons/SpinnerIcon';
import { onChange } from '../../hooks/useForm';
import { validateForm } from '../../hooks/useForm';
import {
  textLabel,
  textInput,
  textArea,
  checkBoxLabel,
  tooltipError,
} from '../../utils/classes';

const CreateForm = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const { projectId } = useParams();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onNameChange = (e) => onChange(e, setName, setError);
  const onDescriptionChange = (e) => onChange(e, setDescription, setError);
  const onSubmit = async (e) => {
    const validated = await validateForm(
      projectId,
      name,
      description,
      setError
    );

    if (validated) {
      onSuccess(name, description);
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
            value={name}
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
            value={description}
            rows={3}
            placeholder="Optional description"
            onChange={onDescriptionChange}
          ></textarea>
        </div>
      </div>
      <button type="submit" className="w-full btn btn-primary">
        {isSubmitting && <SpinnerIcon size={5} />}
        Continue
      </button>
    </form>
  );
};

export default CreateForm;
