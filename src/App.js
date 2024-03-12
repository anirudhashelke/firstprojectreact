

import './App.css';
import "./Responsive.css"
import Header from './Component/Header';
import Banner from './Component/Banner';
import About from './Component/About';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Guards from './Component/Guards';
import Footer from './Component/Footer';
import { Route,  Routes } from 'react-router-dom';
import Home from './Home';



 
function App() {

  return (
    <>
    <Header />
   
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/services' element={<Services />} />
    <Route path='/guards' element={<Guards />} />
    <Route path='/footer' element={<Footer />} />
    <Route path='/banner' element={<Banner />} />
   </Routes>
   <Footer />
  
    </>
  );
}

export default App;
