import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Soft pink orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] animate-float" style={{ background: 'hsl(340 90% 72% / 0.12)', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] animate-float" style={{ background: 'hsl(330 85% 65% / 0.15)', animationDelay: '4s' }} />

      {/* Faint grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary/60" />
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
            PORTFOLIO / 2026—PRESENT
          </span>
          <div className="h-px w-12 bg-primary/60" />
        </div>

        <h1 className="font-display font-light text-[clamp(4rem,14vw,11rem)] leading-[0.95] mb-6 text-foreground tracking-tight">
          ISTHAT<span className="italic-serif gradient-text">MELON</span>
        </h1>

        <p className="font-mono text-xs tracking-[0.3em] text-primary mb-6">
          SKRIPT &nbsp;&amp;&nbsp; JAVA &nbsp;DEVELOPER
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          I break things until they work, then polish them until they feel <span className="italic-serif text-foreground">right</span>.
          Minecraft plugins, weird economy systems, and code that somehow stays alive at 3am.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-mono text-xs tracking-[0.2em] h-12 px-8"
          >
            ABOUT ME
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToProjects}
            className="border-border bg-transparent text-foreground hover:bg-primary/10 hover:border-primary/50 rounded-none font-mono text-xs tracking-[0.2em] h-12 px-8"
          >
            VIEW PROJECTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
