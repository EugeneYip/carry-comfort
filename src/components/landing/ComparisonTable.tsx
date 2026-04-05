import { Check, Minus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const rows = [
  { feature: "Dual pads (both shoulders)", cc: true, optech: false, zpacks: true, generic: false },
  { feature: "Adjustable firmness modes", cc: true, optech: false, zpacks: false, generic: false },
  { feature: "Retrofit — works on any bag", cc: true, optech: true, zpacks: true, generic: true },
  { feature: "No permanent modification", cc: true, optech: true, zpacks: true, generic: true },
  { feature: "Controller included", cc: true, optech: false, zpacks: false, generic: false },
  { feature: "30-day guarantee", cc: true, optech: false, zpacks: false, generic: false },
];

const cols: { key: keyof (typeof rows)[0]; label: string; price: string; highlight?: boolean }[] = [
  { key: "cc", label: "Carry Comfort™", price: "$39", highlight: true },
  { key: "optech", label: "OP/TECH", price: "$17–26" },
  { key: "zpacks", label: "Zpacks", price: "$29.95" },
  { key: "generic", label: "Generic pads", price: "~$15" },
];

export function ComparisonTable() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">Compare</p>
          <h2 className="section-title">See how we stack up.</h2>
        </div>

        {/* Desktop table */}
        <div
          className={`hidden md:block overflow-hidden rounded-xl border border-border transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-4 font-medium text-muted-foreground">Feature</th>
                {cols.map((c) => (
                  <th key={c.key} className={`p-4 text-center ${c.highlight ? "bg-primary/5" : ""}`}>
                    <p className={`font-semibold ${c.highlight ? "text-primary" : "text-foreground"}`}>{c.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{c.price}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className="border-b border-border last:border-0">
                  <td className="p-4 text-foreground">{r.feature}</td>
                  {cols.map((c) => (
                    <td key={c.key} className={`p-4 text-center ${c.highlight ? "bg-primary/5" : ""}`}>
                      {r[c.key] ? (
                        <Check className="h-4 w-4 text-success mx-auto" />
                      ) : (
                        <Minus className="h-4 w-4 text-muted-foreground/40 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {cols.map((c) => (
            <div
              key={c.key}
              className={`rounded-xl border p-5 ${c.highlight ? "border-primary bg-primary/5" : "border-border bg-card"}`}
            >
              <div className="flex items-baseline justify-between mb-4">
                <h3 className={`font-semibold ${c.highlight ? "text-primary" : "text-foreground"}`}>{c.label}</h3>
                <span className="text-sm text-muted-foreground">{c.price}</span>
              </div>
              <div className="space-y-2">
                {rows.map((r, ri) => (
                  <div key={ri} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{r.feature}</span>
                    {r[c.key] ? (
                      <Check className="h-4 w-4 text-success flex-shrink-0" />
                    ) : (
                      <Minus className="h-4 w-4 text-muted-foreground/40 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
