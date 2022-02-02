import { FiArrowLeft, FiTrash } from "react-icons/fi";
import "./index.scss";
import Input from "../../Components/Input/Input";
import { Link } from "react-router-dom";

export default function MeusLinks() {
  return (
    <div className="app">
      <div className="links-container">
        <header className="links-header">
          <Link to="/">
            <FiArrowLeft size="32" color="#fff" />
          </Link>
          <h1>Meus links</h1>
        </header>

        <ul className="links-list">
          <li>
            <Input isReadOnly={true} value="https://github.com/torvalds" />
            <FiTrash size="23" color="#FF5454" />
          </li>
          <li>
            <Input isReadOnly={true} value="https://github.com/luizhf42" />
            <FiTrash size="23" color="#FF5454" />
          </li>
        </ul>
      </div>
    </div>
  );
}
