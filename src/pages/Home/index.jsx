import { useState } from "react";
import Input from "../../Components/Input/Input";
import Menu from "../../Components/Menu/Menu";
import "./index.scss";

export default function Home() {
  return (
    <div className="app">
      <Menu />
      <div className="container">
        <header className="home-header">
          <img src="src/assets/logo.png" alt="" />
          <h1>Encurta Aí</h1>
          <p>Cole e encurte seu link abaixo</p>
        </header>
        <form>
          <Input isReadOnly={false} />
          <button>Encurtar link</button>
        </form>
      </div>
    </div>
  );
}
