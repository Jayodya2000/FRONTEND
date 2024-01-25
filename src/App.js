
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LoginSignup from './Pages/LoginSignup';
import Universities from './Pages/Universities';
import Services from './Pages/Services';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() 
{
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element ={<Home/>}/>
        <Route path='/universities' element={<Universities/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about us' element={<AboutUs/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
