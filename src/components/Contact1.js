import React from 'react'
import styled from 'styled-components'

const Contact1 = () => {
  return (
    <Wrapper>
      <h1 className='text-center'>Contact</h1>
     <form className="row col-lg-12">
     <div className="col-md-6">
    <label for="inputNom" className="form-label">Nom</label>
    <input type="text" className="form-control" id="inputNom"/>
  </div>
   <div className="col-md-6 mb-4">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-12">
    <label for="inputOjet" className="form-label">Objet</label>
    <input type="text" className="form-control" id="inputObjet"/>
  </div>
  <div className="col-md-12 mb-4">
    <label for="inputMessage" className="form-label">Votre Message</label>
    <textarea type="text" className="form-control" id="inputMessage"/>
  </div>
  <div className="col-md-12 ">
    <button type="submit" className="btn btn-primary">Envoyer</button>
  </div>
</form>
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
 
    width:90%;
    margin:0 auto;
    margin-top:50px;

`
export default Contact1