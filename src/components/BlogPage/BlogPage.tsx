import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import PostCard from '../PostCard/Postcard';
import Header from '../Header/Header';


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
    <>
      <Header />
      <Container className="fluid mt-4 w-75" >
        <h3 className="mt-3 mb-5 ">Meus Posts</h3>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </Container>
    </>


  );
};

export default BlogPage;
