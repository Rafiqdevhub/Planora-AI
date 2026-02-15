import Navbar from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Product - Planora" },
    {
      name: "description",
      content:
        "Explore Planora's features and capabilities for AI-powered architectural visualization",
    },
  ];
};

const Product = () => {
  return (
    <div className="product-page">
      <Navbar />
      <main className="content-section">
        <div className="section-inner">
          <h1>Product Features</h1>
          <p>
            Planora provides cutting-edge AI-powered tools to transform your 2D
            floor plans into photorealistic 3D architectural visualizations.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>AI-Powered Rendering</h3>
              <p>
                Advanced machine learning algorithms generate photorealistic 3D
                renders in minutes
              </p>
            </div>
            <div className="feature-card">
              <h3>Multi-Format Support</h3>
              <p>Accept JPG, PNG, and other common image formats up to 10MB</p>
            </div>
            <div className="feature-card">
              <h3>Cloud-Based Processing</h3>
              <p>Fast, reliable rendering powered by cloud infrastructure</p>
            </div>
            <div className="feature-card">
              <h3>Easy Sharing</h3>
              <p>
                Share your renderings with clients and collaborators instantly
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
