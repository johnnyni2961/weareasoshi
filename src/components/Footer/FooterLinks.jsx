import { Link } from 'react-router-dom';
import {
  TwitterIcon,
  YoutubeIcon,
  FacebookIcon,
} from '../Icons/SocialMediaIcons';

export const FooterLinks = () => (
  <div className="grid grid-flow-col gap-4">
    <Link to="/about" className="link link-hover">
      The Squad
    </Link>
    <Link to="/contact" className="link link-hover">
      Hit us up
    </Link>
    <Link to="/faq" className="link link-hover">
      FAQs
    </Link>
    <Link to="/support" className="link link-hover">
      Support!
    </Link>
  </div>
);

export const FooterSocialLinks = () => (
  <div className="grid grid-flow-col gap-4">
    <a href="https://twitter.com/weareasoshi">
      <TwitterIcon />
    </a>
    <a href="https://weareasoshi.com" className="ml-1">
      <YoutubeIcon />
    </a>
    <a href="https://t.co/eFjropqHUD">
      <FacebookIcon />
    </a>
  </div>
);
