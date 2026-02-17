import Navbar from "~/components/Navbar";
import { HeroSection } from "~/components/HomeSctions/HeroSection";
import { ProjectsSection } from "~/components/HomeSctions/ProjectsSection";
import { FeaturesSection } from "~/components/HomeSctions/FeaturesSection";
import { Footer } from "~/components/Footer";
import type { Route } from "./+types/home";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { createProject, getProjects } from "lib/puter.action";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Planora" },
    {
      name: "description",
      content:
        "Planora is an AI-powered architectural visualization platform that transforms 2D floor plans into photorealistic 3D renders in minutes",
    },
  ];
}

const Home = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<DesignItem[]>([]);
  const isCreatingProjectRef = useRef(false);

  const handleUploadComplete = async (base64Image: string) => {
    try {
      if (isCreatingProjectRef.current) return false;
      isCreatingProjectRef.current = true;
      const newId = Date.now().toString();
      const name = `Residence ${newId}`;

      const newItem = {
        id: newId,
        name,
        sourceImage: base64Image,
        renderedImage: undefined,
        timestamp: Date.now(),
      };

      const saved = await createProject({
        item: newItem,
        visibility: "private",
      });

      if (!saved) {
        console.error("Failed to create project");
        return false;
      }

      setProjects((prev) => [saved, ...prev]);

      navigate(`/visualizer/${newId}`, {
        state: {
          initialImage: saved.sourceImage,
          initialRendered: saved.renderedImage || null,
          name,
        },
      });

      return true;
    } finally {
      isCreatingProjectRef.current = false;
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      const items = await getProjects();

      setProjects(items);
    };

    fetchProjects();
  }, []);
  return (
    <div className="home">
      <Navbar />
      <HeroSection onUploadComplete={handleUploadComplete} />
      <ProjectsSection
        projects={projects}
        onProjectClick={(id) => navigate(`/visualizer/${id}`)}
      />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Home;
