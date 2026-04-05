import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const modes = [
  {
    label: "Soft",
    title: "Light days",
    desc: "Gentle cushioning for short commutes and lighter loads. The liner stays pliable for a relaxed, comfortable carry.",
    fill: 30,
  },
  {
    label: "Medium",
    title: "Everyday carry",
    desc: "Balanced support for a laptop plus daily essentials. Distributes weight without feeling stiff on a typical commute.",
    fill: 62,
  },
  {
    label: "Firm",
    title: "Heavy load days",
    desc: "Maximum support for all-day carry. Prevents shoulder fatigue under sustained weight on longer commutes.",
    fill: 96,
  },
];

export function Modes() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">Firmness modes</p>
          <h2 className="section-title">Three modes. One press.</h2>
          <p className="section-subtitle mx-auto">Switch firmness on the go — no stopping, no fuss.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {modes.map((m, i) => (
            <div
              key={i}
              className={`bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-primary">{m.label}</span>
              <h3 className="text-xl font-semibold text-foreground mt-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{m.desc}</p>

              <div className="mt-6">
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${m.fill}%` : "0%" }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {m.fill < 40 ? "Low" : m.fill < 70 ? "Balanced" : "Maximum"} firmness
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
