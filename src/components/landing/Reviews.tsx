import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const reviews = [
  {
    name: "Marcus T.",
    role: "Software engineer · NYC",
    rating: 5,
    text: "My shoulder stopped hurting after the first week. I carry a 15-inch laptop every day and genuinely didn't expect a strap add-on to make this much difference.",
  },
  {
    name: "Priya S.",
    role: "Consultant · Chicago",
    rating: 5,
    text: "Firm mode on heavy days is exactly what I needed. One press while walking and you feel the difference immediately. It's completely seamless.",
  },
  {
    name: "James K.",
    role: "Designer · San Francisco",
    rating: 4,
    text: "Installed in two minutes, works perfectly on my old bag. Way smarter than buying a whole new backpack just for better shoulder support.",
  },
];

export function Reviews() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="reviews" className="section-padding bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">Reviews</p>
          <h2 className="section-title">What commuters are saying.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, si) => (
                  <Star
                    key={si}
                    className={`h-4 w-4 ${si < r.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-6">"{r.text}"</p>
              <p className="text-sm font-semibold text-foreground">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
