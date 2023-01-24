import React from 'react'
import {useState,useEffect} from 'react'
import Offres from '../pages/Offres'
import styled from 'styled-components'
import { getAllOffres } from '../utils/requests'

const PostOffre = () => {
    const [offres, setOffres] = useState(null);
    // const url = process.env.REACT_APP_API_URL;
    useEffect(() => {
       getAllOffres().then(res => {
           setOffres(res);
       }
        )
    })
  return (
    <Wrapper>
        {offres && offres.map(offre => 
        (<Offres key={offre.id} offre={offre}  />)
            )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, minmax(200px,1fr));
padding: 1rem 5rem 1rem 5rem;
`

export default PostOffre