import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import Header from './Header'
import Maps from './maps/Maps';
import Footer from './Footer';

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_7elkbfm', 
      'template_7qpij1u',
       form.current, 
       'ZWQr93Yo_iB6QeBKZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div>
        <Header />
       
         <div className=" container ">
     <div >
          <img src={"/images/conn.png"} alt="ime2" className="col-lg-12" />
        </div>
      
        <div >
        <h1 className="text-center">Contactez Nous</h1>
        <form ref={form} onSubmit={sendEmail} className="col-lg-12">
        <div>
    <label for="inputNom" className="form-label">Nom</label>
    <input type="text"name="nom" className="form-control" id="inputNom" />
  </div>
        <div>
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email"
    className="form-control" 
    id="inputEmail4"
    name="email"
    placeholder='Entrez votre email'/>
  </div>
  <div >
   <label for="inputObjet" className="form-label">Objet</label>
   <input type="text" name="objet" className="form-control" id="inputObjet" />
 </div>
 <div >
   <label for="inputObjet" className="form-label">Message</label>
   <textarea type="text" name="message" className="form-control" id="inputObjet" />
 </div>
  
 
  
  <div className="col-lg-12 mt-2 mb-4 footer ">
    <button type="submit" className="btn btn-primary float-end mb-4 ">Envoyer</button>
  </div> 
  
</form>

    </div>
        
        
    </div>
    <Maps />
    <Footer />
    </div>
  )
}


export default Contact