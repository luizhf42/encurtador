import { FiLink } from "react-icons/fi";
import "./Input.scss";

export default function Input(props) {
  return (
    <div className="input-area">
      <FiLink size={23} color="#fff" />
      <input
        value={props.inputValue}
        onChange={props.changeValue}
        type="text"
        placeholder={props.inputPlaceholder}
        readOnly={props.isReadOnly}
      />
    </div>
  );
}
