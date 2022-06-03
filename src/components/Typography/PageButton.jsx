const PageButton = ({ label, onClick, style }) => {
  return (
    <button
      className={`btn btn-sm btn-outline btn-${style} float-right mt-7 ml-2`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PageButton;
