import { useState } from "react";
import { FiX, FiClipboard, FiCheck } from "react-icons/fi";
import Input from "../Input/Input";
import "./Dialog.scss";

export default function Dialog({ closeDialog, links, success }) {
  const copyLink = async () => {
    await navigator.clipboard.writeText(links.link);
  };

  const [copied, setCopied] = useState(false);
  const toggleIcon = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };

  return (
    <div className="dialog">
      {success ? (
        <>
          <header>
            <h2>Encurtado!</h2>
            <button>
              <FiX size="28" onClick={closeDialog} />
            </button>
          </header>
          <p>{links.long_url}</p>
          <div
            className="shortned-link"
            onClick={() => {
              copyLink();
              toggleIcon();
            }}
          >
            <Input isReadOnly={true} inputValue={links.link} />
            {copied ? (
              <FiCheck size={24} color="#fff" />
            ) : (
              <FiClipboard size={24} color="#fff" />
            )}
          </div>
        </>
      ) : (
        <h2 className="error">
          Ops! Algo deu errado! Cheque a URL e tente novamente.
        </h2>
      )}
    </div>
  );
}
