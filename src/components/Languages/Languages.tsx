import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from '@emotion/styled'
import LanguageCard from './LanguageCard/LanguageCard'
import { Container } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import MemoryIcon from '@mui/icons-material/Memory'
import { LanguagesList2 } from '../../data/data'
import LanguageIcon from '@mui/icons-material/Language';

const LanguagesContainer = styled(Container)`
  text-align: center;
  margin: 100px 0 100px 0;
	padding-top: 100px;
`

const LanguageGridItem = styled(Grid)`
  display: flex;
  justify-content: center;
  align-content: center;
`

const Languages = () => {
  return (
    <LanguagesContainer id="Languages-Container">
      <LanguageIcon sx={{ fontSize: 35 }} />
      <Typography variant="h1" sx={{ marginBottom: 2 }}>
        Languages
      </Typography>
      <Grid container spacing={2} id="Languages-Grid">
        {LanguagesList2.map((language: string) => (
          <LanguageGridItem item xs={12} md={6} key={uuidv4()}>
            <LanguageCard language={language} />
          </LanguageGridItem>
        ))}
      </Grid>
    </LanguagesContainer>
  )
}

export default Languages
