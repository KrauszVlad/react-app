import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from './pages/about';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/Footer.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/menu' exact element={<Menu />} />
        <Route path="/about" exact component={About} />
        <Route path='/contact' exact element={<Contact />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;