import { ListGroup } from "react-bootstrap";
export default function ContactTag() {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        Sobre o projeto
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Detalhes do Projeto
      </ListGroup.Item>
    </ListGroup>
  );
}
