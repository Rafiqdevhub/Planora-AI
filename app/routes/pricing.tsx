import Navbar from "~/components/Navbar";
import { Footer } from "~/components/Footer";
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
      <main className="content-section">
        <div className="section-inner">
          <section className="pricing-header">
            <h1>Affordable Pricing for AI Architectural Visualization</h1>
            <p className="pricing-subtitle">
              Choose the perfect plan to transform your floor plans into
              photorealistic 3D renderings. All plans include our core AI
              visualization engine.
            </p>
            <p className="pricing-features">
              No setup fees • Cancel anytime • Free 3D renders on signup
            </p>
          </section>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <p className="plan-description">
                Perfect for architects exploring AI visualization
              </p>
              <div className="price">
                $29<span>/month</span>
              </div>
              <p className="price-note">Billed monthly • 7-day free trial</p>
              <ul className="features">
                <li>✓ Up to 10 architectural projects</li>
                <li>✓ Standard resolution 3D renders (up to 1080p)</li>
                <li>✓ Email support</li>
                <li>✓ Community forum access</li>
                <li>✓ Basic export options</li>
              </ul>
              <button className="btn btn--primary">Start Free Trial</button>
              <p className="btn-note">No credit card required</p>
            </div>

            <div className="pricing-card featured">
              <div className="badge">MOST POPULAR</div>
              <h3>Professional</h3>
              <p className="plan-description">
                Ideal for design studios and professionals
              </p>
              <div className="price">
                $99<span>/month</span>
              </div>
              <p className="price-note">Billed monthly • Save 20% annually</p>
              <ul className="features">
                <li>✓ Unlimited architectural projects</li>
                <li>✓ High resolution 3D renders (up to 4K)</li>
                <li>✓ Priority email & chat support</li>
                <li>✓ Advanced collaboration tools</li>
                <li>✓ Custom branding on renders</li>
                <li>✓ Team workspace (up to 5 members)</li>
                <li>✓ Batch rendering (20 projects/month)</li>
              </ul>
              <button className="btn btn--primary">Start Free Trial</button>
              <p className="btn-note">Most popular for design studios</p>
            </div>

            <div className="pricing-card">
              <h3>Enterprise</h3>
              <p className="plan-description">
                For large organizations with custom needs
              </p>
              <div className="price">Custom</div>
              <p className="price-note">Volume discounts available</p>
              <ul className="features">
                <li>✓ Everything in Professional plan</li>
                <li>✓ 24/7 dedicated account support</li>
                <li>✓ Ultra-high resolution renders (8K)</li>
                <li>✓ REST API & webhooks</li>
                <li>✓ 99.9% SLA guarantee</li>
                <li>✓ Custom integrations</li>
                <li>✓ Advanced team management</li>
              </ul>
              <button className="btn btn--outline">Contact Sales Team</button>
              <p className="btn-note">Schedule a personalized demo</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
