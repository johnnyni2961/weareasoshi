import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Auth } from '../../contexts/Auth';
import { useParams } from 'react-router';
import SpinnerIcon from '../Icons/SpinnerIcon';
import { testError } from '../../utils/http';
import { onChange } from '../../hooks/useForm';
import { updateProject, cloneProject } from '../../hooks/useProject';
import { checkUserEmail } from '../../hooks/useAuth';
import EmailBadge from '../Badges/EmailBadge';
import {
  textLabel,
  textInput,
  textArea,
  selectInput,
  checkBoxLabel,
  tooltipError,
} from '../../utils/classes';

const CloneProjectForm = ({
  name,
  description,
  onSuccess,
  setName,
  setDescription,
}) => {
  const [auth] = useContext(Auth);
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [access, setAccess] = useState('public');
  const [userEmail, setUserEmail] = useState('');
  const [error, setError] = useState('');
  const [checkingUser, setCheckingUser] = useState(false);
  const [addedUsers, setAddedUsers] = useState([]);
  const { projectId } = useParams();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onNameChange = (e) => onChange(e, setNewName, setError);
  const onDescriptionChange = (e) => onChange(e, setNewDescription, setError);
  const onUserEmailChange = (e) => onChange(e, setUserEmail, setError);
  const onAccessChange = (e) => {
    setAccess(e.target.value);
    setAddedUsers([]);
  };

  const onAddUserButtonClick = async (e) => {
    setCheckingUser(true);
    const user = await checkUserEmail(userEmail, auth.email, setError);
    setCheckingUser(false);

    if (user) {
      setUserEmail('');

      setAddedUsers((current) => {
        const duplicate = current.find((obj) => obj._id === user._id);
        const { _id, email } = user;

        return duplicate ? current : [...current, { _id, email }];
      });
    }
  };

  const removeFromAddedUsers = (id) =>
    setAddedUsers((current) => current.filter((user) => user._id !== id));

  const onSubmit = async (e) => {
    const restrictedTo = addedUsers.map((user) => user._id);
    const clonedProject = await cloneProject(
      projectId,
      newName,
      newDescription,
      access,
      restrictedTo,
      setError
    );

    // Hide modal
    if (clonedProject) {
      onSuccess();
      // setName(clonedProject.name);
      // setDescription(clonedProject.description);
      // setAccess(clonedProject.access);
      // setAddedUsers(addedUsers);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name" className={textLabel}>
          Name
        </label>
        <span
          className={`w-full ${testError('name', error) ? tooltipError : ''}`}
          data-tip={error}
        >
          <input
            type="text"
            id="name"
            className={textInput}
            placeholder="my-awesome-project"
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
      <div>
        <label htmlFor="accessibility" className={textLabel}>
          Accessibility
        </label>
        <select
          id="accessibility"
          className={selectInput}
          onChange={onAccessChange}
          value={access}
        >
          <option disabled>Who can access?</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="restrict">Limit</option>
        </select>
      </div>
      {access === 'restrict' ? (
        <div>
          <label htmlFor="userEmail" className={textLabel}>
            Add user
          </label>
          <div className="relative">
            <span
              className={`w-full ${
                testError('email', error) || testError('not necessary', error)
                  ? tooltipError
                  : ''
              }`}
              data-tip={error}
            >
              <input
                type="email"
                id="userEmail"
                className={textInput}
                placeholder="name@company.com"
                value={userEmail}
                onChange={onUserEmailChange}
              />
              <button
                type="button"
                className="btn btn-primary btn-sm flex absolute inset-y-0 mt-2 mr-1 right-0 items-center pr-2"
                onClick={onAddUserButtonClick}
              >
                {checkingUser ? <SpinnerIcon size={5} /> : 'Add'}
              </button>
            </span>
          </div>
          {addedUsers.map((user) => (
            <EmailBadge
              key={user._id}
              email={user.email}
              onClick={(e) => removeFromAddedUsers(user._id)}
            />
          ))}
        </div>
      ) : null}
      <button type="submit" className="w-full btn btn-primary">
        {isSubmitting && <SpinnerIcon size={5} />}
        Clone
      </button>
    </form>
  );
};

export default CloneProjectForm;
