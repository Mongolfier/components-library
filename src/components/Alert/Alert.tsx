import { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark, faTriangleExclamation, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import "./Alert.scss";

interface AlertProps {
  summary?: string | JSX.Element | React.FC;
  detail?: string | JSX.Element | React.FC;
  closable?: boolean;
  onClose?: MouseEventHandler<HTMLButtonElement> | undefined;
  variant?: "success" | "info" | "warning" | "error";
}


const selectIcon = (variant: string) => {
  if(variant === "success") {
    return faCheck
  }
  if(variant === "info") {
    return faCircleInfo
  }
  if(variant === "warning") {
    return faTriangleExclamation
  }
  if(variant === "error") {
    return faXmark
  }
}

const Alert = (props: AlertProps): JSX.Element => {
  const { summary, detail, onClose, variant = "info", closable } = props; 

  return (
    <div className={`Alert Alert--${variant}`}>
      <div className="Alert__content">
        <span className="Alert__icon">
          <FontAwesomeIcon icon={selectIcon(variant)} />
        </span>

        <div className="Alert__message">
          {summary && <span className="Alert__summary"><>{summary}</></span>}
          {detail && <div className="Alert__detail"><>{detail}</></div>}
        </div>

        {closable && (
          <button
            className="Alert__close"
            onClick={onClose}
          ></button>
        )}
      </div>
    </div>
  );
}

export default Alert;