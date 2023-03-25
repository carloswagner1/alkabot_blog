import React, { useState, useEffect } from 'react';
import { Card, Button, Offcanvas, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
import './PostCard.css';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

interface PostProps {
    post: Post;
}

const PostCard: React.FC<PostProps> = ({ post }) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [showComments, setShowComments] = useState(false);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(response => setComments(response.data))
            .catch(error => console.log(error));
    }, [post.id]);

    return (
        <Card border="dark" className="my-3 mx-auto" >
            <Card.Header >
                <h5>{post.title}</h5>
            </Card.Header>
            <Card.Body>
                <Card.Text>{post.body}</Card.Text>
                <Button onClick={() => setShowComments(true)}>Ver Comentários</Button>
            </Card.Body>

            <Offcanvas show={showComments} onHide={() => setShowComments(false)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Commentários</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup as="ol" numbered>
                        {comments.map(comment => (
                            <ListGroupItem as="li"
                            className="d-flex justify-content-between align-items-start"
                          >
                                <div key={comment.id} className="ms-2 me-auto">
                                    <p className='fw-bold'>{comment.name}</p>
                                    <p>{comment.body}</p>
                                    <p><small>{comment.email}</small></p>
                                </div>
                            </ListGroupItem>
                        ))}

                    </ListGroup>

                </Offcanvas.Body>
            </Offcanvas>
        </Card>
    );
};

export default PostCard;
