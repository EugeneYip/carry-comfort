export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-foreground">Carry Comfort™</p>
            <p className="text-xs text-muted-foreground mt-1">A Helen of Troy Limited product · NASDAQ: HELE</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {["Shop", "Support", "Returns", "Privacy", "About Helen of Troy"].map((l) => (
              <a key={l} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-8">
          © 2026 Helen of Troy Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
