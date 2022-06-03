import Logo from '../Icons/Logo';

const FooterHead = () => (
  <div>
    <Logo />
    <p className="font-bold">ASOSHI</p>
    <p className="">
      Made by{' '}
      <a
        className="link link-hover"
        href="https://t.co/eFjropqHUD"
        target="_blank"
      >
        ASOSHI
      </a>{' '}
      - All Gen-Z rights reserved
    </p>
  </div>
);

export default FooterHead;
