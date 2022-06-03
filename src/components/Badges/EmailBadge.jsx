const EmailBadge = ({ email, onClick }) => {
  return (
    <div className="badge badge-success badge-lg block my-2">
      {email}{' '}
      <button
        className="btn btn-xs btn-ghost align-top"
        type="button"
        onClick={onClick}
      >
        x
      </button>
    </div>
  );
};

export default EmailBadge;
