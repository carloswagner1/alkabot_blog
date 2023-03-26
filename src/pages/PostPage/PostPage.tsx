import { useState, useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import axios from 'axios';
import PostCard from '../../components/PostCard/Postcard';
import PostPageTag from '../../components/Tags/PostPageTag';
import SearchImput from '../../components/SearchInput/SearchInput';



interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (

      <Container className="mt-5 pt-5 ">
        <Row>
          <Col sm={2}>
            <PostPageTag />
          </Col>
          <Col sm={8}>
            <SearchImput />
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </Col>
        </Row>
      </Container>


  );
};

