import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import EyeIcon from '../Icons/EyeIcon';
import SpinnerIcon from '../Icons/SpinnerIcon';
import { testError } from '../../utils/http';
import { onChange, onFileChange } from '../../hooks/useForm';
import { updateProfile } from '../../hooks/useAuth';
import {
  textLabel,
  textInput,
  linkPrimary,
  tooltipError,
  tooltipSuccess,
} from '../../utils/classes';
import { Auth } from '../../contexts/Auth';

const EditProfileForm = ({
  onHide,
  name: currentName,
  email: currentEmail,
}) => {
  const [_, setAuth] = useContext(Auth);
  const [name, setName] = useState(currentName);
  const [email, setEmail] = useState(currentEmail);
  const [avatar, setAvatar] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onNameChange = (e) => onChange(e, setName, setError);
  const onEmailChange = (e) => onChange(e, setEmail, setError);
  const onAvatarChange = (e) => onFileChange(e, setAvatar, setError);
  const onPasswordChange = (e) => onChange(e, setPassword, setError);
  const onEyeChange = (e) => setShowPassword(e.target.checked);
  const onSubmit = async (e) => {
    const updatedProfile = await updateProfile(
      name,
      email,
      password,
      avatar,
      setError
    );

    if (updatedProfile) {
      setAuth((current) => ({ ...current, ...updatedProfile }));

      onHide();
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
            placeholder="John Doe"
            value={name}
            onChange={onNameChange}
          />
        </span>
      </div>
      <div>
        <label htmlFor="avatar" className={textLabel}>
          Avatar
        </label>
        <span
          className={`w-full ${testError('file', error) ? tooltipError : ''}`}
          data-tip={error}
        >
          <input
            type="file"
            id="avatar"
            accept="image/png, image/jpg, image/jpeg"
            className={textInput}
            onChange={onAvatarChange}
          />
        </span>
      </div>
      <div>
        <label htmlFor="email" className={textLabel}>
          Email
        </label>
        <span
          className={`${
            error
              ? (testError('email', error) && tooltipError) ||
                testError('name', error) ||
                testError('password', error) ||
                testError('file', error) ||
                tooltipSuccess
              : ''
          } w-full z-10`}
          data-tip={error}
        >
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            className={textInput}
            placeholder="name@company.com"
            onChange={onEmailChange}
          />
        </span>
      </div>
      <div>
        <label htmlFor="password" className={textLabel}>
          Password
        </label>
        <span
          className={`${
            testError('password', error) ? tooltipError : ''
          } w-full`}
          data-tip={error}
        >
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              value={password}
              placeholder="••••••••"
              className={textInput}
              onChange={onPasswordChange}
            />
            <div className="flex absolute inset-y-0 right-0 items-center pr-2">
              <EyeIcon onChange={onEyeChange} />
            </div>
          </div>
        </span>
      </div>
      <div>
        <button type="submit" className="w-full mt-2 btn btn-primary">
          {isSubmitting && <SpinnerIcon size={5} />}
          Update
        </button>
      </div>
    </form>
  );
};

export default EditProfileForm;
