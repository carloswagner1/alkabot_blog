import { Card } from "react-bootstrap";
import './AboutCard.scss';

export default function AboutCard() {
    return (
        <>
            <Card>
                <Card.Header as="h5">Detalhes do Projeto</Card.Header>
                <Card.Body className="text-justify">
                    <Card.Title>AlkaBot Blog</Card.Title>
                    <Card.Text  className="about">
                    CENÁRIO 1 – FRONT END
                    <p>A equipe recebeu uma demanda para  desenvolver um front-end para uma API RESTful. No cenário proposto, a interface deve exibir posts de um blog e, ao clicar em um post, os comentários associados.</p>
                    SUA TAREFA
                    <p>
                    Você ficou responsável pela demanda e sua tarefa é projetar uma interface para atender as necessidades. </p>


                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}