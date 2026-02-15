import Navbar from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Enterprise - Planora" },
    {
      name: "description",
      content:
        "Planora Enterprise solutions for large-scale architectural visualization deployments",
    },
  ];
};

const Enterprise = () => {
  return (
    <div className="enterprise-page">
      <Navbar />
      <main className="content-section">
        <div className="section-inner">
          <h1>Enterprise Solutions</h1>
          <p>
            Scalable, secure, and customizable solutions for large organizations
          </p>
          <div className="enterprise-grid">
            <div className="enterprise-card">
              <h3>Dedicated Infrastructure</h3>
              <p>
                Private, isolated rendering infrastructure for your organization
              </p>
            </div>
            <div className="enterprise-card">
              <h3>Advanced Security</h3>
              <p>Enterprise-grade security, compliance, and data protection</p>
            </div>
            <div className="enterprise-card">
              <h3>API Access</h3>
              <p>
                Full REST API access for seamless integration with your systems
              </p>
            </div>
            <div className="enterprise-card">
              <h3>Custom Integrations</h3>
              <p>Custom workflows and integrations tailored to your needs</p>
            </div>
            <div className="enterprise-card">
              <h3>24/7 Support</h3>
              <p>Dedicated support team available round the clock</p>
            </div>
            <div className="enterprise-card">
              <h3>SLA Guarantee</h3>
              <p>99.9% uptime SLA with performance guarantees</p>
            </div>
          </div>
          <div className="enterprise-cta">
            <h2>Ready for Enterprise?</h2>
            <p>Let's discuss how Planora can transform your business</p>
            <a href="mailto:sales@planora.com" className="btn btn--primary">
              Contact Sales
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Enterprise;
