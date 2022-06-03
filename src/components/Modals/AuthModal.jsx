import Modal from './Modal';
import LoginForm from '../Forms/LoginForm';
import SignupForm from '../Forms/SignupForm';

const AuthModal = ({
  title,
  show,
  login,
  onHide,
  toggleToLogin,
  toggleToSignup,
}) => {
  return (
    <Modal title={title} show={show} onHide={onHide}>
      {login ? (
        <LoginForm onToggle={toggleToSignup} />
      ) : (
        <SignupForm onToggle={toggleToLogin} />
      )}
    </Modal>
  );
};

const modalTitles = ['Login to your account', 'Sign up to our platform'];

export default AuthModal;
export { modalTitles };
