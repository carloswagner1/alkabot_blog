import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import BlogPage from './pages/PostPage/PostPage';
import Contact from './pages/ContactPage/ContactPage';
import MasterPage from './pages/MasterPage/MasterPage';
import AboutPage from './pages/AboutPage/AboutPage';




function App(): JSX.Element {

  return (
      <Routes>
        <Route path="/" element={<MasterPage />}>
          <Route path="/" element={<BlogPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
  );
}

export default App;
