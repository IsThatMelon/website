const skillGroups = [
  {
    label: "CORE",
    items: ["Skript", "Java", "Spigot / Paper API", "NMS & Packets"],
  },
  {
    label: "DATA",
    items: ["MySQL", "MongoDB", "SQLite", "YAML Configs", "Player Storage"],
  },
  {
    label: "TOOLS & PLATFORMS",
    items: ["IntelliJ IDEA", "Git", "Maven", "Vault", "PlaceholderAPI", "LuckPerms"],
  },
  {
    label: "PRACTICES",
    items: ["Performance Tuning", "Custom GUIs", "Event Systems", "Code Review"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary/8 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs text-primary">02</span>
          <div className="h-px w-12 bg-border" />
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">SKILLS</span>
        </div>

        <h2 className="font-display text-5xl md:text-7xl leading-[1.05] mb-20 text-foreground max-w-3xl">
          Technologies I <span className="italic-serif gradient-text">work with.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="group p-6 rounded border border-border bg-card/50 hover:border-primary/40 hover:bg-card transition-all duration-500"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-primary rounded-sm" />
                <span className="font-mono text-xs tracking-[0.25em] text-primary">
                  {group.label}
                </span>
              </div>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-foreground/85 text-base border-b border-border/50 pb-3 last:border-0 group-hover:text-foreground transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
