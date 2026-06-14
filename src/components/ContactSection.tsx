import { Mail, MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-primary">05</span>
          <div className="h-px w-12 bg-border" />
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">CONTACT</span>
        </div>

        <h2 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8 text-foreground">
          Let's build something{" "}
          <span className="italic-serif gradient-text">extraordinary</span> together.
        </h2>

        <p className="text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed">
          Have a project in mind, an idea to explore, or just want to connect? I'm always
          open to discussing new Skript & Java work and interesting challenges.
        </p>

        <a
          href="mailto:notmelon890@gmail.com"
          className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-display text-foreground border-b border-primary/50 pb-2 hover:border-primary transition-colors"
        >
          <Mail className="w-6 h-6 text-primary" />
          notmelon890@gmail.com
        </a>

        <div className="mt-12 flex items-center gap-4">
          <div className="p-3 rounded border border-border bg-card/50 hover:border-primary/50 transition-colors">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs font-mono tracking-wider text-muted-foreground">DISCORD</p>
            <p className="text-foreground font-mono">melon890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;