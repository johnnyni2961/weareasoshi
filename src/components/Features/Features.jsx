import FeatureCard from './FeatureCard';
import {
  FeatureOneIcon,
  FeatureTwoIcon,
  FeatureThreeIcon,
} from '../Icons/FeatureIcons';

const Features = () => (
  <div className="py-3">
    <div className="px-8 mx-auto max-w-6xl py-10 sm:py-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      <div
        data-aos="fade-out"
        data-aos-delay="400"
        data-aos-anchor-placement="top-bottom"
      >
        <FeatureCard
          icon={FeatureOneIcon}
          title="Simple"
          content="Hop on the ASOSHI app, create a profile that expresses your passion, start matching with founders and put your own initiative out there!"
        />
      </div>
      <div
        data-aos="fade-out"
        data-aos-delay="600"
        data-aos-anchor-placement="top-bottom"
      >
        <FeatureCard
          icon={FeatureTwoIcon}
          title="Community"
          content="With hundreds of hungry innovators in the ASOSHI community, we're pretty sure you won't feel excluded being Gen-Z. And we mean it."
        />
      </div>
      <div
        data-aos="fade-out"
        data-aos-delay="800"
        data-aos-anchor-placement="top-bottom"
      >
        <FeatureCard
          icon={FeatureThreeIcon}
          title="Revolutionizing"
          content="Status quo is underestimating the Gen-Z population. Heavily. If we can't rely on industry experts, we rely on each other. Here, at ASOSHI."
        />
      </div>
    </div>
  </div>
);

export default Features;
