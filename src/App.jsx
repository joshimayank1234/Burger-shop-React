import { HashRouter, Route,Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Footer from './Pages/Footer'
import ProductsDetail from './Pages/ProductsDetail'

function App() {
  let[index,setIndex] = useState();
  let[items,setItems]=useState([

    {
      id:1,
      name:"veg Snakers",
      discription:"Filled with special sauces + latus + onion + tamatos",
      price:69,
      catagory:"Burgur",
      image:"https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png"
    },
    {
      id:2,
      name:"vegeii delite",
      discription:"Filled with special sauces + capcicum + onion + tamatos + latus + Paneer + cheese",
      price:129,
      catagory:"Burgur",
      image:"https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png"
    },
    {
      id:3,
      name:"veg paneer",
      discription:"Filled with special sauces + latus + onion + tamatos + paneer",
      price:99,
      catagory:"Burgur",
      image:"https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png"
    },
    {
      id:4,
      name:"veg mini",
      discription:"Filled with special sauces + onion + tamatos",
      price:49,
      catagory:" Burgur",
      image:"https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png"
    },
    {
      id:5,
      name:"veg Maharaja",
      discription:"Filled with special sauces + latus + onion + tamatos + 3 type of cheese + cucumber + Maharaja Sauce ",
      price:169,
      catagory:"Burgur",
      image:"https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png"
    },
    {
      id:6,
      name:"veg overloaded",
      discription:"Filled with special sauces + latus + onion + tamatos + cucumber + pickel ",
      price:79,
      catagory:"Burgur",
      image:"https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png"
    }

  ]);


  return (
    <div>
      <HashRouter>
        <NavBar/>  

          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Products' element={<Products items={items} setIndex={setIndex}/>}/>
              <Route path='/ProductsDetail' element={<ProductsDetail index={index} items={items}/>}/>
          </Routes>

          <Footer/>
      </HashRouter>
    </div>
  )
}

export default App
