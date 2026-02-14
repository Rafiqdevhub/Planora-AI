import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";

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
  return (
    <div className="home">
      <Navbar />
    </div>
  );
};

export default Home;
