import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-product.jpg";

export function Hero() {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
            New · 2026 Launch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Adjust your comfort.
            <br />
            <span className="text-primary">Not your backpack.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Three firmness modes on the bag you already own. Wrap on, clip in, and carry better from day one — no new backpack needed.
          </p>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-foreground">$39</span>
            <span className="text-sm text-muted-foreground">Dual-pad kit · Free shipping</span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="gap-2 text-base"
              onClick={() => document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" })}
            >
              <ShoppingBag className="h-5 w-5" />
              Add to cart
            </Button>
            <Button variant="outline" size="lg" className="gap-2 text-base">
              Also on Amazon
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">30-day money-back guarantee · Free returns</p>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-3xl -z-10" />
            <img
              src={heroImg}
              alt="Carry Comfort strap liner attached to a backpack shoulder strap"
              className="w-full rounded-2xl shadow-2xl"
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
