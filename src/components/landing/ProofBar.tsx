import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const items = [
  { num: "3", label: "Firmness modes" },
  { num: "2 min", label: "Install time" },
  { num: "Any bag", label: "Universal strap fit" },
  { num: "30-day", label: "Money-back guarantee" },
];

export function ProofBar() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="border-y border-border bg-muted/30">
      <div
        className={`max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {items.map((it, i) => (
          <div
            key={i}
            className={`py-8 px-6 text-center ${
              i < items.length - 1 ? "border-r border-border" : ""
            } ${i < 2 ? "border-b md:border-b-0 border-border" : ""}`}
          >
            <p className="text-2xl font-bold text-foreground">{it.num}</p>
            <p className="text-sm text-muted-foreground mt-1">{it.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
