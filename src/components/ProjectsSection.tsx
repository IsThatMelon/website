import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, TrendingUp, ShoppingCart, Wand2, Coins } from "lucide-react";

const projects = [
  {
    icon: Trophy,
    title: "Prestige System",
    description:
      "Complete prestige progression system with multiple prestige levels, rewards, and custom commands. Players can reset their progress for permanent bonuses.",
    tags: ["Java", "Economy", "Progression"],
    features: ["Auto-reset on prestige", "Custom rewards per level", "GUI interface", "Leaderboards"],
    color: "primary",
  },
  {
    icon: TrendingUp,
    title: "Multiplier System",
    description:
      "Dynamic multiplier system for XP, money, and drops. Supports stacking multipliers with configurable limits and time-based events.",
    tags: ["Java", "Economy", "Events"],
    features: ["Stackable multipliers", "Permission-based", "Time limited", "Global events"],
    color: "purple",
  },
  {
    icon: Coins,
    title: "MelPlots",
    description:
      "Custom plots plugin with claiming, permissions, and management features. Players can create, expand, and customize their own protected areas.",
    tags: ["Java", "Plots", "Protection"],
    features: ["Plot claiming", "Member permissions", "Plot expansion", "Custom borders"],
    color: "accent",
  },
  {
    icon: ShoppingCart,
    title: "Custom Credit System",
    description:
      "Complete /buy command system with credits. Players earn credits and spend them in categorized shop menus with GUI navigation.",
    tags: ["Skript", "Economy", "GUI"],
    features: ["Credit currency", "Category menus", "GUI shop", "Purchase history"],
    color: "cyan",
  },
  {
    icon: Wand2,
    title: "1v1 Room Skript",
    description:
      "Private 1v1 arena system where players can challenge each other to duels in isolated rooms with custom kits and stats.",
    tags: ["Skript", "PvP", "Arenas"],
    features: ["Private rooms", "Custom kits", "ELO ranking", "Duel requests"],
    color: "primary",
  },
  {
    icon: Wand2,
    title: "Custom Abilities",
    description:
      "Unique ability system featuring Grappler hooks, Ice Traps, Lightning strikes, and a Custom Dash Sword for combat servers.",
    tags: ["Skript", "Combat", "Abilities"],
    features: ["Grappler hook", "Ice trap freeze", "Lightning strike", "Dash sword"],
    color: "purple",
  },
];

const colorConfig: Record<string, { iconBg: string; iconText: string; borderHover: string; dotColor: string; badgeBg: string }> = {
  primary: {
    iconBg: "bg-primary/20",
    iconText: "text-primary",
    borderHover: "hover:border-primary/50 hover:box-glow",
    dotColor: "bg-primary",
    badgeBg: "bg-primary/10 text-primary border-primary/20",
  },
  purple: {
    iconBg: "bg-accent/20",
    iconText: "text-accent",
    borderHover: "hover:border-accent/50 hover:box-glow-accent",
    dotColor: "bg-accent",
    badgeBg: "bg-accent/10 text-accent border-accent/20",
  },
  cyan: {
    iconBg: "bg-primary/15",
    iconText: "text-primary",
    borderHover: "hover:border-primary/40 hover:box-glow",
    dotColor: "bg-primary",
    badgeBg: "bg-primary/10 text-primary border-primary/20",
  },
  accent: {
    iconBg: "bg-accent/20",
    iconText: "text-accent",
    borderHover: "hover:border-accent/50 hover:box-glow-accent",
    dotColor: "bg-accent",
    badgeBg: "bg-accent/10 text-accent border-accent/20",
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs text-primary">01</span>
          <div className="h-px w-12 bg-border" />
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">PROJECTS</span>
        </div>

        <h2 className="font-display text-5xl md:text-7xl leading-[1.05] mb-16 text-foreground max-w-3xl">
          Selected <span className="italic-serif gradient-text">work.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const colors = colorConfig[project.color];
            return (
              <Card
                key={project.title}
                className={`group bg-card border-border ${colors.borderHover} transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${colors.iconBg} ${colors.iconText}`}>
                      <project.icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={`text-xs ${colors.badgeBg}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {project.description}
                  </CardDescription>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.dotColor}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
