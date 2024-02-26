import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="p-5">
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h2 className='text-white fw-bold'>Portfólio</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/natanael-martins-8019731a2/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/natanaelmartins"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/natan_martins7"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}