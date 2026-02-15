import Navbar from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Community - Planora" },
    {
      name: "description",
      content:
        "Join Planora's vibrant community of architects, designers, and creators",
    },
  ];
};

const Community = () => {
  return (
    <div className="community-page">
      <Navbar />
      <main className="content-section">
        <div className="section-inner">
          <h1>Community</h1>
          <p>
            Connect, collaborate, and share with architects and designers
            worldwide
          </p>
          <div className="community-grid">
            <div className="community-card">
              <h3>Showcase Your Work</h3>
              <p>
                Share your architectural visualizations and get feedback from
                the community
              </p>
            </div>
            <div className="community-card">
              <h3>Collaboration</h3>
              <p>Find collaborators and work together on projects seamlessly</p>
            </div>
            <div className="community-card">
              <h3>Learn & Grow</h3>
              <p>
                Access tutorials, webinars, and resources from industry experts
              </p>
            </div>
            <div className="community-card">
              <h3>Community Projects</h3>
              <p>Browse and contribute to community showcase projects</p>
            </div>
          </div>
          <div className="community-cta">
            <h2>Join the Community</h2>
            <p>Connect with thousands of creative professionals</p>
            <a href="/home" className="btn btn--primary">
              Get Started
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
