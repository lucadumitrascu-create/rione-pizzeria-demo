export default function Footer() {
  return (
    <footer className="bg-forno py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-mozzarella mb-4">
              Il Rione
            </h3>
            <p className="text-mozzarella/50 text-sm leading-relaxed max-w-xs">
              Autentica Pizza Napoletana aus dem Kupferofen bei 485°C. Frische
              Zutaten aus Italien, direkt in Ihrem Bezirk.
            </p>
          </div>

          <div>
            <h4 className="text-mozzarella/80 font-semibold text-sm tracking-wide uppercase mb-4">
              Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Unsere Geschichte", href: "#storia" },
                { label: "Speisekarte", href: "https://rione.at" },
                { label: "Galerie", href: "#galleria" },
                { label: "Kontakt", href: "#contatti" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-mozzarella/50 hover:text-olio transition-colors text-sm"
                    {...(l.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-mozzarella/80 font-semibold text-sm tracking-wide uppercase mb-4">
              Rechtliches
            </h4>
            <div className="text-mozzarella/40 text-sm space-y-2">
              <p>Rione Gastro OG</p>
              <p>Firmenbuchnummer 572289b</p>
              <p>UID ATU77738469</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-mozzarella/10 text-center">
          <p className="text-mozzarella/30 text-sm">
            © 2026 Il Rione Pizzeria · Autentica Pizza Napoletana
          </p>
        </div>
      </div>
    </footer>
  );
}
