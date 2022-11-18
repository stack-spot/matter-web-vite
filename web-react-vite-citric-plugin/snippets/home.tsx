import React from 'react'
import { Container, Link, Text } from '@citric/core'

export const Home = () => {
  return (
    <Container>
      <Text my={5} appearance='h1'>
        Welcome to <Text as="span" colorScheme='primary'>Citric</Text>
      </Text>
      <Link colorScheme="primary" href="https://citric.stackspot.com/">
        Read to Documentation
      </Link>
    </Container>
  )
}
