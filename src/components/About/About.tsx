import React from 'react'
import styled from '@emotion/styled'
import { Container, Typography } from '@mui/material'
import { jobInfo } from '../../data/data'

const AboutContainer = styled(Container)`
  text-align: center;
  margin: 100px 0 100px 0;
  padding-top: 200px;
`

const About = () => (
  <AboutContainer id='About-Container'>
    <Typography variant="h1" sx={{ marginBottom: 2 }}>
      About
    </Typography>
    <Typography variant="h3">
      I'm a Software Engineer. I graduated with a Bachelor's in
      Computer Engineering from Charles III University of Madrid with a minor in Computer Science. I also attended the Norwegian University of Science and Technology as part of the Erasmus exchange program. I have experience working as a Full Stack developer for NTNU as well as strong knowledge in AI.
    </Typography>
  </AboutContainer>
)

export default About
