import Navbar from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "AI Architectural Visualization Features - Planora" },
    {
      name: "description",
      content:
        "Discover Planora's advanced AI-powered features to transform floor plans into photorealistic 3D architectural renderings instantly. Learn about our cloud-based visualization technology.",
    },
    {
      name: "keywords",
      content:
        "AI architectural visualization, 3D floor plan rendering, architectural visualization software, AI rendering",
    },
  ];
};

const About = () => {
  return (
    <div className="product-page">
      <Navbar />
      <main className="content-section">
        <div className="section-inner">
          <section className="intro-section hero-gradient">
            <div className="hero-content">
              <div className="hero-badge">Next-Gen Visualization</div>
              <h1 className="hero-title">
                Transform Blueprints into
                <span className="gradient-text"> Reality</span>
              </h1>
              <p className="hero-description">
                Experience the power of AI-driven architectural visualization.
                Transform your 2D floor plans into photorealistic 3D renderings
                in minutes, not months. Perfect for architects, designers, and
                real estate professionals.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">10K+</span>
                  <span className="stat-label">Visualizations</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2 min</span>
                  <span className="stat-label">Average Time</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Uptime</span>
                </div>
              </div>
            </div>
          </section>
          <section className="features-section">
            <div className="section-header">
              <h2>Powerful Features That Simply Work</h2>
              <p className="section-subtitle">
                Everything you need for stunning 3D architectural visualizations
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card card-hover">
                <h3>AI-Powered 3D Rendering</h3>
                <p>
                  Our advanced machine learning algorithms generate
                  photorealistic 3D architectural renders from your floor plans
                  in mere minutes. Experience instant visualization with
                  unprecedented quality.
                </p>
                <div className="feature-badge">Smart Technology</div>
              </div>
              <div className="feature-card card-hover">
                <h3>Universal Format Support</h3>
                <p>
                  JPG, PNG, and industry-standard formats up to 10MB. Upload
                  floor plans from any source—CAD exports, photography, or
                  sketches—and let AI handle the conversion.
                </p>
                <div className="feature-badge">All Formats</div>
              </div>
              <div className="feature-card card-hover">
                <h3>Enterprise Cloud Processing</h3>
                <p>
                  Leverage powerful cloud infrastructure for fast, reliable, and
                  scalable rendering. Process multiple projects simultaneously
                  without hardware limitations.
                </p>
                <div className="feature-badge">Cloud Based</div>
              </div>
              <div className="feature-card card-hover">
                <h3>Instant Collaboration & Sharing</h3>
                <p>
                  Share your photorealistic renderings with clients and teams
                  instantly. Generate shareable links and manage permissions
                  without complex workflows.
                </p>
                <div className="feature-badge">Real-time Sharing</div>
              </div>
            </div>
          </section>

          <section className="benefits-section">
            <div className="section-header">
              <h2>Why Architects Choose Planora</h2>
              <p className="section-subtitle">
                The complete solution for modern visualization
              </p>
            </div>
            <div className="benefits-list">
              <div className="benefit-item benefit-item-animated">
                <h3>Lightning-Fast Rendering</h3>
                <p>
                  Eliminate weeks of manual 3D modeling. Get presentation-ready
                  visualizations in minutes, accelerating your project
                  timelines.
                </p>
              </div>
              <div className="benefit-item benefit-item-animated">
                <h3>Photorealistic Quality</h3>
                <p>
                  Showcase your architectural designs with stunning,
                  photorealistic 3D renderings that clearly communicate your
                  vision and design intent.
                </p>
              </div>
              <div className="benefit-item benefit-item-animated">
                <h3>Zero Learning Curve</h3>
                <p>
                  Planora's intuitive platform requires no 3D modeling
                  experience. Upload, visualize, and share—it's that simple.
                </p>
              </div>
              <div className="benefit-item benefit-item-animated">
                <h3>Cost-Effective Solution</h3>
                <p>
                  Eliminate expensive software licenses and freelancer costs.
                  Get enterprise-grade visualization at a fraction of
                  traditional costs.
                </p>
              </div>
            </div>
          </section>

          <section className="use-cases-section">
            <div className="section-header">
              <h2>Built for Professionals</h2>
              <p className="section-subtitle">
                From architects to real estate experts, Planora empowers
                everyone
              </p>
            </div>
            <div className="use-cases-grid">
              <div className="use-case-card use-case-hover">
                <div className="use-case-number">01</div>
                <h3>Architecture Studios</h3>
                <p>
                  Accelerate project presentations with instant 3D
                  visualizations for client approvals and design iterations.
                </p>
              </div>
              <div className="use-case-card use-case-hover">
                <div className="use-case-number">02</div>
                <h3>Interior Designers</h3>
                <p>
                  Visualize interior layouts, furniture placement, and design
                  concepts. Reduce revision cycles with clear 3D renderings.
                </p>
              </div>
              <div className="use-case-card use-case-hover">
                <div className="use-case-number">03</div>
                <h3>Real Estate Professionals</h3>
                <p>
                  Create compelling property visualizations for marketing. Show
                  future renovations and design potential to buyers.
                </p>
              </div>
              <div className="use-case-card use-case-hover">
                <div className="use-case-number">04</div>
                <h3>Property Developers</h3>
                <p>
                  Generate accurate 3D renderings of floor plans for proposals,
                  permits, and investor presentations efficiently.
                </p>
              </div>
            </div>
          </section>

          <section className="cta-section cta-gradient">
            <div className="cta-content">
              <h2>Ready to Transform Your Designs?</h2>
              <p>
                Join thousands of architects and designers creating stunning 3D
                visualizations. Start today—no credit card required.
              </p>
              <div className="cta-buttons">
                <a href="/#upload" className="cta-button cta-primary">
                  Start Free Visualization
                </a>
              </div>
              <div className="cta-footer-text">
                ✓ Free tier included • ✓ No installation needed • ✓ Instant
                results
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
