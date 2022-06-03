import HeroTitle from './HeroTitle';
import HeroDescription from './HeroDescription';

const HeroSimple = ({ title, description }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 text-center md:pb-16">
      <HeroTitle text={title} />
      <div className="max-w-3xl mx-auto">
        <HeroDescription text={description} />
      </div>
    </div>
  );
};

export default HeroSimple;
