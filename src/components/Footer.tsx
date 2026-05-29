import { Phone, Mail, MapPin } from 'lucide-react';

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
import { siteContent } from '@/lib/content';

export default function Footer() {
  const { business, contact, nav } = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-white" role="contentinfo">
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="font-display font-extrabold text-xl mb-1">{business.shortName}</div>
            <div className="text-amber-400 text-sm font-semibold mb-4">Barbora Šůlová</div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Kurz skupiny B (osobní automobil). Výuka i výcvik v Rokycanech, možnost plánování o víkendech.
            </p>
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-white/50 hover:text-white text-sm transition-colors"
              aria-label="Navštívit Facebook stránku autoškoly"
            >
              <FacebookIcon size={16} />
              Facebook
            </a>
          </div>

          {/* Nav */}
          <nav aria-label="Patička navigace">
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Navigace</p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Kontakt</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                  aria-label={`Zavolat: ${contact.phone}`}
                >
                  <Phone size={14} className="shrink-0 text-brand-400" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Mail size={14} className="shrink-0 text-brand-400" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin size={14} className="shrink-0 mt-0.5 text-brand-400" />
                <span>{contact.address}</span>
              </li>
              <li className="text-white/40 text-xs ml-5">{contact.addressNote}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/30 text-xs">
          <p>© {year} {business.name}. Všechna práva vyhrazena.</p>
          <p>Kurz skupiny B · Rokycany 337 01</p>
        </div>
      </div>
    </footer>
  );
}
