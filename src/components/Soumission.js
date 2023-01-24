import axios from 'axios';
import React ,{useState, useEffect} from 'react'
import {postProjet, postResponsable} from '../utils/requests'
import { getAllQuartiers,getAllOffres } from '../utils/requests'
import Header from './Header';

const Soumission = () => {
  const [quartiers, setQuartiers] = useState({data: []});
   const [offres, setOffres] = useState({data: []});
 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit ')
    
    const data = new FormData(e.target)
    postResponsable(Object.fromEntries(data.entries())).then(response =>console.log(response))
    postProjet(Object.fromEntries(data.entries())).then(response =>console.log(response))  

    
  }


useEffect(()=>{
  (async()=>{
    const quartiers =  await getAllQuartiers();
      setQuartiers(quartiers)
    const offres = await getAllOffres();
    setOffres(offres)
  })()
},[])





  return (
    <>
    <Header />
       <div className=" col-md-8 text-center text-dark mb-4  mx-auto">
        <h1>Information sur le Soumissionnaire</h1>
       </div>
    
    <div className='col-md-8 mx-auto'>
        <form method='post'className="row col-lg-12" encType='multipart/form-data'  onSubmit={handleSubmit}>
  <div className="col-md-6">
    <label for="inputNom" className="form-label">Nom Du Responsable</label>
    <input type="text"name="nom" className="form-control" id="inputNom" />
  </div>
  <div className="col-md-6 mb-4">
    <label for="inputPrenom" className="form-label">Prenom du Responsable</label>
    <input type="text" name="prenom" className="form-control" id="inputPrenom"/>
  </div>
  <div className="col-md-6 mb-4">
    <label for="inputEmail" className="form-label">Email du Responsable</label>
    <input type="email" name="email" className="form-control" id="inputEmail"/>
  </div>
  {/* <div className="col-md-6 mb-4">
    <label for="inputPassword" className="form-label">Mot de passe du Responsable</label>
    <input type="password" name="password" className="form-control" id="inputPassword"/>
  </div> */}
    {/* <input type="hidden" name="users_id"  /> */}
  <div className="col-md-6 mb-4">

    <label for="date_Naissance" className="form-label">Date Naissance du Responsable</label>
    <input type="datetime" name="date_Naissance" className="form-control" id="date_Naissance"/>
  </div>
  <div className="col-md-6 mb-4">
  <label for="CNI_recto" className="form-label">Numero Carte D'Identité</label>
  <input className="form-control" name="Numero_piece" type="integer" id="CNI_recto"/>
</div>
  <div className="col-md-12 mb-4">
  <h1 className='text-center' for="type_Representant">Statut Juridique</h1>
    <div className="col-md-12  d-flex justify-content-center  ">
    <select id="type_Representant" name="id_type" className="form-select">
      <option value="" >Votre Statut</option>
      <option value={1}>Entreprise</option>
      <option value={2}>Association</option>
      <option value={3}>Individu</option>
    </select>
   </div>
   </div>
   <div className="col-md-6 mb-4">
    <label for="quartiers_id" className="form-label">Domiciliation</label>
    
    {/* <input type="text" name="id_quartier" className="form-control" id="id_quartier" /> */}
    <select id="quartiers_id" className="form-select" name="quartiers_id" defaultValue>
      <option >Choisir Votre Quartier</option>
      {quartiers.length > 0 && quartiers.map(q => <option value={q.id} key={q.id}>{q.nom_Quartier}</option>)}

    </select>
  </div>
  <div className="col-md-6 ">
    <label for="offres_id" className="form-label">Offres</label>
    <select id="offres_id" className="form-select" name="offres_id" defaultValue>
      <option >Choisir votre Offre</option>
      {offres.length > 0 && offres.map(o => <option value={o.id} key={o.id}>{o.titre}</option>)}

    </select>
  </div>
  <div className="col-md-6">
    <label for="Genre" className="form-label">Genre</label>
    <select id="Genre" className="form-select" name="Genre">
      <option value="">Choisir Votre Genre</option>
      <option value={1}>Femme</option>
      <option value={2}>Homme</option>
    </select>
  </div>
  <div className="col-md-6">
    <label for="inputNumero" className="form-label">Numero Telephonique</label>
    <input type="number" name="Telephone" className="form-control" id="inputNumero" />
  </div>
  <div className="col-md-6">
    <label for="inputReleve" className="form-label">Relevé d’Identité Bancaire</label>
    <input type="number"  name="releve_Bancaire" className="form-control" id="inputReleve"/>
  </div>
  <div className="col-md-6">
    <label for="Numero_identite" className="form-label">Numéro d’identité National</label>
    <input type="integer" name="Numero_identite" className="form-control" id="Numero_identite"/>
  </div>
  <div className="col-12 mb-4">
    <label for="inputRecepisse" className="form-label">Numéro Récépissé ou NINEA *</label>
    <input type="text" name="Recepisse" className="form-control" id="inputinputRecepisse" />
  </div>

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
 </div>
 <div className="col-md-12">
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
      <td><input type="text" className="w-100" style={{border:'none'}} name="Description_General"/></td>
    </tr>
    <tr>
      <th scope="row">OS1  (Objectif Spécifique 1) </th>
      <td ><input type="text" className="w-100" style={{border:'none'}} name="description_Objectif"/></td>
      
    </tr>

    <tr>
      <th scope="row">Activites </th>
      <td ><input type="text" className="w-100"  style={{border:'none'}}name="description_Activite"/></td>
      
    </tr>
    <tr>
      <th scope="row">Risque Identifies </th>
      <td ><input type="text" className="w-100" style={{border:'none'}}name="risque_Identifier"/></td>
      
    </tr>
    <tr>
      <th scope="row">Resultats escomptés </th>
      <td ><input type="text" className="w-100" style={{border:'none'}}name="description_Resultat"/></td>
      
    </tr>
  </tbody>
</table>
</div>

{/* <div className=" col-md-6 mb-3">
  <label for="CNI_verso" className="form-label">Carte national d’identité verso</label>
  <input className="form-control" name="CNI_verso" type="file" id="CNI_verso"/>
</div>
<div className="col-md-6 mb-3">
  <label for="NINEA" className="form-label">Copie scannée du NINEA ou du Recepisse</label>
  <input className="form-control" name="NINEA"type="file" id="NINEA"/>
</div> */}
<div className="col-12 mx-auto align-center">
    <button type="submit" className="btn btn-primary">Soumettre</button>
  </div> 
</form>
   </div>
  
 
    </>  
  )
}

export default Soumission