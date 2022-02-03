import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import "./Menu.scss";

export default function Menu() {
  return (
    <nav>
      <ul className="social-links">
        <li>
          <a href="https://github.com/luizhf42" target="_blank">
            <BsGithub size="28" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/luiz-henrique-felix"
            target="_blank"
          >
            <BsLinkedin size="28" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
