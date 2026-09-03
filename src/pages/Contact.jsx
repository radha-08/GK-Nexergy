import { useState } from "react";
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
  User,
  MessageSquare,
  Send,
} from "lucide-react";
import SEO from "../components/SEO";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!formData.email.trim()) {
      setError("Please enter your email address");
      return;
    }
    if (!formData.message.trim()) {
      setError("Please enter your message");
      return;
    }
    setError("");

    const text = `*New Inquiry from Website*\n\n*Name:* ${formData.name.trim()}\n*Email:* ${formData.email.trim()}\n*Message:* ${formData.message.trim()}`;
<<<<<<< HEAD
    const whatsappUrl = `https://wa.me/919704585960?text=${encodeURIComponent(text)}`;
=======
    const whatsappUrl = `https://wa.me/919104580900?text=${encodeURIComponent(text)}`;
>>>>>>> 3ae9bc15a1dc980270aef1b1fab94c3cbf8f9929
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

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
        <p>Send us a direct WhatsApp message or choose from our channels below.</p>
      </section>

<<<<<<< HEAD
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
              <a href="tel:+919704585960" className="phone-link">
                +919704585960
              </a>
              <a
                href="https://wa.me/919704585960?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses%20and%20programs."
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
              <a href="mailto:gknexergy@gmail.com" className="email-link">
                gknexergy@gmail.com 
              </a>
            </div>
          </article>

        </div>
      </section>

      {/* WhatsApp Fast Contact Form */}
=======
      {/* WhatsApp Fast Contact Form at Top */}
>>>>>>> 3ae9bc15a1dc980270aef1b1fab94c3cbf8f9929
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-header">
            <div className="contact-form-badge">
              <MessageCircle size={15} />
              <span>DIRECT WHATSAPP INQUIRY</span>
            </div>
            <h2>Quick Inquiry Form</h2>
            <p>
              Fill out the form below to initiate an immediate chat with our team on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-whatsapp-form">
            {error && <div className="contact-form-error">{error}</div>}

            <div className="form-grid-2">
              <div className="form-group">
                <label htmlFor="contact-name">
                  Your Name <span className="req">*</span>
                </label>
                <div className="input-wrap">
                  <User size={18} className="input-icon" />
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">
                  Email Address <span className="req">*</span>
                </label>
                <div className="input-wrap">
                  <Mail size={18} className="input-icon" />
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">
                Your Message <span className="req">*</span>
              </label>
              <div className="input-wrap textarea-wrap">
                <MessageSquare size={18} className="input-icon textarea-icon" />
                <textarea
                  id="contact-message"
                  rows="4"
                  placeholder="How can we help you? Describe your requirements, questions, or learning goals..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="form-action-row">
              <button type="submit" className="whatsapp-submit-btn">
                <MessageCircle size={19} />
                <span>Send via WhatsApp</span>
                <Send size={16} className="btn-send-arrow" />
              </button>
<<<<<<< HEAD
=======
              
>>>>>>> 3ae9bc15a1dc980270aef1b1fab94c3cbf8f9929
            </div>
          </form>
        </div>
      </section>

<<<<<<< HEAD
=======
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
              <a href="mailto:gknexergy@gmail.com" className="email-link">
                gknexergy@gmail.com 
              </a>
            </div>
          </article>


        </div>
      </section>

>>>>>>> 3ae9bc15a1dc980270aef1b1fab94c3cbf8f9929
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
<<<<<<< HEAD

=======
>>>>>>> 3ae9bc15a1dc980270aef1b1fab94c3cbf8f9929
    </div>
  );
};

<<<<<<< HEAD
export default Contact;
=======
export default Contact;
>>>>>>> 3ae9bc15a1dc980270aef1b1fab94c3cbf8f9929
