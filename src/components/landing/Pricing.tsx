import { Check, Truck, Shield, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  "2 adjustable magnetorheological strap liners",
  "1 clip-on firmness controller — Soft / Medium / Firm",
  "Universal Velcro fit — any backpack, no tools",
  "Illustrated setup guide included",
  "Replacement liner availability",
  "30-day satisfaction guarantee + free returns",
];

const trust = [
  { icon: Truck, label: "Free shipping", sub: "Ships in 2–4 business days" },
  { icon: Shield, label: "30-day guarantee", sub: "Full refund, no questions" },
  { icon: RefreshCw, label: "Free returns", sub: "Easy return process" },
];

export function Pricing() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="shop" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">Pricing</p>
          <h2 className="section-title">One kit. Both shoulders.</h2>
          <p className="section-subtitle mx-auto">Everything included. No subscriptions. No hidden fees.</p>
        </div>

        <div
          className={`bg-card rounded-2xl border border-border shadow-lg overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-primary/5 border-b border-border p-8 text-center">
            <h3 className="text-xl font-bold text-foreground">Carry Comfort™ Dual-Pad Kit</h3>
            <p className="text-4xl font-bold text-primary mt-3">$39</p>
            <p className="text-sm text-muted-foreground mt-2">Free shipping · No subscription · Ships 2–4 days</p>
          </div>

          <div className="p-8">
            <div className="space-y-4 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-success" />
                  </div>
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="w-full text-base">
              Add to cart — carrycomfort.com
            </Button>
            <Button variant="outline" size="lg" className="w-full mt-3 text-base">
              Also available on Amazon
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Secure checkout · 30-day money-back guarantee
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-12">
          {trust.map((t, i) => (
            <div key={i} className="text-center">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <t.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-foreground">{t.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{t.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
