import { Sparkles, Zap, Palette, Share2, Shield, Clock } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Rendering",
      description:
        "Advanced AI algorithms transform your 2D floor plans into stunning photorealistic 3D architectural visualizations instantly.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Generate professional-quality 3D renders in minutes, not days. Accelerate your design workflow dramatically.",
    },
    {
      icon: Palette,
      title: "Customizable Styles",
      description:
        "Choose from multiple architectural styles and interior design themes to match your vision perfectly.",
    },
    {
      icon: Share2,
      title: "Easy Collaboration",
      description:
        "Share your projects with clients and team members. Collaborate seamlessly with real-time updates.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Your designs are protected with enterprise-grade security. Maintain full control over your intellectual property.",
    },
    {
      icon: Clock,
      title: "Version History",
      description:
        "Track all iterations of your designs. Never lose work with automatic version control and history.",
    },
  ];

  return (
    <section className="content-section">
      <div className="section-inner">
        <div className="section-head">
          <div className="copy">
            <h2>Powerful Features for Modern Architecture</h2>
            <p>
              Everything you need to bring your architectural visions to life
              with cutting-edge AI technology.
            </p>
          </div>
        </div>

        <div className="features-grid">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="feature-card">
              <div className="feature-icon">
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
