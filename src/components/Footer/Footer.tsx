import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'

const FooterContainer = styled(Container)`
    text-align: center;
    margin: 100px 0 5px 0;
`

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <FooterContainer>
      <Typography variant='body2'>created by Marco Merola</Typography>
      <Typography variant='body2'>© { date }</Typography>
    </FooterContainer>
  )
}

export default Footer
