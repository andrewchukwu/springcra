import {
  BrowserRouter as Router,
  Routes,
  Route, Link
} from 'react-router-dom';

//import logo from './logo.svg';



import Header from "./components/theme/saas/header"
import Hero from "./components/theme/saas/hero"
import Features from "./components/theme/saas/features"
import About1 from "./components/theme/saas/about1"
import About2 from "./components/theme/saas/about2"
import Why from "./components/theme/saas/why"
import Contact from "./components/theme/saas/contact"

import Footer from "./components/theme/saas/footer"

//import './App.css';

function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <Hero/>
              <Features/>
              <About1/>
              <About2/>
              <Why/>
              <Contact/>
              <Footer/>
              <div hidden className="App">
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/about">About Us</Link>
                      </li>
                      <li>
                          <Link to="/contact">Contact Us</Link>
                      </li>
                  </ul>
                  <Routes>
                      <Route exact path='/' element={< Home />}></Route>
                      <Route exact path='/about' element={< About />}></Route>
                      <Route exact path='/contact' element={< Contact />}></Route>
                  </Routes>
              </div>
          </div>

      </Router>
  );
}

export default App;
