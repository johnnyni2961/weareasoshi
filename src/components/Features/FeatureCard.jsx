const FeatureCard = ({ icon: Icon, title: Title, content: Content }) => {
  return (
    <div className="card items-center bg-base-100 shadow-xl hover:scale-105 hover:bg-base-200 delay-50 duration-150">
      <div className="card-body items-center text-center">
        <Icon />
        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
          {Title}
        </h4>
        <p className="text-gray-500 text-center">{Content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
