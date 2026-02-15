import Navbar from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Pricing - Planora" },
    {
      name: "description",
      content:
        "Explore Planora's flexible pricing plans for individuals and enterprises",
    },
  ];
};

const Pricing = () => {
  return (
    <div className="pricing-page">
      <Navbar />
      <main className="content-section">
        <div className="section-inner">
          <h1>Simple, Transparent Pricing</h1>
          <p>Choose the perfect plan for your needs</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">
                $29<span>/month</span>
              </div>
              <ul className="features">
                <li>Up to 10 projects</li>
                <li>Basic support</li>
                <li>Standard resolution renders</li>
                <li>Community access</li>
              </ul>
              <button className="btn btn--primary">Get Started</button>
            </div>
            <div className="pricing-card featured">
              <h3>Professional</h3>
              <div className="price">
                $99<span>/month</span>
              </div>
              <ul className="features">
                <li>Unlimited projects</li>
                <li>Priority support</li>
                <li>High resolution renders</li>
                <li>Collaboration tools</li>
                <li>Custom branding</li>
              </ul>
              <button className="btn btn--primary">Get Started</button>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
              <ul className="features">
                <li>Everything in Pro</li>
                <li>24/7 dedicated support</li>
                <li>4K renders</li>
                <li>API access</li>
                <li>SLA guarantee</li>
              </ul>
              <button className="btn btn--outline">Contact Sales</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
