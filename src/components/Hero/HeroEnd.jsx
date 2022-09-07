import { Link } from 'react-router-dom';

const HeroEnd = ({ title }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 pt-16 md:pt-20 text-center md:pb-20">
      <h1
        className="text-4xl sm:mb-5 md:text-7xl font-extrabold leading-tighter tracking-tighter"
        data-aos="fade-in-down"
        data-aos-delay="300"
      >
        Become an ASOSHIATE today!
      </h1>
      <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
        <Link
          className="btn btn-primary my-6 w-full sm:w-auto sm:ml-4"
          to="https://getwaitlist.com/waitlist/4107"
          data-aos="zoom-y-out"
        >
          Join Waitlist!
        </Link>
      </div>
    </div>
  );
};

export default HeroEnd;
