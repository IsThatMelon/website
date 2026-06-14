import { Briefcase } from "lucide-react";

const experiences = [
  { name: "LittleGens22", role: "Developer" },
  { name: "SpawnLocked", role: "Developer" },
  { name: "TownGens", role: "Developer" },
  { name: "KitBurst", role: "Developer" },
  { name: "PurgedGens", role: "Developer" },
  { name: "BoxCorp", role: "Developer" },
  { name: "Zentria", role: "Developer" },
  { name: "JailbreakRP", role: "Developer" },
  { name: "Elytra(H)", role: "Developer" },
  { name: "Luxira", role: "Developer" },
  { name: "LazysBox", role: "Developer" },
  { name: "MazeyGens", role: "Developer" },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute -bottom-20 right-0 w-96 h-96 rounded-full blur-3xl bg-primary/8" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs text-primary">04</span>
          <div className="h-px w-12 bg-border" />
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">EXPERIENCE</span>
        </div>

        <h2 className="font-display text-5xl md:text-7xl leading-[1.05] mb-16 text-foreground max-w-3xl">
          Servers I've <span className="italic-serif gradient-text">shaped.</span>
        </h2>

        <div className="border-t border-border">
          {experiences.map((exp, index) => (
            <div
              key={exp.name}
              className="group flex items-center justify-between border-b border-border py-6 px-2 hover:px-6 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs text-muted-foreground w-8">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Briefcase className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-display text-2xl md:text-4xl text-foreground group-hover:gradient-text transition-all">
                  {exp.name}
                </h3>
              </div>
              <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
                {exp.role.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
