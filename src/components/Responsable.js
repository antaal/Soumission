import React ,{useState, useEffect} from 'react'
import {postResponsable} from '../utils/requests'
import { getAllQuartiers } from '../utils/requests'

const Responsable = () => {
  const [quartiers, setQuartiers] = useState({data: []});
  // const [communes, setCommunes] = useState({data: []});
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit ')
    
    const data = new FormData(e.target)
    postResponsable(Object.fromEntries(data.entries())).then(response =>console.log(response))
  }


useEffect(()=>{
  (async()=>{
    const quartiers =  await getAllQuartiers();
      setQuartiers(quartiers)
    // const communes = await getAllCommunes();
    // setCommunes(communes)
  })()
},[])





  return (
    <>
       <div className=" col-md-8 text-center text-dark mb-4  mx-auto">
        <h1>Information sur le Soumissionnaire</h1>
       </div>
    
    <div className='col-md-8 mx-auto'>
        <form method='post'className="row col-lg-12" enctype='multipart/form-data'  onSubmit={handleSubmit}>
  <div className="col-md-6">
    <label for="inputNom" className="form-label">Nom Du Responsable</label>
    <input type="text"name="nom" className="form-control" id="inputNom" />
  </div>
  <div className="col-md-6 mb-4">
    <label for="inputPrenom" className="form-label">Prenom du Responsable</label>
    <input type="text" name="prenom" className="form-control" id="inputPrenom"/>
  </div>
  <div className="col-md-6 mb-4">
    <label for="date_Naissance" className="form-label">Date Naissance du Responsable</label>
    <input type="datetime" name="date_Naissance" className="form-control" id="date_Naissance"/>
  </div>
  <div className="col-md-12 mb-4">
  <h1 className='text-center' for="type_Representant">Statut Juridique</h1>
    <div className="col-md-12  d-flex justify-content-center  ">
    <select id="type_Representant" name="id_type" className="form-select" defaultValue>
      <option  >Votre Statut</option>
      <option value={1}>Entreprise</option>
      <option value={2}>Association</option>
      <option value={3}>Individu</option>
    </select>
   </div>
   </div>
   <div className="col-md-6 mb-4">
    <label for="id_quartier" className="form-label">Domiciliation</label>
    
    {/* <input type="text" name="id_quartier" className="form-control" id="id_quartier" /> */}
    <select id="id_quartier" className="form-select" name="id_quartier" defaultValue>
      <option >Choisir Votre Quartier</option>
      {quartiers.length > 0 && quartiers.map(q => <option value={q.id} key={q.id}>{q.nom_Quartier}</option>)}

    </select>
  </div>
  {/* <div className="col-md-6 ">
    <label for="id_commune" className="form-label">Commune</label>
    <select id="id_commune" className="form-select" name="id_commune" defaultValue>
      <option >Choisir Votre Commune</option>
      {communes.length > 0 && communes.map(c => <option value={c.id} key={c.id}>{c.nom_Commune}</option>)}

    </select>
  </div> */}
  <div className="col-md-6">
    <label for="Genre" className="form-label">Genre</label>
    <select id="Genre" className="form-select" name="Genre" defaultValue>
      <option >Choisir Votre Genre</option>
      <option value={0}>Femme</option>
      <option value={1}>Homme</option>
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
    <input type="number" name="Numero_identite" className="form-control" id="Numero_identite"/>
  </div>
  {/* <div className="col-12 mb-4">
    <label for="inputRecepisse" className="form-label">Numéro Récépissé ou NINEA *</label>
    <input type="text" name="Recepisse" className="form-control" id="inputinputRecepisse" />
  </div> */}

 
<div className="col-md-6 mb-3">
  <label for="CNI_recto" className="form-label">Carte national d’identité recto</label>
  <input className="form-control" name="CNI_recto" type="text" id="CNI_recto"/>
</div>
{/* <div className=" col-md-6 mb-3">
  <label for="CNI_verso" className="form-label">Carte national d’identité verso</label>
  <input className="form-control" name="CNI_verso" type="file" id="CNI_verso"/>
</div>
<div className="col-md-6 mb-3">
  <label for="NINEA" className="form-label">Copie scannée du NINEA ou du Recepisse</label>
  <input className="form-control" name="NINEA"type="file" id="NINEA"/>
</div> */}
{/* <div className="col-12 mx-auto align-center">
    <button type="submit" className="btn btn-primary">Soumettre</button>
  </div>  */}
</form>
   </div>
  
 
    </>  
  )
}

export default Responsable