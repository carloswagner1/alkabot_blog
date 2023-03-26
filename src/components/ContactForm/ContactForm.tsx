import { Button, Container, Form, Row } from "react-bootstrap";

export default function ContactForm() {
  return (
    <Container className="mb-4 bg-light p-3" >
      <Form >
        <Row className="p-4 pb-5">
          <Form.Text className="text-center fs-2">Contato</Form.Text>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Assunto</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-center">
            Insira a sua mensagem.
          </Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button className="" variant="primary">
            Enviar
          </Button>{" "}
          <Button className="" type="reset" variant="danger">
            Limpar
          </Button>{" "}
        </div>
      </Form>
    </Container>
  );
}
