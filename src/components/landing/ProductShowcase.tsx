import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import heroImg from "@/assets/hero-product.jpg";
import kitContents from "@/assets/kit-contents.jpg";
import techDetail from "@/assets/tech-detail.jpg";

const imgs = [
  { src: heroImg, label: "On the straps", alt: "Product attached to backpack strap" },
  { src: kitContents, label: "Kit contents", alt: "All kit components laid out" },
  { src: techDetail, label: "Tech detail", alt: "Cross-section of MR fluid technology" },
];

const kitItems = [
  "2 magnetorheological strap liners",
  "1 clip-on firmness controller (Soft / Medium / Firm)",
  "Velcro wrap — fits any standard strap width",
  "No permanent modification required",
  "Illustrated setup guide included",
  "30-day satisfaction guarantee",
];

export function ProductShowcase() {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">The product</p>
          <h2 className="section-title">Designed for the bag you already love.</h2>
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src={imgs[active].src}
                alt={imgs[active].alt}
                className="w-full aspect-square object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {imgs.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`overflow-hidden rounded-lg aspect-[4/3] border-2 transition-colors ${
                    active === i ? "border-primary" : "border-transparent hover:border-border"
                  }`}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground">What's in the kit</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-2">One kit. Both shoulders covered.</p>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Everything you need to upgrade any backpack — no tools, no permanent changes, nothing extra to buy.
            </p>

            <div className="space-y-4">
              {kitItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="w-full mt-8"
              onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
            >
              Shop now — $39
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
