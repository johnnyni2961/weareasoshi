const HeroTitle = ({ text }) => (
  <h1
    className="text-5xl md:text-7xl font-extrabold leading-tighter tracking-tighter mb-6"
    data-aos="zoom-y-out"
    data-aos-delay="500"
  >
    {text}
  </h1>
);

export default HeroTitle;
