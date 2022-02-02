import { useState } from "react";
import Input from "../../Components/Input/Input";
import Menu from "../../Components/Menu/Menu";
import "./index.scss";

export default function Home() {
  const [url, setUrl] = useState("");

  return (
    <div className="app">
      <Menu />
      <div className="container">
        <header className="home-header">
          <img src="src/assets/logo.png" alt="" />
          <h1>Encurta Aí</h1>
          <p>Cole e encurte seu link abaixo</p>
        </header>
        <form onSubmit={(event) => {
          event.preventDefault();
        }}>
          <Input
            isReadOnly={false}
            value={url}
            onChange={(event) => {
              setUrl(event.target.value);
            }}
          />
          <button>Encurtar link</button>
        </form>
      </div>
    </div>
  );
}
