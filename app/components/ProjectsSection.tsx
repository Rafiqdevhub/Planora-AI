import { ArrowUpRight, Clock } from "lucide-react";

interface ProjectsSectionProps {
  projects: DesignItem[];
  onProjectClick: (id: string) => void;
}

export function ProjectsSection({
  projects,
  onProjectClick,
}: ProjectsSectionProps) {
  return (
    <section className="projects">
      <div className="section-inner">
        <div className="section-head">
          <div className="copy">
            <h2>Projects</h2>
            <p>
              Your latest work and shared community projects, all in one place.
            </p>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map(
            ({ id, name, renderedImage, sourceImage, timestamp }) => (
              <div
                key={id}
                className="project-card group"
                onClick={() => onProjectClick(id)}
              >
                <div className="preview">
                  <img src={renderedImage || sourceImage} alt="Project" />

                  <div className="badge">
                    <span>Community</span>
                  </div>
                </div>

                <div className="card-body">
                  <div>
                    <h3>{name}</h3>

                    <div className="meta">
                      <Clock size={12} />
                      <span>{new Date(timestamp).toLocaleDateString()}</span>
                      <span>By Planora Team</span>
                    </div>
                  </div>
                  <div className="arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
