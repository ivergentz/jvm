import React, { useState } from 'react'
import styled from 'styled-components'

const Navigation = () => {
  const [isActive, setIsActive] = useState(false)
  const [jobsIsActive, setJobsIsActive] = useState(true)
  const [opinionIsActive, setOpinionIsActive] = useState(false)
  const [powerIsActive, setPowerIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
    setJobsIsActive(false)
    setOpinionIsActive(false)
    setPowerIsActive(false)
  }
  const jobsHandleClick = () => {
    setJobsIsActive(!jobsIsActive)
    setIsActive(false)
    setOpinionIsActive(false)
    setPowerIsActive(false)
  }
  const opinionHandleClick = () => {
    setJobsIsActive(false)
    setIsActive(false)
    setOpinionIsActive(!opinionIsActive)
    setPowerIsActive(false)
  }

  const powerHandleClick = () => {
    setJobsIsActive(false)
    setIsActive(false)
    setOpinionIsActive(false)
    setPowerIsActive(!powerIsActive)
  }

  return (
    <NavContainer>
      <NavMenu>
        <a
          href="/"
          // target="_blank"
          rel="noreferrer"
        >
          <NavItem onClick={handleClick} isactive={isActive}>
            arbeiten.
          </NavItem>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <NavItem onClick={jobsHandleClick} isactive={jobsIsActive}>
            jobs.
          </NavItem>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <NavItem onClick={opinionHandleClick} isactive={opinionIsActive}>
            meinungen.
          </NavItem>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <NavItem onClick={powerHandleClick} isactive={powerIsActive}>
            leistungen.
          </NavItem>
        </a>
      </NavMenu>
    </NavContainer>
  )
}

export default Navigation

const NavContainer = styled.nav`
  text-transform: uppercase;
  writing-mode: vertical-lr;
  transform: rotate(-90deg);

  font-weight: 100;
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 100;
`

const NavMenu = styled.ul`
  list-style: none;

  a {
    text-decoration: none;
    color: black;

    :visited {
      color: black;
    }
  }
`
const NavItem = styled.li`
  font-size: 1.125rem;
  font-weight: ${({ isactive }) => (isactive ? '900' : '100')};
  transition: 1s ease;
  cursor: pointer;

  :hover {
    font-weight: bold;
    transition: 1s ease-in-out;
  }
`
