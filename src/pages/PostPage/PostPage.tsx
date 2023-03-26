import { useState, useEffect } from 'react';
import { Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap';
import axios from 'axios';
import PostCard from '../../components/PostCard/Postcard';
import PostPageTag from '../../components/Tags/PostPageTag';
import SearchInput from '../../components/SearchInput/SearchInput';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
  username: string;
}

export default function PostPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  const getUsername = (userId: number) => {
    const user = users.find(u => u.id === userId);
    return user ? user.username : '';
  }

  const filteredPosts = posts.filter(post => {
    const username = getUsername(post.userId).toLowerCase();
    return username.includes(searchValue.toLowerCase());
  });

  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col sm={2}>
          <PostPageTag />
        </Col>
        <Col sm={8}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Buscar por autor"
              value={searchValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}

              aria-label="Buscar"
              aria-describedby="basic-addon1"
            />

            <InputGroup.Text id="basic-addon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </InputGroup.Text>
          </InputGroup>
          {filteredPosts.map(post => (
            <PostCard key={post.id} post={post} username={getUsername(post.userId)} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
