import React from 'react'
import background from '../assets/login.jpg';
import styled from 'styled-components'
const BackGroundImage = () => {
  return (
    <Container>
      <img src={background} alt='netflix'/> 
    </Container>
  )
}

export default BackGroundImage
const Container = styled.div`
height:100vh;
width:100vw;
img{
    height:100vh;
    width:100vw
}
`;