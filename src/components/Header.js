import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <h2>asdf</h2>
      <h1>Komponente</h1>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.section`
  writing-mode: sideways-lr;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 10rem;
  padding-bottom: 1rem;
  height: 100vh;

  h1,
  h2 {
    font-size: 5rem;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  h2 {
    font-size: 3rem;
    font-weight: 200;
  }
`
