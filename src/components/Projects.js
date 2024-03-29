import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Recriando a UI do Twitter",
      description: "Projeto front-end usando React.js",
      imgUrl: projImg1,
      projectUrl: "https://twitter-clone-natanael.netlify.app",
    },
    {
      title: "Criando um joguinho",
      description: "Baseado no famoso joguinho do dinossauro do Google Chrome (usando HTML, CSS e JavaScript puro).",
      imgUrl: projImg2,
      projectUrl: "https://capy-game.netlify.app",
    },
    {
      title: "Gerenciador de tarefas",
      description: "Aplicação utilitária que simula um quadro kanban para organizar uma lista de tarefas. Usando Spring Boot e Thymeleaf.",
      imgUrl: projImg3,
      projectUrl: "https://kanban-diary.azurewebsites.net/home",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projetos</h2>
                  <p className="text-white fw-bold">Esses são alguns dos meus projetos de aprendizado:</p>

                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
