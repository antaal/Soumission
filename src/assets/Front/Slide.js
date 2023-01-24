import React from 'react'
import { Link } from 'react-router-dom';
import './carousel.css';
export const Slide = () => {
  return (
    <div>

  <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">

    <div className="carousel-item active">
        {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}
        <img
            className="d-block w-100"
src="https://der.sn/sites/default/files/DERFJ/Various/4-banniere-depot_pad-banniere.jpg"
            alt="Image One"
          />
        <div className="container">
          <div className="carousel-caption">
            <h1> Fond D’appui Aux Initiatives Culturelles et Privées</h1>
            <p>Pour des Offres Entièrement Financés.</p>
            <p><Link className="btn btn-lg btn-primary" to="/soumission">Soumettre</Link></p>
          </div>
        </div>
      </div>
      <div className="carousel-item ">
        {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}
        <img
            className="d-block w-100"
src="https://der.sn/sites/default/files/DERFJ/Various/depot-dossier.jpg"
            alt="Image One"
          />
        <div className="container">
          <div className="carousel-caption text-end">
            <h1>la Ville de Dakar.</h1>
            <h3>Nous Donnons De La Valeur A Vos Projets!</h3>
            <p><Link className="btn  btn-primary" to="/soumission">Soumettre</Link></p>
          </div>
        </div>
      </div>
  
      <div className="carousel-item">
        {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}
        <img
            className="d-block w-100"
src="https://der.sn/sites/default/files/DERFJ/Various/recrutement-ifp_pad-banniere.jpg"
            alt="Image One"
          />
        <div className="container">
          <div className="carousel-caption text-end">
            <h1>Financement de Projets Ouverts</h1>
            <p>Au Profit De la Ville De Dakar</p>
            <p><Link className="btn btn-lg btn-primary" to="/soumission">Soumettre</Link></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </div>
  )
}
export default Slide;