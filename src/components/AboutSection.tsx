import { Code2 } from "lucide-react";

const stats = [
  { value: "3", label: "YEARS EXPERIENCE" },
  { value: "12+", label: "MINECRAFT SERVERS" },
  { value: "0", label: "HOURS OF TOUCHING GRASS" },
  { value: "✓", label: "HAPPY CLIENTS" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-primary border border-primary/30 px-2 py-0.5 rounded">00</span>
          <div className="h-px w-12 bg-gradient-to-r from-primary to-transparent" />
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">ABOUT ME</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div>
            <h2 className="font-display text-5xl md:text-6xl leading-[1.05] mb-10 text-foreground">
              Building Minecraft{" "}
              <span className="italic-serif gradient-text">experiences</span> that
              leave a mark.
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              I care a lot about the details. The way a server feels to play, the
              way commands respond, the code behind it. I like building systems
              that just work and feel good to interact with.
            </p>

            <p className="text-muted-foreground mb-10 leading-relaxed">
              Whether it's a full prestige economy, a custom PvP arena, or a
              plugin written from scratch in Java, I enjoy the whole process —
              figuring out the right approach, writing clean code, and shipping
              something I'm proud of.
            </p>

            <blockquote className="border-l-2 border-primary pl-5 py-1">
              <p className="italic-serif text-lg text-foreground">
                "Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand."
              </p>
              <footer className="font-mono text-xs text-muted-foreground mt-3">
                — Martin Fowler
              </footer>
            </blockquote>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-6 rounded border border-border bg-card/50 hover:border-primary/40 transition-colors"
                >
                  <div className="font-display text-4xl text-foreground mb-3">{s.value}</div>
                  <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded border border-border bg-card/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-primary">
                  AVAILABLE FOR WORK
                </span>
              </div>
              <p className="font-mono text-xs text-muted-foreground pl-5">
                Open to custom Skript & Java commissions — DM melon890 on Discord.
              </p>
            </div>

            <div className="p-6 rounded border border-border bg-card/50">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
                  melon890.ts
                </span>
              </div>
              <pre className="font-mono text-xs leading-relaxed text-muted-foreground">
{`// how i build stuff
const `}<span className="text-primary">melon</span>{` = {
  code: `}<span className="text-accent">"clean & purposeful"</span>{`,
  design: `}<span className="text-accent">"minimal & intentional"</span>{`,
  approach: `}<span className="text-accent">"fast, iterate faster"</span>{`,
  passion: `}<span className="text-accent">"building things that matter"</span>{`,
};`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
