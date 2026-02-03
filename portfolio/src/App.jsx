import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetails from './components/ProjectDetails.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#212121] text-white"> 
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />  {/* ⭐ FIX */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;