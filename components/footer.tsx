export default function Footer() {
  return (
    <footer className="relative py-16 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 232, 240, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold font-heading text-primary mb-2">Globexlink</h3>
          <p className="text-muted-foreground">Strategic Trade Networks</p>
        </div>

        <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div className="text-center">
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="https://globexlinkb2b.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent block duration-150"
              >
                Website
              </a>
              <a href="/investors" className="text-muted-foreground hover:text-accent block duration-150">
                Investors
              </a>
              <a
                href="https://instagram.com/globexlink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent block duration-150"
              >
                Instagram
              </a>
              <a
                href="https://x.com/globexlink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent block duration-150"
              >
                X
              </a>
              <a href="/partners" className="text-muted-foreground hover:text-accent block duration-150">
                Partners
              </a>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-semibold text-white mb-3">Legal & Support</h4>
            <div className="space-y-2">
              <a href="#" className="text-muted-foreground hover:text-accent block duration-150">
                Terms & Conditions
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent block duration-150">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent block duration-150">
                Integrity & Compliance
              </a>
            </div>
          </div>

          <div className="text-left">
            <h4 className="font-semibold text-white mb-3">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Fulya, Ortaklar Cd. No:2, 34394 Şişli/İstanbul, Türkiye</p>
              <p>
                <a
                  href="mailto:info@globexlinkb2b.com"
                  className="hover:text-accent underline-offset-4 hover:underline"
                >
                  info@globexlinkb2b.com
                </a>
                <span aria-hidden="true">{" • "}</span>
                <a
                  href="mailto:support@globexlinkb2b.com"
                  className="hover:text-accent underline-offset-4 hover:underline"
                >
                  support@globexlinkb2b.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+905459744876"
                  className="hover:text-accent underline-offset-4 hover:underline"
                  aria-label="Call Globexlink at plus ninety, five four five, nine seven four, four eight seven six"
                >
                  +90 545 974 48 76
                </a>
              </p>
            </div>
          </div>
        </div>

        <span className="block text-center text-sm text-primary font-semibold">
          © {new Date().getFullYear()} Globexlink. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
