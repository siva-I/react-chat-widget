import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";

import Badge from "./components/Badge";
import { GlobalState } from "../../../../store/types";
import { setBadgeCount } from "../../../../store/actions";

import "./style.scss";

const openLauncher = require("../../../../../assets/launcher_button.svg") as string;
const close = require("../../../../../assets/clear-button.svg") as string;

type Props = {
  toggle: () => void;
  chatId: string;
  openLabel: string;
  closeLabel: string;
  closeImg: string;
  openImg: string;
  showBadge?: boolean;
};

function Launcher({
  toggle,
  chatId,
  openImg,
  closeImg,
  openLabel,
  closeLabel,
  showBadge,
}: Props) {
  const dispatch = useDispatch();
  const { showChat, badgeCount } = useSelector((state: GlobalState) => ({
    showChat: state.behavior.showChat,
    badgeCount: state.messages.badgeCount,
  }));

  const toggleChat = () => {
    toggle();
    if (!showChat) dispatch(setBadgeCount(0));
  };

  return (
    <button
      type="button"
      className={cn("ua-launcher", { "ua-hide-sm1": showChat })}
      onClick={toggleChat}
      aria-controls={chatId}
    >
      {!showChat && showBadge && <Badge badge={badgeCount} />}
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 0.5H26C38.9787 0.5 49.5 11.0213 49.5 24V49C49.5 49.2761 49.2761 49.5 49 49.5H24C11.0213 49.5 0.5 38.9787 0.5 26V24C0.5 11.0213 11.0213 0.5 24 0.5Z"
          fill="black"
          stroke="white"
        ></path>
        <path
          d="M22.8876 29.212H26.7486V28.387C26.7486 24.658 32.5896 24.427 32.5896 19.939V18.949C32.5896 15.946 29.9826 13.471 25.5606 13.471C22.2606 13.471 20.0826 14.593 18.1356 16.144L19.9836 18.586C21.7986 17.332 23.0856 16.639 25.1976 16.639C27.2106 16.639 28.3656 17.695 28.3656 19.312V20.104C28.3656 22.942 22.8876 23.602 22.8876 28.255V29.212ZM24.8016 37.429C26.2866 37.429 27.4086 36.274 27.4086 34.822C27.4086 33.403 26.2866 32.215 24.8016 32.215C23.3826 32.215 22.2276 33.403 22.2276 34.822C22.2276 36.274 23.3826 37.429 24.8016 37.429Z"
          fill="white"
        ></path>
      </svg>
      {/*       {showChat ?
        <img src={closeImg || close} className="ua-close-launcher" alt={openLabel} /> :
        <img src={openImg || openLauncher} className="ua-open-launcher" alt={closeLabel} />
      } */}
    </button>
  );
}

export default Launcher;
