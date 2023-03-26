import { Col, Container, Row } from "react-bootstrap";
import AboutCard from "../../components/AboutCard/AboutCard";
import AboutPageTag from "../../components/Tags/AboutPageTag";



export default function AboutPage() {
  return (
      <Container className="mt-5 pt-5 contact-page">
        <Row>
          <Col sm={2}>
            <AboutPageTag />
          </Col>
          <Col sm={8}>
            <AboutCard />
          </Col>
        </Row>
      </Container>
  );
}
