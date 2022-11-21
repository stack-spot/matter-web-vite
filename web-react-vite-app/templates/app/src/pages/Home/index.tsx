import React from 'react'
import styled from 'styled-components'

export const Text = styled.h1`
  font-size: 1.8rem;
  color: #000000;
`

const Home: React.FC = () => {
  return (
    <>
      <Text>Welcome React + Vite Boilerplate</Text>
    </>
  );
}

export default Home;