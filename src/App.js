import './App.css';
import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import AllProducts from './pages/AllProducts';
import { useState } from 'react';


function App() {

  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="relative">
      <Routes>
        <Route path='/' element={<MainPage openNav={openNav} setOpenNav={setOpenNav} />}></Route>
        <Route path='/AllProducts' element={<AllProducts openNav={openNav} setOpenNav={setOpenNav} />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
