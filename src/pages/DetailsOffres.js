import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header';

const DetailsOffres = ({offre}) => {
  const navigate = useNavigate();
    return (

      <>
       
    

     
        <h1 className="my-4">En Savoir Plus &nbsp;
          <small className="text-success">Sur Nos Offres</small>
        </h1>
        
        
        <div className="row">
        
          <div className="col-md-8">
            <img className="img-fluid" src={`http://localhost:8000/storage/${offre.image}`} alt="im22"/>
          </div>
        
          <div className="col-md-5">
            <h3 className="my-3">Titre de l'offre: {offre.titre}</h3>
            <p>{offre.description}</p>
            <h3 className="my-3">Details de l'Offre</h3>
            <ul>
              <li className="fw-bolder"><p>Date Lancement de l'Offre:{offre.date_Lancement}</p></li>
              <li className="fw-bolder"> <p>Date Clôture de l'Offre:{offre.fin_Depot}</p></li>
              <li className="fw-bolder"><p>Secteur Concerné:{offre.secteur}</p></li>
            </ul>
          </div>
        <div>
        <a className=" btn btn-primary fw-bolder text-light" onClick={() =>navigate('/soumission')}>Postuler</a>
        <a className=" btn btn-primary fw-bolder text-light mx-4" onClick={() =>navigate('/')}>Retouner</a>
        
        </div>
        </div>

        </>
        
     
        
          )
}

export default DetailsOffres