import React from 'react'
import './App.css';
import Navbar from './components/navbar';
import Middle from './components/middle';
import Counter from './components/counter';
import Gallery from './components/gallery';
import Storygram from './components/Storygram';
import Footer from './components/footer'


function App() {
return(

  <>
  <Navbar/>
  <Middle/>
  <Counter/>
  <Gallery/>
  <Storygram/>
  <Footer/>
  </>
);
}

export default App;
