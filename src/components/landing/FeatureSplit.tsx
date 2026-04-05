import { Shield, RefreshCw, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import techDetail from "@/assets/tech-detail.jpg";

const features = [
  { icon: Shield, label: "Safe near electronics", sub: "Human-safe magnetic field validated by PolyU research" },
  { icon: RefreshCw, label: "Switch modes anytime", sub: "One press cycles Soft → Medium → Firm while walking" },
  { icon: Award, label: "Built to last", sub: "Replacement liners available; backed by Helen of Troy quality" },
];

export function FeatureSplit() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-muted/30" ref={ref}>
      <div
        className={`max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div>
          <p className="section-label">Why it works</p>
          <h2 className="section-title">Upgrade the bag you already own.</h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Carry Comfort uses magnetorheological fabric — a material that changes stiffness in response to a magnetic
            field — to give you real-time control over how your straps feel. No new backpack needed.
          </p>

          <div className="mt-10 space-y-6">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{f.label}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={techDetail}
            alt="Cross-section of magnetorheological fabric technology"
            className="rounded-2xl shadow-xl w-full max-w-md"
            loading="lazy"
            width={1024}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}
