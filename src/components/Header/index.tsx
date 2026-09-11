import { Link } from "react-router-dom";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className="w-full border-b border-border bg-bg">
      <div className="mx-auto flex max-w-[140rem] items-center justify-between gap-16 px-16 py-5">
        <Link to="/" className="flex items-center gap-4">
          <span className="text-[2.2rem] font-bold text-text-main">
            Green<span className="text-green-primary">lify</span>
          </span>
        </Link>

        <Menu />
        
      </div>
    </header>
  );
}