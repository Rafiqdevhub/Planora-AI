import { ArrowRight, Layers } from "lucide-react";
import Upload from "~/components/Upload";

interface HeroSectionProps {
  onUploadComplete: (
    base64Image: string,
  ) => Promise<boolean | void> | boolean | void;
}

export function HeroSection({ onUploadComplete }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="announce">
        <div className="dot">
          <div className="pulse"></div>
        </div>

        <p>Introducing Planora 1.0 - AI-Powered Architectural Visualization</p>
      </div>

      <h1>
        AI Architectural Visualization: Transform Floor Plans to 3D Renders in
        Minutes
      </h1>

      <p className="subtitle">
        Planora is an advanced AI-powered architectural visualization platform
        that instantly transforms 2D floor plans into stunning photorealistic 3D
        architectural renderings. Visualize your architectural designs, interior
        layouts, and building concepts with cutting-edge AI technology in just
        minutes.
      </p>

      <div className="actions">
        <a href="#upload" className="cta">
          Visualize Your Floor Plan <ArrowRight className="icon" />
        </a>
      </div>
      <div id="upload" className="upload-shell">
        <div className="grid-overlay" />

        <div className="upload-card">
          <div className="upload-head">
            <div className="upload-icon">
              <Layers className="icon" />
            </div>

            <h3>Upload Your Floor Plan for 3D Visualization</h3>
            <p>
              Convert your architectural floor plans to photorealistic 3D
              renders. Supports JPG, PNG formats up to 10MB - AI-powered instant
              rendering
            </p>
          </div>

          <Upload onComplete={onUploadComplete} />
        </div>
      </div>
    </section>
  );
}
