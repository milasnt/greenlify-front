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

        <li className="relative group">
          <Link to="/sobre" className="flex items-center gap-2 py-4 text-[1.5rem] font-medium text-text-secondary transition duration-300 hover:text-green-primary">
            Sobre
            <span className="text-[1rem] transition-transform duration-300 group-hover:rotate-180">
              ⌄
            </span>
          </Link>

          <ul className="absolute left-1/2 top-[calc(100%+0.5rem)] z-50 invisible w-64 -translate-x-1/2 translate-y-2 list-none rounded-xl border border-border bg-bg-card p-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <li>
              <Link to="/sobre" className="block w-full whitespace-nowrap rounded-lg px-4 py-3 text-[1.4rem] font-medium text-text-secondary transition duration-300 hover:bg-green-ultra-light hover:text-green-primary">
                Sobre a Greenlify
              </Link>
            </li>

            <li>
              <Link to="/nossasolucao" className="block w-full whitespace-nowrap rounded-lg px-4 py-3 text-[1.4rem] font-medium text-text-secondary transition duration-300 hover:bg-green-ultra-light hover:text-green-primary">
                Nossa solução
              </Link>
            </li>
          </ul>
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