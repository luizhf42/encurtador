import { useState } from "react";
import Dialog from "../../Components/Dialog/Dialog";
import Input from "../../Components/Input/Input";
import Menu from "../../Components/Menu/Menu";
import api from "../../services/api";
import "./Home.scss";

export default function Home() {
  const [requestWasSuccessful, setRequestWasSuccessful] = useState();
  const [url, setUrl] = useState("");
  const [data, setData] = useState({});
  const [showDialog, setShowDialog] = useState(false);

  const handleShortLink = async () => {
    try {
      const response = await api.post("/shorten", {
        long_url: url,
      });

      setData(response.data);
      setRequestWasSuccessful(true);
    } catch (error) {
      setRequestWasSuccessful(false);
      console.error(error);
    }
    setUrl("");
    setShowDialog(true);
    setTimeout(() => setShowDialog(false), 10000);
  };

  return (
    <div className="app">
      <Menu />
      <div className="container">
        <header className="home-header">
          <img src="./src/assets/logo.png" alt="" />
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
            inputValue={url}
            inputPlaceholder="ex.: https://github.com/luizhf42"
            changeValue={(event) => {
              setUrl(event.target.value);
            }}
          />
          <button>Encurtar link</button>
        </form>
      </div>
      {showDialog && (
        <Dialog
          success={requestWasSuccessful}
          closeDialog={() => {
            setShowDialog(false);
          }}
          links={data}
        />
      )}
    </div>
  );
}
