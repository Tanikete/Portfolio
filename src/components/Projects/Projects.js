import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Snapshot from "../../Assets/Projects/Snapshot.png";
import emotion from "../../Assets/Projects/emotion.png";
import FlixHive from "../../Assets/Projects/FlixHive.png";
import MelodyStream from "../../Assets/Projects/MelodyStream.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://InfiniteLinks.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
