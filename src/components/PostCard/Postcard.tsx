import React, { useState, useEffect } from 'react';
import { Card, Button, Offcanvas, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import axios from 'axios';

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

interface User {
    id: number;
    name: string;
}

interface PostProps {
    post: Post;
    username: string;
}

const PostCard: React.FC<PostProps> = ({ post, username }) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(response => setComments(response.data))
            .catch(error => console.log(error));
    }, [post.id]);

    return (
        <Row className="g-4">
            <Col>
                <Card className="mb-4 bg-light " >
                    <Card.Header  key={post.id}>
                        <h5>{post.title}</h5>
                        <p><small>by {username}</small></p>
                    </Card.Header>
                    <Card.Body className="text-justify">
                        <Card.Text>{post.body}</Card.Text>
                        <Button onClick={() => setShowComments(true)}>Ver Comentários</Button>
                    </Card.Body>

                    <Offcanvas show={showComments} onHide={() => setShowComments(false)} placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Comentários</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="text-justify">
                            <ListGroup as="ol" numbered>
                                {comments.map(comment => (
                                    <ListGroupItem as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div key={comment.id} className="ms-2 me-auto text-wrap">
                                            <p>{comment.body}</p>
                                            <p><small><span className='fw-bold'>nome: </span>
                                             {comment.name}
                                             <br/><span className='fw-bold'>email: </span> {comment.email}</small></p>
                                        </div>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Card>
            </Col>
        </Row>
    );
};

export default PostCard;
