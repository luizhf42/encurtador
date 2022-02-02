import { useState } from "react";
import Dialog from "../../Components/Dialog/Dialog";
import Input from "../../Components/Input/Input";
import Menu from "../../Components/Menu/Menu";
import api from "../../services/api";
import "./index.scss";

export default function Home() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState({});
  const [showDialog, setShowDialog] = useState(false);

  const handleShortLink = async () => {
    try {
      console.log(url);
      const response = await api.post("/shorten", {
        long_url: url,
      });

      setData(response.data);
    } catch (error) {
      console.error(error);
      alert("Algo deu errado! Cheque a URL e tente novamente.");
    }
    setUrl("");
    setShowDialog(true);
  };

  return (
    <div className="app">
      <Menu />
      <div className="container">
        <header className="home-header">
          <img src="src/assets/logo.png" alt="" />
          <h1>Encurta Aí</h1>
          <p>Cole e encurte seu link abaixo</p>
        </header>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleShortLink();
          }}
        >
          <Input
            isReadOnly={false}
            value={url}
            changeValue={(event) => {
              setUrl(event.target.value);
            }}
          />
          <button>Encurtar link</button>
        </form>
      </div>
      {showDialog && (
        <Dialog
          closeDialog={() => {
            setShowDialog(false);
          }}
          links={data}
        />
      )}
    </div>
  );
}
