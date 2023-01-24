// import React, { useEffect, useState } from 'react'
// import '../../../assets/admin/css/styles.css';
// import { useNavigate } from 'react-router-dom'
// import { getAllOffres } from '../../../utils/requests';
// const Offres = () => {

//     const navigate = useNavigate()
//     const [offres, setOffres] = useState([])
//     const newOffre = ()=>{
//         navigate("/offre/new")
//     }
//     useEffect(()=>{
//         (async()=>{
//           const offres =  await getAllOffres();
//             setOffres(offres)
//         })()
//       },[])
//   return (
//     <div className='container'>
//         <div className='product-list'>
//             <div className="titlebar">
//                 <div className="titlebar_item">
//                     <h1>Offres</h1>
//                     </div>

//                     <div className="titlebar_item">
//                         <div className="btn" onClick={() =>newOffre()}>
//                             Ajouter Offre
//                         </div>
//                         </div>
                       
//                         </div>
                        
//                         <div className="table"> 
//                         <div className="list_header">
//                                 <p>#</p>
//                                 <p>Images</p>
//                                  <p>Titre</p>
//                                  <p>Description</p>
//                                  <p>Date Lancement</p>
//                                  <p>Fin Depot</p>
//                                  <p>Secteur Concerne</p>
//                                  <p>Actions</p>
//                             </div>
//                             {offres.length > 0 && (
//                                 offres.map((item, key)=>(

                              
//                             <div className="list_items" key={key}>
//                                 <p>{item.id}</p>
//                                 <img src={`/uploads/offres/${item.images}`} height="40px"/>
//                                 <a>{item.titre}</a>
//                                 <p>{item.description}</p>
//                                 <p>{item.date_Lancement}</p>
//                                 <p>{item.fin_Depot}</p>
//                                 <p>{item.secteur_id}</p>
//                                  <div>
//                                     <button className="btn-icon btn-success ">
//                                         <i className="fa fa-pencil-alt"></i>
//                                     </button>
//                                     <button className="btn-icon btn-danger">
//                                         <i className="far fa-trash-alt"></i>
//                                         </button>
//                                  </div>
                               
//                             </div>
                        
//                         ))
//                         )}
//             </div>
//             </div> </div>

   
//   )
// }

// export default Offres