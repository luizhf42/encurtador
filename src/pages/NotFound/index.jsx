import { Link } from "react-router-dom";
import "./index.scss";

export default function NotFound() {
  return (
    <div className="app">
      <img src="src/assets/notfound.png" alt />
      <h1>Página não encontrada!</h1>
      <Link to="/" className="nav-btn">
        Voltar para a Home
      </Link>
    </div>
  );
}
