import { FiX, FiClipboard } from "react-icons/fi";
import Input from "../Input/Input";
import "./Dialog.scss";

export default function Dialog({ closeDialog, links }) {
  const copyLink = async () => {
    await navigator.clipboard.writeText(links.link);
  };

  return (
    <div className="dialog">
      <header>
        <h2>Encurtado!</h2>
        <button>
          <FiX size="28" onClick={closeDialog} />
        </button>
      </header>

      <p>{links.long_url}</p>

      <div className="shortned-link" onClick={copyLink}>
        <Input isReadOnly={true} inputValue={links.link} />
        <FiClipboard size={24} color="#fff" />
      </div>
    </div>
  );
}
