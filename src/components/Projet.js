import React ,{useState, useEffect} from 'react'
import {postProjet, postResponsable} from '../utils/requests'
import { getAllQuartiers } from '../utils/requests'

const Soumission = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit ')
    
    const data = new FormData(e.target)
  
    postProjet(Object.fromEntries(data.entries())).then(response =>console.log(response))  
  }








  return (
    <>
    
    <div className='col-md-8 mx-auto'>
        <form method='post'className="row col-lg-12" enctype='multipart/form-data'  onSubmit={handleSubmit}>
 
  <div className=" col-md-8 text-center text-success mb-4  mx-auto">
       <h1>INFORMATIONS SUR LE PROJET OU L’INITIATIVE</h1>
      </div>
       <div className="col-12 mb-4">
   <label for="inputprojet1" className="form-label">Nom du Projet</label>
   <input type="text" name="nom_Projet" className="form-control" id="inputprojet1" />
 </div>
 <div className="col-md-6">
   <label for="duree_Execution" className="form-label">Durée d’éxécution du projet</label>
   <input type="number" name="duree_Execution" className="form-control" id="duree_Execution"/>
 </div>
 <div className="col-md-6 mb-4">
   <label for="debut_Execution" className="form-label">Début d’éxécution *</label>
   <input type="datetime" name="debut_Execution" className="form-control" id="debut_Execution"/>
 </div>

  <div className="col-md-6 mb-4">
   <label for="fin_Execution" className="form-label">Fin d’éxécution</label>
   <input type="datetime" name="fin_Execution" className="form-control" id="fin_Execution"/>
 </div>
 <div className="col-md-6">
   <label for="zone_Execution" className="form-label">Zone d’éxécution  </label>
   {/* <select id="inputzone" className="form-select">
     <option selected>Choisir Votre Zone</option>
     <option>...</option>
   </select> */}
   <input type="text" name="zone_Execution" className="form-control" id="zone_Execution" />
 </div>
 {/* <div className="col-md-12">
   <label for="autre_Financement_Fond" className="form-label">Autre Financement du Fonds d’Appui</label>
   <input type="boolean" name="autre_Financement_Fond" className="form-control" id="autre_Financement_Fond"/>
 </div> */}
 {/* <div className="col-md-12">
   <label for="date_Autre_Financement" className="form-label">Date Autre Financement du Fonds d’Appui</label>
   <input type="datetime" name="date_Autre_Financement" className="form-control" id="date_Autre_Financement"/>
 </div> */}
 <div className=" col-md-8 text-center text-dark mb-4  mx-auto">
       <h1>Montants Budget du Projet </h1>
      </div>
 <div className="col-md-6 ">
   <label for="inputSubvention" className="form-label">Subvention sollicitée du Fonds</label>
   <input type="number" name="subvention_Sollicitee"className="form-control" id="inputSubvention"/>
 </div>

 {/* <div className="col-md-6 mb-4">
   <label for="inputSomme" className="form-label">Somme des autres soutiens</label>
   <input type="number" name="somme_Autre_Soutien" className="form-control" id="inputSomme" />
 </div> */}
 <div className="col-md-6">
   <label for="inputApport" className="form-label">Apport personnel</label>
   <input type="number" name="apport_Personnel" className="form-control" id="inputApport"/>
 </div>
 <div className="col-md-6 mb-4">
   <label for="inputBudget" className="form-label">Total Budget Prévisionnel</label>
   <input type="number" name="total_Budget" className="form-control" id="inputBudget"/>
 </div>
 <div className=" col-md-8 text-center text-success mb-4  mx-auto">
       <h1> Projet Proposé </h1>
      </div>
      <div className="col-12 mb-4">
   <label for="inputObjet" className="form-label">Titre du Projet (objet de la demande de subvention).</label>
   <input type="text" name="objet_Projet" className="form-control" id="inputObjet" />
 </div>
 <div class="form-group">
    <label for="inputContexte">Contexte et Justification du projet</label>
    <textarea class="form-control" name="Contexte" id="inputContexte" rows="3" placeholder='En cinq lignes au maximum dire le contextuel global qui justifie le projet..'></textarea>
  </div>
  <div class="form-group">
    <label for="inputInnov">Innovation et pertinence du projet </label>
    <textarea class="form-control" name="Innovation" id="inputInnov" rows="3" placeholder='-Quelle est l’innovation majeure et la pertinence du projet ?'></textarea>
  </div>
  <div class="form-group">
    <label for="inputResume">Résumé du projet</label>
    <textarea class="form-control" name="Resume" id="inputResume" rows="3" placeholder='-Faire un résumé concis du projet maximum sur une demi page'></textarea>
  </div>
  --------------------------------------------------------------Objectifs du projet------------------------------------------------------

  <div className="mb-4">
    <h5>Objectif général, objectifs spécifiques du projet</h5>
    <p>Décrire un (01) Objectif Général et trois objectifs spécifiques du projet dans le tableau ci-dessous</p>

  <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col" className="bg-success text-light">Objectifs</th>
      
      <th scope="col" className="bg-success text-light">Descriptifs des objectifs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Objectif Général </th>
      <td name="Description_General"><input type="text" className="w-100" name="Description_General"/></td>
    </tr>
    <tr>
      <th scope="row">OS1  (Objectif Spécifique 1) </th>
      <td ><input type="text" className="w-100" name="description_Objectif"/></td>
      
    </tr>

    <tr>
      <th scope="row">Activites </th>
      <td ><input type="text" className="w-100" name="description_Objectif"/></td>
      
    </tr>
    <tr>
      <th scope="row">Risque Identifies </th>
      <td ><input type="text" className="w-100" name="description_Objectif"/></td>
      
    </tr>
    <tr>
      <th scope="row">Resultats escomptés </th>
      <td ><input type="text" className="w-100" name="description_Objectif"/></td>
      
    </tr>
  </tbody>
</table>
</div>
<div className="col-12 mx-auto align-center">
    <button type="submit" className="btn btn-primary">Soumettre</button>
  </div> 
</form>
   </div>
  
 
    </>  
  )
}

export default Soumission