import format from "date-fns/format";

import { Link } from "src/store/types";

import "./styles.scss";

type Props = {
  message: Link;
  showTimeStamp: boolean;
};

function Snippet({ message, showTimeStamp }: Props) {
  return (
    <div>
      <div className="ua-snippet">
        <h5 className="ua-snippet-title">{message.title}</h5>
        <div className="ua-snippet-details">
          <a href={message.link} target={message.target} className="ua-link">
            {message.link}
          </a>
        </div>
      </div>
      {showTimeStamp && (
        <span className="ua-timestamp">
          {format(message.timestamp, "hh:mm")}
        </span>
      )}
    </div>
  );
}

export default Snippet;
