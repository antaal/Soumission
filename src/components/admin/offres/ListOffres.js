import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2'
import SideBar from '../../../layouts/admin/SideBar';
import Headers from '../../Headers';

export default function ListOffres() {

    const [offres, setOffres] = useState([])

    useEffect(()=>{
        fetchOffres() 
    },[])

    const fetchOffres = async () => {
        await axios.get(`http://localhost:8000/api/offres`).then(({data})=>{
            setOffres(data)
        })
    }

    const deleteOffre = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            return result.isConfirmed
          });

          if(!isConfirm){
            return;
          }

          await axios.delete(`http://localhost:8000/api/offres/${id}`).then(({data})=>{
            Swal.fire({
                icon:"success",
                text:data.message
            })
            fetchOffres()
          }).catch(({response:{data}})=>{
            Swal.fire({
                text:data.message,
                icon:"error"
            })
          })
    }

    return (
      <div>
      <Headers/>
        <div className="container bg-gray">
          <div className="row">
            <div className='col-12'>
                <Link className='btn btn-primary mb-2 float-end' to={"/offre/new"}>
                    Créer Un Offre
                </Link>
            </div>
            <div className="col-12">
                <div className="card card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered mb-0 text-center">
                            <thead>
                                <tr>
                                    <th>Titre</th>
                                    
                                    <th>Description</th>
                                    <th>Date Lancement</th>
                                    <th>Fin Depot</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    offres.length > 0 && (
                                        offres.map((row, key)=>(
                                            <tr key={key}>
                                                <td>{row.titre}</td>
                                                <td>{row.description}</td>
                                                <td>{row.date_Lancement}</td>
                                                <td>{row.fin_Depot}</td>
                                                <td>
                                                    <img width="50px" src={`http://localhost:8000/storage/${row.image}`} />
                                                </td>
                                                <td>
                                                    <Link to={`/offre/edit/${row.id}`} className='btn btn-success me-2'>
                                                        Edit
                                                    </Link>
                                                    <Button variant="danger" onClick={()=>deleteOffre(row.id)}>
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
      </div>
      </div>
    )
}































// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { getAllOffres } from '../../../utils/requests'
// import SideBar from '../../../layouts/admin/SideBar'

// const ListOffres = () => {
//     const [offres,setOffres] = useState([])
//     useEffect(()=>{
//         (async()=>{
//           const offres =  await getAllOffres();
//             setOffres(offres)
//         })()
//       },[])
//   return (
//     <>
// <SideBar />
//     <div className="col-8 text-center text-dark mb-4   container">
//         <table className="table table-striped ">
//   <thead className="bg-success">
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">Titre</th>
//       <th scope="col">Images</th>
//       <th scope="col">Description</th>
//       <th scope="col">Date Lancement</th>
//       <th scope="col">Fin Depot</th>
//       <th scope="col">Secteur Concerne</th>
//       <th scope="col">Action</th>
//     </tr>
//   </thead>
//   <tbody>
//     { 
    
//     offres.length > 0 && (offres.map((row,key)=>(
//         <tr key={key}>
//             <td>{row.id}</td>
//             <td>{row.titre}</td>
//             <td>{row.images}</td>
//             <td>{row.description}</td>
//             <td>{row.date_Lancement}</td>
//             <td>{row.fin_Depot}</td>
//             <td>{row.secteur_id}</td>
//            <td>
//            <Link to={`/admin/editOffre/${row.id}`} className="btn btn-sm btn-info mr-2">Modifier</Link>
            
//            </td>
//         </tr>
//     )))
//     }
//   </tbody>
// </table>
//     </div>
//     </>
//   )
// }

// export default ListOffres