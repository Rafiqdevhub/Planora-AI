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

        <p>Introducing Planora 1.0</p>
      </div>

      <h1>Build beautiful spaces at the speed of thought with Planora</h1>

      <p className="subtitle">
        Planora is an AI-powered architectural visualization platform that
        transforms 2D floor plans into photorealistic 3D renders in minutes.
      </p>

      <div className="actions">
        <a href="#upload" className="cta">
          Start Building <ArrowRight className="icon" />
        </a>
      </div>
      <div id="upload" className="upload-shell">
        <div className="grid-overlay" />

        <div className="upload-card">
          <div className="upload-head">
            <div className="upload-icon">
              <Layers className="icon" />
            </div>

            <h3>Upload your floor plan</h3>
            <p>Supports JPG, PNG, formats up to 10MB</p>
          </div>

          <Upload onComplete={onUploadComplete} />
        </div>
      </div>
    </section>
  );
}
