import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactTag from "../../components/Tags/ContactPageTag";


export default function ContactPage() {
  return (
      <Container className="mt-5 pt-5 contact-page">
        <Row>
          <Col sm={2}>
            <ContactTag />
          </Col>
          <Col sm={8}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
  );
}
