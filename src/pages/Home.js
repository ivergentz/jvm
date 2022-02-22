import React from 'react'
import styled from 'styled-components'
import Description from '../components/Description'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Table from '../components/Table'

const Home = () => {
  return (
    <Container>
      <Navigation />
      <Header />
      <div>
        <Description />
      </div>
      <Table />
    </Container>
  )
}

export default Home

const Container = styled.main`
  display: flex;
  align-items: center;
`
