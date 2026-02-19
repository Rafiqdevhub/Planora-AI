import Navbar from "~/components/Navbar";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "AI Architectural Visualization Pricing Plans - Planora" },
    {
      name: "description",
      content:
        "Choose the perfect Planora pricing plan for your architectural visualization needs. Affordable plans for individuals, professionals, and enterprises. Start rendering 3D floor plans in minutes.",
    },
    {
      name: "keywords",
      content:
        "architectural visualization pricing, 3D rendering software cost, AI floor plan pricing, affordable 3D visualization",
    },
  ];
};
const Pricing = () => {
  return (
    <div className="pricing-page">
      <Navbar />
      <main className="pricing-main">
        <section className="pricing-hero">
          <div className="pricing-hero__inner">
            <span className="pricing-badge">Plans for every studio</span>
            <h1>AI renders that look like a $10K shoot</h1>
            <p className="pricing-subtitle">
              Launch photorealistic architectural visuals in minutes. Every plan
              includes the core AI engine, lighting presets, and
              floor-plan-to-3D conversion.
            </p>
            <div className="pricing-cta">
              <button className="btn btn--primary btn--lg">
                Start Free Trial
              </button>
              <button className="btn btn--secondary btn--lg">
                See Sample Renders
              </button>
            </div>
            <div className="pricing-highlights">
              <div className="highlight-card">
                <h4>120+ studios onboarded</h4>
                <p>Trusted by boutique firms and global teams.</p>
              </div>
              <div className="highlight-card">
                <h4>Fastest output</h4>
                <p>From upload to render in under 8 minutes.</p>
              </div>
              <div className="highlight-card">
                <h4>Zero setup</h4>
                <p>No downloads. Work in any browser.</p>
              </div>
            </div>
            <p className="pricing-features">
              No setup fees • Cancel anytime • Free 3D renders on signup
            </p>
          </div>
        </section>

        <section className="pricing-shell">
          <div className="pricing-toggle">
            <span className="toggle-label is-active">Monthly</span>
            <div className="toggle-pill">
              <span className="toggle-dot"></span>
            </div>
            <span className="toggle-label">Annual (save 20%)</span>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-card__top">
                <h3>Starter</h3>
                <p className="plan-description">
                  Perfect for architects exploring AI visualization.
                </p>
                <div className="price">
                  $29<span>/month</span>
                </div>
                <p className="price-note">Billed monthly • 7-day free trial</p>
              </div>
              <ul className="features">
                <li>Up to 10 architectural projects</li>
                <li>Standard resolution renders (1080p)</li>
                <li>Email support</li>
                <li>Community forum access</li>
                <li>Basic export options</li>
              </ul>
              <div className="pricing-card__foot">
                <button className="btn btn--primary btn--full">
                  Start Free Trial
                </button>
                <p className="btn-note">No credit card required</p>
              </div>
            </div>

            <div className="pricing-card featured">
              <div className="badge">MOST POPULAR</div>
              <div className="pricing-card__top">
                <h3>Professional</h3>
                <p className="plan-description">
                  Ideal for design studios shipping client-ready visuals.
                </p>
                <div className="price">
                  $99<span>/month</span>
                </div>
                <p className="price-note">Billed monthly • Save 20% annually</p>
              </div>
              <ul className="features">
                <li>Unlimited architectural projects</li>
                <li>High resolution renders (up to 4K)</li>
                <li>Priority email and chat support</li>
                <li>Advanced collaboration tools</li>
                <li>Custom branding on renders</li>
                <li>Team workspace (up to 5 members)</li>
                <li>Batch rendering (20 projects/month)</li>
              </ul>
              <div className="pricing-card__foot">
                <button className="btn btn--primary btn--full">
                  Start Free Trial
                </button>
                <p className="btn-note">Most popular for design studios</p>
              </div>
            </div>

            <div className="pricing-card">
              <div className="pricing-card__top">
                <h3>Enterprise</h3>
                <p className="plan-description">
                  For teams with large portfolios and custom workflows.
                </p>
                <div className="price">Custom</div>
                <p className="price-note">Volume discounts available</p>
              </div>
              <ul className="features">
                <li>Everything in Professional plan</li>
                <li>24/7 dedicated account support</li>
                <li>Ultra-high resolution renders (8K)</li>
                <li>REST API and webhooks</li>
                <li>99.9% SLA guarantee</li>
                <li>Custom integrations</li>
                <li>Advanced team management</li>
              </ul>
              <div className="pricing-card__foot">
                <button className="btn btn--outline btn--full">
                  Contact Sales Team
                </button>
                <p className="btn-note">Schedule a personalized demo</p>
              </div>
            </div>
          </div>

          <div className="pricing-value">
            <div className="value-card">
              <h4>Design-ready outputs</h4>
              <p>Deliver stills, animations, and moodboards in one workflow.</p>
            </div>
            <div className="value-card">
              <h4>Flexible rendering styles</h4>
              <p>Pick modern, minimal, or cinematic presets per project.</p>
            </div>
            <div className="value-card">
              <h4>Collaboration built-in</h4>
              <p>Invite clients to review, comment, and approve in minutes.</p>
            </div>
          </div>
        </section>

        <section className="pricing-faq">
          <div className="pricing-faq__inner">
            <h2>Questions, answered</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>Can I switch plans anytime?</h4>
                <p>
                  Yes. Upgrade or downgrade without losing projects or assets.
                </p>
              </div>
              <div className="faq-item">
                <h4>What file types do you accept?</h4>
                <p>
                  Upload PDFs, CAD exports, or sketches. Our AI handles messy
                  inputs.
                </p>
              </div>
              <div className="faq-item">
                <h4>Do you offer team onboarding?</h4>
                <p>
                  Enterprise customers get guided onboarding and workflow
                  templates.
                </p>
              </div>
              <div className="faq-item">
                <h4>Is my data secure?</h4>
                <p>
                  We use encryption in transit and at rest with strict access
                  controls.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
