import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./index.scss";

export default function Home() {
  return (
    <div className="app">
      <div className="container">
        <header>
          <img src="src/assets/logo.png" alt="" />
          <h1>Encurta Aí</h1>
          <p>Cole e encurte seu link abaixo</p>
        </header>
        <form>
          <div className="input-area">
            <FiLink size={23} color="#fff"/>
            <input type="url" placeholder="ex.: https://github.com/luizhf42" />
          </div>
          <button>Encurtar link</button>
        </form>
      </div>
    </div>
  );
}
