import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [["About", "#about"], ["Experience", "#experience"], ["Projects", "#projects"], ["Skills", "#skills"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#home">AARYAN SAHU<span>.</span></a>
      <nav className={open ? "nav-links nav-open" : "nav-links"}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="availability" href="mailto:aryansahu7000@gmail.com"><span className="status-dot" /> <span>AI ENGINEER</span></a>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    </header>
  );
}