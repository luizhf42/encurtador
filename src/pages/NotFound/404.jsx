import { Link } from "react-router-dom";
import "./404.scss";
import notfound from "../../assets/notfound.png";

export default function NotFound() {
  return (
    <div className="app">
      <img src={notfound} className="notfound-img" alt />
      <h1>Página não encontrada!</h1>
      <Link to="/" className="nav-btn">
        Voltar para a Home
      </Link>
    </div>
  );
}
