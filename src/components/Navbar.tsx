import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "experience", label: "EXPERIENCE" },
];

const NavItem = ({ id, label, onClick }: { id: string; label: string; onClick: (id: string) => void }) => (
  <button
    onClick={() => onClick(id)}
    style={{ fontFamily: "'Press Start 2P', monospace" }}
    className="group relative text-[11px] leading-none text-muted-foreground hover:text-primary transition-colors uppercase"
  >
    {label}
    <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
  </button>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-display text-2xl tracking-wide text-primary hover:text-glow transition-all"
          >
            ISTHAT<span className="italic-serif gradient-text">MELON</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavItem key={l.id} {...l} onClick={scrollTo} />
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors text-left px-2 uppercase"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
