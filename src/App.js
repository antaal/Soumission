import React, { useEffect, useState } from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  import {authContext} from './helpers/AppContext';
import Secteur from './components/admin/offres/Secteur';
// import FormOffre from './components/admin/offres/FormOffre';
// import ListOffres from './components/admin/offres/ListOffres';
import ListProjet from './components/admin/projets/ListProjet';
import DetailProjet from './components/admin/projets/DetailProjet';
import Contact from './components/Contact';
import About from './components/About';
import Soumission from './components/Soumission';
import PostOffre from './components/PostOffre';
// import Offres from './pages/Offres';
import Home from './pages/Home';
import DetailsOffres from './pages/DetailsOffres';
import Detail from './components/Detail';
import FormOffre from './components/admin/offres/FormOffre';
import EditOffre from './components/admin/offres/EditOffre';
import ListOffres from './components/admin/offres/ListOffres';
import Inscrire from './pages/auth/Inscrire';
import Connexion from './pages/auth/Connexion';
import Caroussel from './components/Caroussel';
import axios from 'axios';
const url = "http://127.0.0.1:8000/api"










function App() {
  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState(undefined)

useEffect(()=>{
  userInfo();
},[]);

const userInfo = async () => {
  if (localStorage.getItem('user_token')) {
    await axios.get(`${url}/user`,{
      headers: {
          Authorization: `Bearer ${localStorage.getItem('user_token')}`
      }
  })
  .then(response => {
     
      console.log(response.data);
      setLogged(true)
      setUser(response.data)
      
  })
  .catch(error => {
      console.log(error);
  });
}
}
  return (
     <authContext.Provider value={{logged, setLogged, user,setUser}}>
    <div className="App">

    

    
        
        <Routes>
{/* User routes */}
          <Route path="/" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/about" element={<About />} />
           <Route path="/soumission" element={<Soumission />} />
           <Route path="/postOffre" element={<PostOffre />} />
           <Route path="/details/:id" element={<Detail />} />
           <Route path="/detailsOffres" element={<DetailsOffres />} />
           <Route path="/carousel" element={<Caroussel />} />
{/* Admin routes */}
          <Route path="/admin/Secteur" element={<Secteur />} />
          <Route path="/offre/new" element={<FormOffre />} />
          <Route path="/offre/edit/:id" element={<EditOffre />} />
          <Route path='/list' element={<ListOffres />} />
          {/* <Route path="/offres" element={<Offres />} /> */}
          <Route path="/admin/editOffre" element={<EditOffre />} />
          <Route path="/admin/listProjet" element={<ListProjet />} /> 
           <Route path="/admin/detailprojet/:id" element={<DetailProjet />} />
{/* Authentication routes */}
          <Route path="/login" element={<Connexion />} />
          <Route path="/register" element={<Inscrire />} />
         

        </Routes>
      
      

</div>
  </authContext.Provider>
    
  );
}

export default App;
