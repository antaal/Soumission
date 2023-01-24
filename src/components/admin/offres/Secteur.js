import React, {useState, useEffect} from 'react'
import {postSecteur,getAllSecteurs} from '../../../utils/requests'

const Secteur = () => {
    const [secteurs,setSecteurs] = useState([])
    useEffect(()=>{
        (async()=>{
          const secteurs =  await getAllSecteurs();
            setSecteurs(secteurs)
        })()
      },[])
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit ')
        const data = new FormData(e.target)
        postSecteur(Object.fromEntries(data.entries())).then(response =>console.log(response))  
      }
    

  return (
    <div className=" container   mt-4   text-center  d-flex justify-content-between">
        <form onSubmit ={handleSubmit}>
            <label for="nom_Secteur" >Secteur D'Activité</label>
            <input 
                type="text"
                className='form-control'
                name='nom_Secteur'
                id='nom_Secteur'
            />
            <button type='submit' className='btn btn-primary mt-3'>Ajouter</button>
        </form>
        
           
            <div className="col-8 text-center text-dark mb-4  ">
        <table className="table table-striped ">
  <thead className="bg-success">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nom du Secteur</th>
    </tr>
  </thead>
  <tbody>
    { 
    
    secteurs.length > 0 && (secteurs.map((row,key)=>(
        <tr key={key}>
            <td>{row.id}</td>
            <td>{row.nom_Secteur}</td>
        </tr>
    )))
    }
  </tbody>
</table>
    </div>
            
        </div>


    
  );
};



export default Secteur