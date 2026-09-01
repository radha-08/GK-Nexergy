import {
  Phone,
  Mail,
  Briefcase,
  Building2,
  MessageCircle,
  Clock,
  MapPin,
  Globe,
  Zap,
} from "lucide-react";
import SEO from "../components/SEO";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <SEO
        title="Contact | GK Nexergy"
        description="Get in touch with GK Nexergy. Call, WhatsApp, or email us for courses, partnerships, career guidance, and business solutions."
      />

      {/* Hero */}
      <section className="contact-hero">
        {/* <span className="contact-label">CONTACT</span> */}
        <h1>Let’s start a conversation.</h1>
        <p>Choose the best way to reach us.</p>
      </section>

      {/* Contact Cards */}
      <section className="contact-cards-section">
        <div className="contact-card-grid">

          <article className="contact-card">
            <div className="card-top">
              <div className="card-icon blue">
                <Phone size={20} strokeWidth={2.2} />
              </div>
              <span className="card-eyebrow">Immediate Support</span>
            </div>
            <h3>Call or WhatsApp</h3>
            <p>
              Speak with our team about courses, mentorship, admissions, or the next step in your learning journey.
            </p>
            <div className="card-footer">
              <a href="tel:+919104580900" className="phone-link">
                +91 91045 80900
              </a>
              <a
                href="https://wa.me/919104580900"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
          </article>

          <article className="contact-card">
            <div className="card-top">
              <div className="card-icon indigo">
                <Mail size={20} strokeWidth={2.2} />
              </div>
              <span className="card-eyebrow">General Inquiries</span>
            </div>
            <h3>Email us</h3>
            <p>
              For questions about programs, partnerships, college tie-ups, or any information you would like in writing.
            </p>
            <div className="card-footer">
              <a href="mailto:contact@gknexergy.com" className="email-link">
                contact@gknexergy.com
              </a>
            </div>
          </article>

          <article className="contact-card">
            <div className="card-top">
              <div className="card-icon violet">
                <Briefcase size={20} strokeWidth={2.2} />
              </div>
              <span className="card-eyebrow">Human Resources</span>
            </div>
            <h3>Career restart support</h3>
            <p>
              Get one-to-one guidance for returning to work, upgrading your skills, and choosing a practical technology path.
            </p>
            <div className="card-footer">
              <span className="card-meta">Dedicated mentor guidance</span>
            </div>
          </article>

          <article className="contact-card">
            <div className="card-top">
              <div className="card-icon cyan">
                <Building2 size={20} strokeWidth={2.2} />
              </div>
              <span className="card-eyebrow">Training & Technology</span>
            </div>
            <h3>Business solutions</h3>
            <p>
              Discover corporate training, software development, AI, cloud, data engineering and digital transformation.
            </p>
            <div className="card-footer">
              <span className="card-meta">25+ years of IT leadership</span>
            </div>
          </article>

        </div>
      </section>

      {/* Response Hours */}
      <section className="response-hours-wrapper">
        <div className="response-hours-container">
          <div className="response-hours-glow" />

          <div className="response-hours-icon-circle">
            <Clock size={22} strokeWidth={2} />
          </div>

          <div className="response-hours-badge">
            <span className="response-hours-pulse" />
            RESPONSE HOURS & AVAILABILITY
          </div>

          <h2 className="response-hours-title">Monday – Saturday</h2>
          <p className="response-hours-time">9:00 AM – 7:00 PM IST</p>

          <div className="response-hours-meta-row">
            <div className="response-hours-pill">
              <MapPin size={13} />
              India Headquarters
            </div>
            <div className="response-hours-pill">
              <Globe size={13} />
              Worldwide Remote Support
            </div>
            <div className="response-hours-pill">
              <Zap size={13} />
              Fast Response Across Time Zones
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;