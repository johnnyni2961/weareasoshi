import FooterHead from './FooterHead';
import { FooterLinks, FooterSocialLinks } from './FooterLinks';

const Footer = () => (
  <footer
    className="footer footer-center pb-10 text-base-content rounded"
    data-aos="zoom-in"
    data-aos-delay="300"
    data-aos-anchor-placement="top-bottom"
  >
    <FooterHead />
    <FooterLinks />
    <FooterSocialLinks />
  </footer>
);

export default Footer;
