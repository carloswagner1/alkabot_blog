import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './AboutCard.scss';

export default function AboutCard() {
    return (
        <>
            <Card>
                <Card.Header as="h5">Detalhes do Projeto e da Solução</Card.Header>
                <Card.Body className="text-justify">
                    <Card.Title>AlkaBot Blog</Card.Title>
                    <Card.Text  className="about">
                    CENÁRIO 1 – FRONT END
                    <p>A equipe recebeu uma demanda para  desenvolver um front-end para uma API RESTful. No cenário proposto, a interface deve exibir posts de um blog e, ao clicar em um post, os comentários associados.</p>
                    SUA TAREFA
                    <p>
                    Você ficou responsável pela demanda e sua tarefa é projetar uma interface para atender as necessidades. Os seguintes serviços estão disponíveis: </p>
                    <p>● Listagem de posts:
                        <Link to={"https://jsonplaceholder.typicode.com/posts"} target="_blank" > https://jsonplaceholder.typicode.com/posts</Link>
                    </p>
                    <p>● Listagem de comentários de um post:
                        <Link to={"https://jsonplaceholder.typicode.com/posts"} target="_blank"> https://jsonplaceholder.typicode.com/posts</Link>
                    </p>
                    <p>● Listagem de usuários:
                        <Link to={"https://jsonplaceholder.typicode.com/users"} target="_blank"> https://jsonplaceholder.typicode.com/users</Link>
                    </p>
                    <p>● Detalhes de um usuário:
                        <Link to={"https://jsonplaceholder.typicode.com/users/[ID]"} target="_blank"> https://jsonplaceholder.typicode.com/users/[ID]</Link>
                    </p>
                    SOLUÇÃO
                    <p>
                        O projeto foi desenvolvido em React com Typescript, utilizando o Bootstrap Framework (react-bootstrap). Para a integração com as API's disponibilizadas, foi utilizada a biblioteca Axios. O logo foi desenvolvido no GIMP.
                    </p>
                    <p>
                        O blog é constituído de três páginas: a página 'Home' (onde apresento a solução objetivo das tarefa), a página 'Sobre o Projeto' (onde descrevo o problema, os serviços disponibilizados, a descrição da solução e as dificuldades enfrentadas) e uma página de contato (onde é possível encaminhar mensagem para meu email pessoa com críticas, sugestões, elogios).
                    </p>
                    <p>
                        Observação: o formulário de contato não tem o backend eis que fora do escopo do projeto, mas está funcional utilizando o recurso do site https://formsubmit.co/.
                    </p>
                    DIFICULDADES APRESENTADAS
                    <p>
                        Tentei implementar a pesquisa por assunto na página de postagens, mas como os dados são mocados, com assuntos aleatórios, preferi fazer a implemantação da pesquisa por autor do texto, já que depois de um certo tempo ter conseguido exibir o nome do autor cruzando os dados obtidos nos serviços disponibilizados.
                        Mas como é mais importante o "feito que o perfeito", preferi investir no entregável.
                        Em relação à imagem de fundo, a tela de postagem e a tela sobre o projeto renderam uma pesquisa para achar uma solução que contemplasse a rolagem sem perder a imagem e que não causasse conflito com a página de contatos. Por isto a implementação do MasterPage.scss.
                    </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}