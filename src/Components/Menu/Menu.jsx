import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./Menu.scss";

export default function Menu() {
  return (
    <nav>
      <ul className="social-links">
        <li>
          <a href="https://github.com/luizhf42" target="_blank">
            <BsGithub size="24"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/luiz-henrique-felix" target="_blank">
            <BsLinkedin size="24"/>
          </a>
        </li>
      </ul>

      <Link to="/links" className="nav-btn">
        Meus Links
      </Link>
    </nav>
  );
}
