import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Login from './Components/Login';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';

function App() {
  return (
     
      <BrowserRouter>
      <Header/>
      <Sidebar/>
      <Home/>
      <Routes>
       <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>

  );
}

export default App;
