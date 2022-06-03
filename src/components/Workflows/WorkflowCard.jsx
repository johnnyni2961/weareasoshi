const WorkflowCard = ({ badge, title, description, image }) => {
  return (
    <div className="overflow-hidden -my-5">
      <div className="container px-5 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-row flex-wrap">
          <div
            className="lg:w-1/2 w-full lg:pr-10 text-center lg:text-left lg:py-6"
            data-aos="fade-up-right"
            data-aos-delay="300"
          >
            <p className="badge badge-success mb-4 text-xs mx-auto">{badge}</p>
            <h2 className="mb-6 text-3xl font-bold leading-none tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="leading-relaxed text-gray-500 mb-4">{description}</p>
          </div>
          <img
            className="lg:w-1/2 w-full lg:h-auto my-6 h-64 object-cover object-center rounded-xl shadow-2xl"
            src={image}
            data-aos="fade-up-left"
            data-aos-delay="300"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkflowCard;
