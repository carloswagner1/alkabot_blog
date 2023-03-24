
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCard from './components/PostCard/Postcard';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import BlogPage from './components/BlogPage/BlogPage';

function App(): JSX.Element {

  return (
    <div className="App">
      <BlogPage />
    </div>
  );
}

export default App;
