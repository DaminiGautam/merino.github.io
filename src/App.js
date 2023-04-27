import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Product from './pages/Product';
import Catagries from './pages/Catagries';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Feedback from './pages/Feedback';
import Categories2 from './pages/Categories2';
import Blog from './pages/Blog';
import Blog1 from './pages/Blog1';
import Service from './components/Service';

function App() {
  const [showFooter, setShowFooter] = useState(true);
  // let { id } = useParams();


  const hideFooterOnHomePage = () => {
    if (window.location.pathname === '/') {
      setShowFooter(true);

    } else {
      setShowFooter(false);
    }
  }
  useEffect(() => {
    hideFooterOnHomePage();
  }, []);

  return (
    <>
      {showFooter ?
        <Router>
          <Routes>
            <Route exact path='/' element={<Form />}></Route>
          </Routes>
        </Router>
        :
        <Router>
          <Routes>
            <Route exact path='/catagries' element={<Catagries />}></Route>
            <Route exact path='/blog1' element={<Blog1 />}></Route>
            <Route exact path='/feedback' element={<Feedback />}></Route>
            <Route exact path='/categories2' element={<Categories2 />}></Route>
            <Route exact path='/products' element={<Products />}></Route>

            <Route exact path='/catagries/categories' element={<Categories />}></Route>
            <Route exact path='/blog1/blog' element={<Blog />}></Route>
            <Route exact path='/blog1/product' element={<Product />}></Route>
            <Route exact path='/catagries/categories/home' element={<Home />}></Route>
            <Route path="/service/:id" element={<Service />} />
          </Routes>
          <Footer />
        </Router>}



    </>
  );
}

export default App;






