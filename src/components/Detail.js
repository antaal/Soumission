import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import DetailsOffres from '../pages/DetailsOffres';
import { getOffreById } from '../utils/requests';



const Detail = () => {
  const {id}= useParams();
  const[offre, setOffres]=useState(null);
  useEffect(()=>{
    getOffreById(id).then(res => {
      setOffres(res);
    })
  },[id])
  return (

<div className="container">
  {offre && <DetailsOffres offre={offre} />}
</div>


  )
}

export default Detail