import { Link } from "react-router";

export default function Menu() {
  return (
    <nav className="flex flex-1 justify-center">
      <ul className="flex items-center gap-12 list-none">
        <li>
          <Link to="/" className="text-[1.5rem] font-medium text-text-secondary transition duration-300 hover:text-green-primary">
            Home
          </Link>
        </li>

        <li>
          <Link to="/sobre" className="text-[1.5rem] font-medium text-text-secondary transition duration-300 hover:text-green-primary">
            Sobre
          </Link>
        </li>

        <li>
          <Link to="/integrantes" className="text-[1.5rem] font-medium text-text-secondary transition duration-300 hover:text-green-primary">
            Integrantes
          </Link>
        </li>

        <li>
          <Link to="/faq" className="text-[1.5rem] font-medium text-text-secondary transition duration-300 hover:text-green-primary">
            FAQ
          </Link>
        </li>

        <li>
          <Link to="/contato" className="text-[1.5rem] font-medium text-text-secondary transition duration-300 hover:text-green-primary">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}