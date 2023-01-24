import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Offres = ({offre}) => {
  const handleClick = (e) => {
e.stopPropagation();
    navigate(`/details/${offre.id}`)
  }
  
 const navigate = useNavigate();
  return (
  
<div onClick={handleClick} className="card mb-5 "style= {{width: '28rem'}}>
  <img className="card-img-top" src={`http://localhost:8000/storage/${offre.image}`} alt="Card image cap"/>
  <div className="card-body">
    <h4 className="card-title">{offre.titre}</h4>
    <p className="card-text">{offre.date_Lancement} | {offre.fin_Depot} </p>
    </div>
    <a onClick={() =>navigate('/details/:id')} className=" btn btn-primary fw-bolder text-light">Voir Plus</a>
  
</div>



  )
}



export default Offres