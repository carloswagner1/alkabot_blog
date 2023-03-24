import React, { useState, useEffect } from 'react';
import { Card, Button, Offcanvas } from 'react-bootstrap';
import axios from 'axios';

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
        <Card className="my-3" >
            <Card.Header >
                <h5>{post.title}</h5>
            </Card.Header>
            <Card.Body>
                <Card.Text>{post.body}</Card.Text>
                <Button onClick={() => setShowComments(true)}>View Comments</Button>
            </Card.Body>

            <Offcanvas show={showComments} onHide={() => setShowComments(false)} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Comments</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {comments.map(comment => (
                        <div key={comment.id} className="my-3">
                            <h6>{comment.name}</h6>
                            <p>{comment.body}</p>
                            <p><small>{comment.email}</small></p>
                        </div>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
        </Card>
    );
};

export default PostCard;
