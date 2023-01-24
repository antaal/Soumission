import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Header from '../../components/Header';

const Inscrire = () => {
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const url = "http://127.0.0.1:8000/api"
  const handleRegistration = async (e)=>{
    e.preventDefault();

    // if input is empty
    if(nom!== '' && prenom!== '' && email!== '' && password!==''){
      await axios
      .post(`${url}/register`,{
        nom, prenom, email, password,
      })
      .then((res)=>navigate('/login'))
      .catch((err)=>{
        console.log(err);
      });
    }else{
      alert("Veuillez remplir tous les champs");
    }
  };

  let navigate = useNavigate();
  return (
    <>
    <Header />
    <Wrapper className="container">
        <Content className="col-6 ">
        <div >
          <h1>Inscrivez Vous</h1>
        <form  onSubmit={handleRegistration} >
  <div >
    <label for="nom" className="form-label">Nom</label>
    <input type="text"
     className="form-control"
      id="nom" 
      placeholder='Entrez votre nom'
      onChange={(e)=>setNom(e.target.value)} value={nom}/>
  </div>
  <div >
    <label for="prenom" className="form-label">Prénom</label>
    <input type="text"
     className="form-control" 
     id="prenom" 
     placeholder='Entrez votre prénom'
     onChange={(e)=>setPrenom(e.target.value)} value={prenom}
     />
  </div>
  <div >
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email"
    className="form-control" 
    id="inputEmail4"
    placeholder='Entrez votre email'
    onChange={(e)=>setEmail(e.target.value)} value={email}/>
  </div>
  <div>
    <label for="inputPassword4" className="form-label">Votre mot de Passe</label>
    <input type="password"
     className="form-control"
      id="inputPassword4"
      placeholder='Entrez votre mot de passe..'
      onChange={(e)=>setPassword(e.target.value)} value={password}/>
  </div>
  

  <div className="col-6 mt-2  ">
    <button type="submit" className="text-white envoie">M'Inscrire</button>
  </div> 
  
</form>
<div >
    <p>Vous avez déjà un compte ?
      <a className=" text-success fw-bolder" onClick={() =>navigate('/login')}>Connectez-vous</a>
    </p>
  </div>
    </div>
        </Content>
        
        <ImageWrapper className="col-6 ">
            <img src={"/images/inscrire.png"} alt="ime3" />
          </ImageWrapper>
        
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 
border-radius: 10px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;

  `
const Content = styled.div`



`
const ImageWrapper = styled.div`



`
export default Inscrire;