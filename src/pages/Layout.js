import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Layout = ({children}) => {
  return (
    <Wrapper>
        <Header />
        <main className='mb-4'>
            {children}
        </main>

        <Footer /> 
    </Wrapper>
  )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    `


export default Layout