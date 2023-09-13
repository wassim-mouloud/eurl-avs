import './App.css';
import {Route, Routes} from 'react-router-dom';
import MainPage from './sections/MainPage';
import { useState } from 'react';


function App() {

  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="relative">
      {/* <Routes>
        <Route path='/' element={<MainPage/>}></Route>
      </Routes> */}
      <MainPage openNav={openNav} setOpenNav={setOpenNav} />
    </div>
  );
}

export default App;
