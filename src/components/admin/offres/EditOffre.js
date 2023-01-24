import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2';

export default function EditOffre() {
  const navigate = useNavigate();

  const { id } = useParams()

  const [titre, setTitre] = useState("")
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState("")
  const [date_Lancement, setDateLancement] = useState("")
  const [fin_Depot, setFinDepot] = useState("")
 
  const [validationError,setValidationError] = useState({})

  useEffect(()=>{
    fetchOffres()
  },[])

  const fetchOffres = async () => {
    await axios.get(`http://localhost:8000/api/offres/${id}`).then(({data})=>{
      const { titre, description,date_Lancement,fin_Depot} = data
      setTitre(titre)
      setDescription(description)
      setDateLancement(date_Lancement)
      setFinDepot(fin_Depot)
    }).catch(({response:{data}})=>{
      Swal.fire({
        text:data.message,
        icon:"error"
      })
    })
  }

  const changeHandler = (event) => {
		setImage(event.target.files[0]);
	};

  const updateOffre = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('_method', 'PATCH');
    formData.append('titre', titre)
    formData.append('description', description)
    formData.append('date_Lancement', date_Lancement)
    formData.append('fin_Depot', fin_Depot)
    if(image!==null){
      formData.append('image', image)
    }

    await axios.post(`http://localhost:8000/api/offres/${id}`, formData).then(({data})=>{
   
      Swal.fire({
        icon:"success",
        text:data.message
      })
      navigate("/")
    }).catch(({response})=>{
      if(response.status===422){
        setValidationError(response.data.errors)
        console.log(response.data.errors);
      }else{
        Swal.fire({
          text:response.data.message,
          icon:"error"
        })
      }
    })
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-titre">Update Offre</h4>
              <hr />
              <div className="form-wrapper">
                {
                  Object.keys(validationError).length > 0 && (
                    <div className="row">
                      <div className="col-12">
                        <div className="alert alert-danger">
                          <ul className="mb-0">
                            {
                              Object.entries(validationError).map(([key, value])=>(
                                <li key={key}>{value}</li>   
                              ))
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  )
                }
                <Form onSubmit={updateOffre}>
                  <Row> 
                      <Col>
                        <Form.Group controlId="Name">
                            <Form.Label>titre</Form.Label>
                            <Form.Control type="text" value={titre} onChange={(event)=>{
                              setTitre(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>  
                  </Row>
                  
                  <Row>
                    <Col>
                      <Form.Group controlId="Image" className="mb-3">
                        <Form.Label>Image</Form.Label>
                        <Form.Control type="file" onChange={changeHandler} />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} value={description} onChange={(event)=>{
                              setDescription(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>

                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="DateLancement">
                            <Form.Label>Date Lancement</Form.Label>
                            <Form.Control type="datetime" rows={3} value={date_Lancement} onChange={(event)=>{
                              setDateLancement(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>

                  <Row className="my-3">
                      <Col>
                        <Form.Group controlId="FinDepot">
                            <Form.Label>Fin Depot</Form.Label>
                            <Form.Control type="datetime" rows={3} value={fin_Depot} onChange={(event)=>{
                              setFinDepot(event.target.value)
                            }}/>
                        </Form.Group>
                      </Col>
                  </Row>
                  <Button variant="primary" className="mt-2" size="lg" block="block" type="submit">
                    Update
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