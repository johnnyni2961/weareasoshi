import { Link } from 'react-router-dom';

const SectionButton = ({ label, onClick, style, link, to }) => {
  return (
    <>
      {link ? (
        <Link
          className={`btn btn-sm btn-outline btn-${style} float-right ml-2 mb-5`}
          to={to}
        >
          {label}
        </Link>
      ) : (
        <button
          className={`btn btn-sm btn-outline btn-${style} float-right ml-2`}
          onClick={onClick}
        >
          {label}
        </button>
      )}
    </>
  );
};

export default SectionButton;
