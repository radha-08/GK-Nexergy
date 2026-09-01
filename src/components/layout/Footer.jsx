import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Github } from "lucide-react";
import "./Footer.css";

const Footer = () => (
  <footer className="site-footer" data-testid="main-footer">
    <div className="footer-container">
      <div className="footer-grid">
        {/* 1. Brand Section */}
        <div className="footer-brand-col">
          <Link to="/home" className="footer-logo-link" data-testid="footer-logo">
            <img
              src="/images/gklogo.png"
              alt="GK Nexergy Logo"
              className="footer-logo-img"
            />
          </Link>
          <p className="footer-tagline">
            Empowering People. Enabling Businesses. Transforming Communities.
          </p>
         
        </div>

        {/* 2. Contact Section */}
        <div className="footer-contact-col">
          <h3 className="footer-col-heading">Contact Us</h3>
          <div className="footer-contact-list">
            <a
              href="mailto:info@gknexergy.com"
              className="footer-contact-item"
              data-testid="footer-email"
            >
              <div className="footer-contact-icon">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <span style={{ display: "block", fontSize: "11px", color: "var(--footer-muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Email Inquiry
                </span>
                <span>info@gknexergy.com</span>
              </div>
            </a>

            <div className="footer-contact-item" data-testid="footer-phone">
              <div className="footer-contact-icon">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <span style={{ display: "block", fontSize: "11px", color: "var(--footer-muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                  Phone Helpline
                </span>
                <span>Phone — 9140580900</span>
              </div>
            </div>

            
          </div>
        </div>

        {/* 3. Social Links Section */}
        <div className="footer-social-col">
          <h3 className="footer-col-heading">Connect With Us</h3>
          <p className="footer-social-subtext">
            Stay tuned with our latest updates, academy announcements, and engineering breakthroughs.
          </p>

          <div className="footer-social-icons">
            {[
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              { Icon: Github, href: "https://github.com", label: "GitHub" },
            ].map(({ Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={`${label} — Coming Soon`}
                data-testid={`footer-social-${i}`}
                className="footer-social-btn"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="footer-launch-pill">
            <span className="footer-status-dot"></span>
            <span>Social media channels launching soon</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <p className="footer-copyright">
          © {new Date().getFullYear()} GK Nexergy. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;