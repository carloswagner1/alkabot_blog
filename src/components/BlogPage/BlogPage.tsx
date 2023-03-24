import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import PostCard from '../PostCard/Postcard';


interface Post {
  id: number;
  title: string;
  body: string;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (

    <Container className="mt-4">

      <h1 className="mt-3 mb-5">My Blog</h1>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </Container>
  );
};

export default BlogPage;
