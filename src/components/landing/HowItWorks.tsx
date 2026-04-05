import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import stepWrap from "@/assets/step-wrap.jpg";
import stepPress from "@/assets/step-press.jpg";
import stepClip from "@/assets/step-clip.jpg";

const steps = [
  {
    n: "01",
    title: "Wrap the liner",
    desc: "Wrap each liner around your existing shoulder strap. The Velcro backing holds it flat and flush — no tools needed.",
    img: stepWrap,
    alt: "Wrapping the liner around a backpack strap",
  },
  {
    n: "02",
    title: "Press it flat",
    desc: "Firmly press the pad against the strap. The magnetorheological layer is positioned between your shoulder and the bag.",
    img: stepPress,
    alt: "Pressing the pad securely onto the strap",
  },
  {
    n: "03",
    title: "Clip and select",
    desc: "Clip on the controller. Press once to cycle through Soft, Medium, or Firm. You're carrying better immediately.",
    img: stepClip,
    alt: "Clipping the firmness controller onto the strap",
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">How it works</p>
          <h2 className="section-title">Ready in under two minutes.</h2>
          <p className="section-subtitle mx-auto">No tools. No permanent changes. Just wrap, secure, and go.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={s.img}
                  alt={s.alt}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{s.n}</span>
                <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
