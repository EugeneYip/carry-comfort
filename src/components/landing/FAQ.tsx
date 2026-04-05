import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    q: "Does it work with any backpack?",
    a: "Yes. The Velcro wrap fits any standard shoulder strap width. Whether it's a commuter bag, hiking pack, or school backpack, Carry Comfort attaches securely without permanent modification.",
  },
  {
    q: "How does the firmness control work?",
    a: "The liner contains magnetorheological (MR) fluid that changes stiffness in response to a magnetic field. The clip-on controller generates a safe, human-grade magnetic field. Press once to cycle through Soft, Medium, and Firm.",
  },
  {
    q: "Is the magnetic field safe for electronics?",
    a: "Yes. The magnetic field is human-safe and has been validated by Hong Kong Polytechnic University research. It will not affect your laptop, phone, or other electronics in your bag.",
  },
  {
    q: "Does it need batteries or charging?",
    a: "The controller uses a standard CR2032 coin cell battery that lasts approximately 6 months of daily use. Replacement batteries are widely available.",
  },
  {
    q: "Can I wash the strap liners?",
    a: "The outer fabric can be spot-cleaned with a damp cloth. Do not machine wash or submerge the liners, as this may damage the MR fluid layer.",
  },
  {
    q: "What's included in the kit?",
    a: "Two magnetorheological strap liners, one clip-on firmness controller, Velcro wraps for attachment, and an illustrated setup guide. Everything you need — nothing else to buy.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "We offer a 30-day money-back guarantee with free returns. If Carry Comfort doesn't improve your daily carry, send it back for a full refund — no questions asked.",
  },
];

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">FAQ</p>
          <h2 className="section-title">Common questions.</h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-foreground">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
