import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
import { getAllSecteurs, postOffre } from '../../../utils/requests'
export default function FormOffre() {
  const navigate = useNavigate();
  const [secteurs, setSecteurs] = useState({data: []});
  const [validationError,setValidationError] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit ')
    
    const data = new FormData(e.target)
    postOffre(Object.fromEntries(data.entries())).then(function ({ response }) {
      console.log(data);
      Swal.fire({
        icon: "success",
        text: data.message,
      });
      navigate("/");
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })
  }
      

  

  useEffect(()=>{
    (async()=>{
      const secteurs =  await getAllSecteurs();
        setSecteurs(secteurs)
    })()
  },[])


 
    
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Create Offres</h4>
              <hr />
              <div className="form-wrapper">
                {
                  Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {
                              Object.entries(validationError).map(([key, name])=>(
                                <li key={key}>{name}</li>   
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
                <Form encType='multipart/form-data'  onSubmit={handleSubmit}>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="titre"
                          />
                        </Form.Group>
                      </Col>  
                  </Row>
                 
                  <Row>
                    <Col>
                      <Form.Group controlId="Image" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" onChange={changeHandler}/>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name={description} onChange={(event)=>{
                              setDescription(event.target.name)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>

                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="DateLancement">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="date" rows={3} name={date_Lancement} onChange={(event)=>{
                              setDateLancement(event.target.name)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>

                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="FinDepot">
                            <Form.Label>Fin Depot</Form.Label>
                            <Form.Control type="date" rows={3} name={fin_Depot} onChange={(event)=>{
                              setFinDepot(event.target.name)
                            }}/>             
                        </Form.Group>
                      </Col>
                  </Row>

                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="SecteurId">
                            <Form.Label>Secteur Concerne</Form.Label>
                            <select id="secteur_id" className="form-control" name={secteurs}  defaultValue>
      <option >Choisir Votre Quartier</option>
      {secteurs.length > 0 && secteurs.map(s => <option name={s.id} key={s.id}>{s.nom_Secteur}</option>)}

    </select>
                        </Form.Group>
                      </Col>
                  </Row>
                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Save
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



































// import React, {useState, useEffect} from 'react'
// import { Swal } from 'sweetalert2/dist/sweetalert2';
// import '../../../assets/admin/css/styles.css';
// import { postOffre,getAllSecteurs } from '../../../utils/requests';



// const FormOffre = () => {



//     const [secteurs, setSecteurs] = useState({data: []});
//     // const [images, setImages] = useState(null);
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log('Submit ')
//         const data = new FormData(e.target)
//         postOffre(Object.fromEntries(data.entries())).then(response =>console.log(response))  
//       }
    
//       useEffect(()=>{
//         (async()=>{
//           const secteurs =  await getAllSecteurs();
//             setSecteurs(secteurs)
//         })()
//       },[])
//     //   const changeHandler = (e) =>{
//     //     let file = e.target.files[0]
//     //     let reader = new FileReader()
//     //     let limit = 1024 * 1024 * 2

//     //     if (file['size'] > limit) {
//     //         Swal.fire({
//     //             type: 'error',
//     //             title:'Oops!',
//     //             text:'Something went wrong',
//     //             footer: 'Why do I have this issue ?'

//     //         })
//     //     }
//     //     reader.onloadend =(file)=>{
//     //         setImages(reader.result)
//     //     }
//     //     reader.readAsDataURL(file)
//     // }
//   return (
  
    
    
//       <div className=" col-6 text-center text-dark mb-4  mx-auto ">
     
//         <h1>Offres</h1>
//         <form onSubmit ={handleSubmit} encType="multipart/form-data">
//             <label >Titre de l'Offre</label>
//             <input 
//                 type="text"
//                 className='form-control'
//                 name='titre'
//             />
//             <label >Image de l'Offre</label>
//             <input 
//                 type="file"
//                 className='form-control'
//                 name='images'
//                 // onChange={changeHandler}
//             />
//             <label >Description de l'Offre</label>
//             <input 
//                 type="text"
//                 className='form-control'
//                 name='description'
//             />
//             <label >Date Lancement de l'Offre</label>
//             <input 
//                 type="dateTime"
//                 className='form-control'
//                 name='date_Lancement'
//             />
//             <label >Fin de l'Offre</label>
//             <input 
//                 type="dateTime"
//                 className='form-control'
//                 name='fin_Depot'
//             />
//             <div>
//     <label for="secteur_id" className="form-label">Secteurs</label>
//     <select id="secteur_id" className="form-select" name="secteur_id" defaultValue>
//       <option >Choisir votre Secteurs</option>
//       {secteurs.length > 0 && secteurs.map(s => <option name={s.id} key={s.id}>{s.nom_Secteur}</option>)}

//     </select>
//   </div>
//             {/* <label >Admin de l'Offre</label>
//             <input 
//                 type="text"
//                 className='form-control'
//                 name='titre'
//             />
//             <Secteur /> */}
//             <button type='submit' className='btn btn-primary'>Ajouter</button>
//         </form>


//     </div>
    
//   );
// };



// export default FormOffre

