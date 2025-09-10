import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage.jsx";
import Hotel from "./Components/Hotel.jsx";
import About from "./Components/About.jsx";
import Gallary from "./Components/Gallary.jsx";
import News from "./Components/News.jsx";
import Contact from "./Components/Contact.jsx";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/hotels' element={<Hotel />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallary />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
