import HomePage from "./pages/HomePage";
import ClassesPage from "./pages/ClassesPage";
import ContactPage from "./pages/ContactPage";
import SchedulePage from "./pages/SchedulePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogPage from "./pages/BlogPage";
import Modal from "./components/Modal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="App">
      <Router>
        <Navbar isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
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
