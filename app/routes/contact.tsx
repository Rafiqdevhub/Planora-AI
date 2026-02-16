import React, { useRef } from "react";
import Navbar from "~/components/Navbar";
import { Footer } from "~/components/Footer";
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
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  if (!formspreeId) {
    console.error("VITE_FORMSPREE_ID environment variable is not set");
  }

  const [state, handleSubmit] = useForm(formspreeId || "");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="contact-page">
      <Navbar />
      <main className="content-section">
        <div className="section-inner">
          <section className="contact-hero">
            <h1>Get in Touch with Planora</h1>
            <p className="contact-subtitle">
              Have questions about AI architectural visualization? Our team is
              here to help. Reach out for support, sales inquiries, or
              partnership opportunities.
            </p>
          </section>

          <section className="contact-form-section">
            <div className="form-container">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>
                  Fill out the form below and we'll get back to you as soon as
                  possible
                </p>
              </div>

              {state.succeeded ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for reaching out. Our team will get back to you
                    within 2-4 business hours.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="btn btn--primary btn--large"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : state.errors && Object.keys(state.errors).length > 0 ? (
                <div className="form-error">
                  <div className="error-icon">✕</div>
                  <h3>Submission Failed</h3>
                  <p>
                    We encountered an error while processing your message.
                    Please check the form below and try again.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="btn btn--primary btn--large"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <div className="form-group">
                    <label htmlFor="type">Inquiry Type *</label>
                    <select
                      id="type"
                      name="type"
                      defaultValue="support"
                      required
                    >
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales & Pricing</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="feedback">Feedback & Comments</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
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
                      <label htmlFor="email">Email Address *</label>
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
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+92 300 1234567"
                      />
                      <ValidationError field="phone" errors={state.errors} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company/Organization</label>
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
                        <p className="alert-title">⚠️ Form Error</p>
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
                    className="btn btn--primary btn--large"
                    disabled={state.submitting}
                  >
                    <Send className="icon" />
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
