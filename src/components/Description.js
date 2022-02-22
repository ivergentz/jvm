import React from 'react'
import styled from 'styled-components'

const Description = () => {
  return (
    <DescContainer>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum illo
        iste hic facilis perspiciatis. Molestias necessitatibus harum corrupti
      </p>
      <span />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum illo
        iste hic facilis perspiciatis. Molestias necessitatibus harum corrupti
      </p>
      <span />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        iure minima eveniet aperiam, quae voluptatum excepturi repudiandae,
        totam, velit non enim fuga ut amet debitis aliquid? Pariatur soluta
        voluptate error!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        iure minima eveniet aperiam, quae voluptatum excepturi repudiandae,
        totam, velit non enim fuga ut amet debitis aliquid? Pariatur soluta
        voluptate error!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        iure minima eveniet aperiam, quae voluptatum excepturi repudiandae,
        totam, velit non enim fuga ut amet debitis aliquid? Pariatur soluta
        voluptate error!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        iure minima eveniet aperiam, quae voluptatum excepturi repudiandae,
        totam, velit non enim fuga ut amet debitis aliquid? Pariatur soluta
        voluptate error!
      </p>
    </DescContainer>
  )
}

export default Description

const DescContainer = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  max-height: 90vh;
  min-width: 50vw;
  max-width: 60vw;

  p {
    font-size: 1rem;
    font-weight: 100;
    line-height: 1.5rem;
    letter-spacing: 0.1rem;
    margin-right: 8rem;
  }

  span {
    line-height: 1rem;
  }
`
