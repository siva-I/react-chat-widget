const close = require("../../../../../../../assets/clear-button.svg") as string;

import "./style.scss";

type Props = {
  title: string;
  subtitle: string;
  toggleChat: () => void;
  showCloseButton: boolean;
  titleAvatar?: string;
};

function Header({
  title,
  subtitle,
  toggleChat,
  showCloseButton,
  titleAvatar,
}: Props) {
  return (
    <div className="ua-header">
      {showCloseButton && (
        <button className="ua-close-button" onClick={toggleChat}>
          <img src={close} className="ua-close" alt="close" />
        </button>
      )}
      <h4 className="ua-title">
        {titleAvatar && (
          <img src={titleAvatar} className="avatar" alt="profile" />
        )}
        {title}
      </h4>
      <span>{subtitle}</span>
    </div>
  );
}

export default Header;
