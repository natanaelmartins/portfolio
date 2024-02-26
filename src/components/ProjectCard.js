import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={projectUrl} className="link-light">
        <div className="proj-imgbx">
          <img src={imgUrl} style={{ aspectRatio: "2/2" }} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
