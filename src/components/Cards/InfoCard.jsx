const InfoCard = ({ title, value, children: icon }) => {
  return (
    <div className="card card-compact bg-base-100 border dark:border-0 rounded-lg">
      <div className="card-body">
        <h3 className="card-title text-sm font-semibold text-gray-600 dark:text-gray-400">
          {title}
        </h3>
        <p className="text-lg font-bold text-gray-700 dark:text-gray-200">
          {value}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
