import ClipboardButton from '../Typography/ClipboardButton';
import ShareIcon from '../Icons/ShareIcon';
import InfoIcon from '../Icons/InfoIcon';

const ShareAlert = ({ helpText, value }) => {
  return (
    <div className="alert shadow-lg relative mb-3">
      <div>
        <ShareIcon />
        <span>
          {helpText} {value || window.location.href}
        </span>
        <ClipboardButton value={value || window.location.href} />
      </div>
    </div>
  );
};

const ShareHelpAlert = () => {
  return (
    <div className="alert shadow-lg mb-8">
      <div>
        <InfoIcon />
        <span>Share this form to allow users to submit their records.</span>
      </div>
    </div>
  );
};

export default ShareAlert;
export { ShareHelpAlert };
