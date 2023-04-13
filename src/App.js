import HomePage from "./pages/HomePage";
import ClassesPage from "./pages/ClassesPage";
import ContactPage from "./pages/ContactPage";
import SchedulePage from "./pages/SchedulePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogPage from "./pages/BlogPage";
import MODAL_INFO from "./components/Modal_Info";
import { Modal_Links as MODAL_LINKS } from "./components/Modal_Links";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
  const [isModalInfoClosing, setIsModalInfoClosing] = useState(false);

  const [isModalLinksOpen, setIsModalLinksOpen] = useState(false);
  const [isModalLinksClosing, setIsModalLinksClosing] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar
          isModalInfoOpen={isModalInfoOpen}
          setIsModalInfoOpen={setIsModalInfoOpen}
          setIsModalInfoClosing={setIsModalInfoClosing}
          isModalLinksOpen={isModalLinksOpen}
          setIsModalLinksOpen={setIsModalLinksOpen}
          setIsModalLinksClosing={setIsModalLinksClosing}
        />
        <MODAL_INFO
          isModalInfoOpen={isModalInfoOpen}
          setIsModalInfoOpen={setIsModalInfoOpen}
          isModalInfoClosing={isModalInfoClosing}
          setIsModalInfoClosing={setIsModalInfoClosing}
        />
        <MODAL_LINKS
          isModalLinksOpen={isModalLinksOpen}
          setIsModalLinksOpen={setIsModalLinksOpen}
          isModalLinksClosing={isModalLinksClosing}
          setIsModalLinksClosing={setIsModalLinksClosing}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
