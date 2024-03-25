import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="p-5">
        <Row className="align-items-center text-center">
            <h4 className='text-white'>Obrigado pela visita ♡</h4>
        </Row>
      </Container>
    </footer>
  )
}