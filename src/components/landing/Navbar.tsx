import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = ["Features", "How it works", "Reviews", "Shop"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scroll = (id: string) => {
    document.getElementById(id.toLowerCase().replace(/ /g, "-"))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <button onClick={() => scroll("hero")} className="text-lg font-bold text-foreground tracking-tight">
          Carry Comfort™
        </button>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scroll(l)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </button>
          ))}
          <Button onClick={() => scroll("Shop")} size="sm" className="gap-2">
            <ShoppingBag className="h-4 w-4" />
            Shop — $39
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => scroll(l)}
              className="block w-full text-left py-3 text-sm font-medium text-foreground border-b border-border last:border-0"
            >
              {l}
            </button>
          ))}
          <Button onClick={() => scroll("Shop")} className="w-full mt-3 gap-2">
            <ShoppingBag className="h-4 w-4" />
            Shop — $39
          </Button>
        </div>
      )}
    </nav>
  );
}
