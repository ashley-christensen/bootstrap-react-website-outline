import React from 'react';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Home />
        <About />
        <Contact />
      </div>
    </Router>
  );
}

export default App;

// <>
//   <Router>
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='About' element={<About />} />
//       <Route path='Contact' element={<Contact />} />
//     </Routes>
//   </Router>
// </>
