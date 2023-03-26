import { Button, Container, Form, Row } from "react-bootstrap";

/*
Observação: o formulário de contato não tem o backend eis que fora do escopo do projeto, mas está funcional utilizando o recurso do site https://formsubmit.co/.
*/
export default function ContactForm() {
  return (
    <Container className="mb-4 bg-light p-3" >

      <Form className="contact-form" action="https://formsubmit.co/4235769973a0867c16074128bcdc624d" target="_blank" method="POST">
        <Row className="p-4 pb-5">
          <Form.Text className="text-center fs-2">Contato</Form.Text>
        </Row>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label >Email</Form.Label>
          <Form.Control type="email" placeholder="Insira o seu email" name="email" id="email"
          required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="forMessage">
          <Form.Label className="text-center">
            Mensagem
          </Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Insira a messagem" name="message" id="message" required/>
        </Form.Group>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Button className="" variant="primary" type='submit'>
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
