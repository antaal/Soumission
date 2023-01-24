import React, { useEffect, useState } from 'react'
import { Swal } from 'sweetalert2/dist/sweetalert2';
import {postOffre, getAllSecteurs } from '../../../utils/requests';

import { useNavigate } from 'react-router-dom';

const url = "http://127.0.0.1:8000/api";

const New = () => {
    const [secteurs, setSecteurs] = useState({data: []});
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit ')
        const data = new FormData(e.target)
        postOffre(Object.fromEntries(data.entries())).then(response =>console.log(response))  
      }
    
      useEffect(()=>{
        (async()=>{
          const secteurs =  await getAllSecteurs();
            setSecteurs(secteurs)
        })()
      },[])
    const navigate = useNavigate()
    // const [secteurs, setSecteurs] = useState({data: []});
    // const [titre, setTitre] = useState("")
    const [images,setImages] = useState(null);
    // const [description, setDescription] = useState("")
    // const [date_Lancement, setDateLancement] = useState("")
    // const [fin_Depot, setFinDepot] = useState("")
    
     
    const changeHandler = (e) =>{
        let file = e.target.files[0]
        let reader = new FileReader()
        let limit = 1024 * 1024 * 2

        if (file['size'] > limit) {
            Swal.fire({
                type: 'error',
                title:'Oops!',
                text:'Something went wrong',
                footer: 'Why do I have this issue ?'

            })
        }
        reader.onloadend =(file)=>{
            setImages(reader.result)
        }
        reader.readAsDataURL(file)
    }
  
    
    //   useEffect(()=>{
    //     (async()=>{
    //       const secteurs =  await getAllSecteurs();
    //         setSecteurs(secteurs)
    //     })()
    //    },[])
    // const createOffre = async (e)=>{
       
    //     e.preventDefault()
       
    //     const formData = new FormData();
    //     const data = new FormData(e.target);

    //     formData.append('titre', titre)
    //     formData.append('description', description)
    //     formData.append('images', images)
    //     formData.append('date_Lancement', date_Lancement)
    //     formData.append('fin_Depot', fin_Depot)

    //     console.log(Object.fromEntries(data.entries()));
    //    return;

    // }
    return (
        <form className="container"  onSubmit={handleSubmit} action="yout path" method="post" enctype="multipart/form-data">
            <div className="offre_create">
                <div className="titlebar">
                    <div className="titlebar_item">
                        <h1>Ajouter Un Offre</h1>
                    </div>
                </div> 
                <div className="card_wrapper" >
                    <div className="wrapper-left">
                        <div className="card">
                            <p>Titre</p>
                            <input type="text" name='titre' />

                            <p>Description</p>
                            <textarea cols="10" rows="5"name='description'  ></textarea>
                            <div className="media">
                                <ul className="images_list">
                                    <li className="image_item">
                                        <div className="image_item_img">
                                            <img src={images} width="150px" name='images'height="150"/>
                                            </div>
                                    </li>
                                    <li className="image_item">
                                        <div className="image_item_form">
                                            <label className="image_item-form--label">Ajouter Image</label>
                                            <input type="file" className="image_item-form--input" onChange={changeHandler}/>
                                            </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper-right">
                        <div className="card">
                            <p>Date Lancement</p>
                            <input type="date" name="date_Lancement"/>
                            <hr className="hr"/>
                            <p>Date Fin Depot</p>
                            <input type="date" name='fin_Depot'/>
                            <hr className="hr"/>
                            <p>Secteur Concerne</p>
                            <div>
                            
    <select id="secteur_id" className="form-select" name="secteur_id" defaultValue>
      <option >Choisir votre Secteurs</option>
      {secteurs.length > 0 && secteurs.map(s => <option defaultValue={s.id} key={s.id}>{s.nom_Secteur}</option>)}

    </select>
  </div>
                        </div>
                    </div>
                </div>

                <div className="titlebar">
                    <div className="titlebar_item">
                        
                    </div>

                    <div className="titlebar_item">
                        <input className="btn" type="submit" defaultValue="Enregistrer"/>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default New