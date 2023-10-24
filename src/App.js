import './App.css';
import {Route, Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import AllProducts from './pages/AllProducts';
import AddProduct from './pages/AddProduct';
import ProductDetail from './pages/ProductDetail';
import { useEffect, useState } from 'react';
import { getDocs, collection, addDoc } from 'firebase/firestore'
import { db} from './config/firebase'


function App() {

  const [openNav, setOpenNav] = useState(false);
  const productsCollectionRef = collection(db, "Products")
  const [products, setProducts] = useState([])

  const getProducts = async ()=>{
    try{
        const data= await getDocs(productsCollectionRef)
        const filteredData = data.docs.map((doc) => (
            {
                ...doc.data(),
                id : doc.id
            }
        ) )
        setProducts(filteredData)
    } catch(e){
        console.error(e)
    }
}

useEffect(()=>{
  getProducts()
},[])


  return (
    <div className="relative">
      <Routes>
        <Route path='/' element={<MainPage openNav={openNav} setOpenNav={setOpenNav} />}></Route>
        <Route path='/AllProducts' element={<AllProducts openNav={openNav} setOpenNav={setOpenNav} products={products} />}></Route>
        <Route path='/AddProduct' element={<AddProduct openNav={openNav} setOpenNav={setOpenNav} productsCollectionRef={productsCollectionRef} getProducts={getProducts} />}></Route>
        <Route path='ProductDetail/:id' element={<ProductDetail openNav={openNav} setOpenNav={setOpenNav}/>} ></Route>
      </Routes>
      
    </div>
  );
}

export default App;
