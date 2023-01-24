import React from 'react'
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import PostOffre from '../components/PostOffre';
import Slide from '../assets/Front/Slide';




 

const Home = () => {
  return (
    
    <div>
      
      <Header/>
     <Slide />
      <About />
      <hr className="featurette-divider" />
     <h1 className='text-center'>Nos Offres</h1>
      <hr className="featurette-divider" />
 
      <PostOffre />
       <Footer />
     
    </div>
  )
}

export default Home