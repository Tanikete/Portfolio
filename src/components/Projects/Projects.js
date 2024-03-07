import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Snapshot from "../../Assets/Projects/Snapshot.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import FlixHive from "../../Assets/Projects/FlixHive.png";
import MelodyStream from "../../Assets/Projects/MelodyStream.png";
import CottonCandy from "../../Assets/Projects/CottonCandy.png";
import bitsOfCode from "../../Assets/Projects/InfiniteLinks.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MelodyStream}
              isBlog={false}
              title="🎶 MelodyStream 🎶"
              description="Dive into a world of seamless tunes and musical wonders with MelodyStream. We are not just a music streaming platform; we are your gateway to a symphony of emotions, a playlist of memories, and a soundtrack to your life."
              ghLink="https://github.com/Tanikete/MelodyStream"
              demoLink="https://melody-stream.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="🌐 InfiniteLinks 🌐"
              description="InfiniteLink is not just a website; it's your digital universe of endless possibilities. Seamlessly blending social networking with boundless sharing, InfiniteLink is where connections thrive, ideas flourish, and creativity knows no bounds"
              ghLink="https://github.com/nazianah/infiniteLinks"
              demoLink="https://infinite-links.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FlixHive}
              isBlog={false}
              title="🍿 FlixHive 🎬"
              description="Dive into the world of entertainment like never before with FlixHive - your ultimate destination for movies and series. We've curated a hive of cinematic wonders, ready for you to explore, discover, and enjoy."
              ghLink="https://github.com/Tanikete/FlixHive"
              demoLink="https://flix-hive-37o4.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Snapshot}
              isBlog={false}
              title="📷 SnapShot 🌐"
              description="Step into a world where images speak louder than words. Snapshot is your gateway to a vast visual universe, where you can search, find, and capture the essence of any moment. Empower your imagination and embark on a journey of visual discovery."
              ghLink="https://github.com/Tanikete/snapshot"
              demoLink="https://snapshot-brown.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CottonCandy}
              isBlog={false}
              title="🍭 CottonCandy 🌈"
              description="Step into the whimsical world of CottonCandy, a digital haven crafted to add a touch of sweetness to your online experience. Here, every click is a sprinkle of joy, and every interaction is as delightful as your favorite treat."
              ghLink="https://github.com/Tanikete/Cotton-Candy"
              demoLink="https://cotton-candy-ten.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="🚀 PortFolio💡"
              description="Greetings! I'm Tanikete Sookeera, a passionate Web Developer dedicated to bringing ideas to life through the digital canvas. This portfolio is a glimpse into my journey of creativity, innovation, and relentless pursuit of excellence."
              ghLink="https://github.com/Tanikete/Portfolio"
              demoLink="https://portfolio-vert-kappa-18.vercel.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
