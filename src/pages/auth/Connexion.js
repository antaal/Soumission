import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/Header';
import { authContext } from '../../helpers/AppContext';

const Connexion = () => {
   const {logged, setLogged} = useContext(authContext)
  const [setUser] = useState(undefined)
  const [loading, setLoading]= useState(true);
  const url = "http://127.0.0.1:8000/api";
  let navigate = useNavigate();

  const [error, setError] =useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(()=>{
    checkLogin() 
  }, []);
     
  const handleLogin = async (e)=>{
    e.preventDefault();

    // if input is empty
    if(email !=='' && password!== ''){
      await axios
      .post(`${url}/login`,{
         email, password,
      })
      .then((res)=>{
        console.log(res.data)
        if (res.data.status !== 200){
          setError(true)
         }
         if (res.data.status === 200) {
          console.log(res.data)
          localStorage.setItem('user_token',res.data.token)
           setLogged(true);
          userInfo();
          navigate('/admin/listProjet')
         }
      })
      .catch((err)=>{
        console.log(err);
      });
    }else{
      alert("Veuillez remplir tous les champs");
    }
  };
 
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


 const checkLogin = ()=> {
    if (localStorage.getItem('user_token')) {
          setLogged(true)
        navigate('/admin/listProjet')
        
    }
}
  return (
    <>
    <Header />
    <Wrapper className="container">
     <ImageWrapper className="col-5">
          <img src={"/images/connexion.png"} alt="ime2" width="800px" />
        </ImageWrapper>
        <Content className="col-4 ">
        <div >
          <h1>Connexion</h1>
          {error? 'Donnees Non reconnus': null}
        <form onSubmit={handleLogin} >
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
  
 
  
  <div className="col-6 mt-2">
    <button type="submit" className="btn btn-primary" >Me Connecter</button>
  </div> 
  
</form>
<div className="col-md-12">
    <p>Vous n'avez pas de Compte
      <a className=" text-success fw-bolder" onClick={() =>navigate('/register')}>S'Inscrire</a>
    </p>
  </div>
    </div>
        </Content>
        
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
  width: 100px;
`


export default Connexion;