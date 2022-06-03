import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Auth } from '../../contexts/Auth';
import SpinnerIcon from '../Icons/SpinnerIcon';
import { testError } from '../../utils/http';
import { onChange, shareForm } from '../../hooks/useForm';
import { createProject } from '../../hooks/useProject';
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

const ShareForm = ({
  projectId,
  formId,
  shareTo,
  setShareTo,
  onSuccess,
  addedUsers,
  setAddedUsers,
}) => {
  const [auth] = useContext(Auth);
  const [userEmail, setUserEmail] = useState('');
  const [newShareTo, setNewShareTo] = useState(shareTo);
  const [error, setError] = useState('');
  const [checkingUser, setCheckingUser] = useState(false);
  const [newAddedUsers, setNewAddedUsers] = useState(addedUsers);
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const onUserEmailChange = (e) => onChange(e, setUserEmail, setError);
  const onShareToChange = (e) => {
    setNewShareTo(e.target.value);
    setNewAddedUsers([]);
  };

  const onAddUserButtonClick = async (e) => {
    setCheckingUser(true);
    const user = await checkUserEmail(userEmail, auth.email, setError);
    setCheckingUser(false);

    if (user) {
      setUserEmail('');

      setNewAddedUsers((current) => {
        const duplicate = current.find((obj) => obj._id === user._id);
        const { _id, email } = user;

        return duplicate ? current : [...current, { _id, email }];
      });
    }
  };

  const removeFromAddedUsers = (id) =>
    setNewAddedUsers((current) => current.filter((user) => user._id !== id));

  const onSubmit = async (e) => {
    const restrictedTo = newAddedUsers.map((user) => user._id);
    const sharedForm = await shareForm(projectId, formId, {
      access: newShareTo,
      restrictedTo,
    });

    // Hide modal
    if (sharedForm) {
      onSuccess();
      setShareTo(sharedForm.access);
      setAddedUsers(newAddedUsers);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="accessibility" className={textLabel}>
          Share to
        </label>
        <select
          id="accessibility"
          className={selectInput}
          onChange={onShareToChange}
          value={newShareTo}
        >
          <option disabled>Who can access?</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="restrict">Limit</option>
        </select>
      </div>
      {newShareTo === 'restrict' ? (
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
          {newAddedUsers.map((user) => (
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
        Share
      </button>
    </form>
  );
};

export default ShareForm;
