const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs tracking-[0.25em] text-primary">ISTHATMELON</div>
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} melon890. if it compiles, ship it.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground font-mono">
              Skript + Java
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
