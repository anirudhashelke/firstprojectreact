
import { Route, Routes } from 'react-router-dom';
import './App.css';
import "./Responsive.css"
import Header from './Component/Header';
import Banner from './Component/Banner';
import About from './Component/About';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Guards from './Component/Guards';
import Footer from './Component/Footer';
 
function App() {

  return (
    <>
    <Header />
    <Banner />
    <About />
    <Services />
    <Contact />
    <Guards />
    <Footer />
<Routes >
  <Route   />
</Routes>
    </>
  );
}

export default App;
