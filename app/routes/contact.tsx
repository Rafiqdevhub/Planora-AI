import React, { useRef } from "react";
import Navbar from "~/components/Navbar";
import type { MetaFunction } from "react-router";
import { Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Planora - Get Support & Sales Information" },
    {
      name: "description",
      content:
        "Contact Planora's team for support, sales inquiries, or general questions about our AI architectural visualization platform. Multiple ways to reach us.",
    },
    {
      name: "keywords",
      content:
        "contact Planora, customer support, sales inquiry, architectural visualization support, AI rendering help",
    },
  ];
};

const Contact = () => {
  let formspreeId = import.meta.env.VITE_FORMSPREE_ID || "";

  if (formspreeId.includes("formspree.io/f/")) {
    formspreeId = formspreeId.split("formspree.io/f/")[1];
  }

  if (!formspreeId) {
    console.error(
      "VITE_FORMSPREE_ID environment variable is not set. Please add it to your .env.local file with your Formspree form ID.",
    );
  }

  const [state, handleSubmit] = useForm(formspreeId);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="contact-page">
      <Navbar />
      <main className="contact-main">
        <section className="contact-hero">
          <div className="contact-hero__inner">
            <span className="contact-badge">Planora Support</span>
            <h1>Tell us what you are building. We will help you ship it.</h1>
            <p className="contact-subtitle">
              Reach out for product guidance, pricing questions, or partnership
              opportunities. Our team answers most requests within the same
              business day.
            </p>
            <div className="contact-hero__meta">
              <div className="meta-card">
                <h4>Average response</h4>
                <p>2-4 business hours</p>
              </div>
              <div className="meta-card">
                <h4>Support coverage</h4>
                <p>Mon-Fri, 9:00-18:00 PKT</p>
              </div>
              <div className="meta-card">
                <h4>Dedicated success</h4>
                <p>Enterprise onboarding included</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-shell">
          <div className="contact-grid">
            <div className="contact-form-panel">
              <div className="form-header">
                <h2>Send a message</h2>
                <p>
                  Share a few details about your project. We will route you to
                  the right specialist.
                </p>
              </div>

              {state.succeeded ? (
                <div className="contact-state contact-state--success">
                  <div className="state-icon">OK</div>
                  <h3>Message sent</h3>
                  <p>
                    Thanks for reaching out. We will reply within 2-4 business
                    hours.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="btn btn--primary btn--lg btn--full"
                  >
                    Send another message
                  </button>
                </div>
              ) : state.errors && Object.keys(state.errors).length > 0 ? (
                <div className="contact-state contact-state--error">
                  <div className="state-icon">Error</div>
                  <h3>Submission failed</h3>
                  <p>
                    We could not process your message. Please review the form
                    and try again.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="btn btn--primary btn--lg btn--full"
                  >
                    Try again
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <div className="form-group">
                    <label htmlFor="type">Inquiry type *</label>
                    <select
                      id="type"
                      name="type"
                      defaultValue="support"
                      required
                    >
                      <option value="support">Technical support</option>
                      <option value="sales">Sales and pricing</option>
                      <option value="partnership">Partnership inquiry</option>
                      <option value="feedback">Feedback and comments</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ali Ahmed"
                        required
                      />
                      <ValidationError field="name" errors={state.errors} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="ali123@example.com"
                        required
                      />
                      <ValidationError field="email" errors={state.errors} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+92 300 1234567"
                      />
                      <ValidationError field="phone" errors={state.errors} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company or studio</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Your company name"
                      />
                      <ValidationError field="company" errors={state.errors} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      required
                    />
                    <ValidationError field="subject" errors={state.errors} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    ></textarea>
                    <ValidationError field="message" errors={state.errors} />
                  </div>

                  {state.errors &&
                    state.errors.getFormErrors &&
                    state.errors.getFormErrors().length > 0 && (
                      <div className="form-alert form-alert-error">
                        <p className="alert-title">Form error</p>
                        {state.errors
                          .getFormErrors()
                          .map((error: any, index: number) => (
                            <p key={index} className="alert-message">
                              {error.message}
                            </p>
                          ))}
                      </div>
                    )}

                  <button
                    type="submit"
                    className="btn btn--primary btn--lg btn--full"
                    disabled={state.submitting}
                  >
                    <Send className="icon" />
                    {state.submitting ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </div>

            <aside className="contact-info-panel">
              <div className="contact-info-card">
                <h3>Talk to a specialist</h3>
                <p>
                  From floor-plan intake to final render delivery, we help you
                  make every project client-ready.
                </p>
                <div className="contact-links">
                  <div>
                    <span>Sales</span>
                    <a href="mailto:sales@planora.ai">sales@planora.ai</a>
                  </div>
                  <div>
                    <span>Support</span>
                    <a href="mailto:support@planora.ai">support@planora.ai</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <h3>Visit our studios</h3>
                <p>We operate across three design hubs.</p>
                <ul className="contact-list">
                  <li>Lahore, PK</li>
                  <li>Dubai, AE</li>
                  <li>London, UK</li>
                </ul>
              </div>

              <div className="contact-info-card contact-info-card--accent">
                <h3>Fast onboarding</h3>
                <p>
                  Get a dedicated success manager and a workflow template
                  tailored to your studio.
                </p>
                <button className="btn btn--secondary btn--full">
                  Book a walkthrough
                </button>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
