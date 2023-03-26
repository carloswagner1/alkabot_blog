import { ListGroup } from "react-bootstrap";
export default function ContactTag() {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        Home
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Meus Posts
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Comentários
      </ListGroup.Item>
    </ListGroup>
  );
}
