import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from '@emotion/styled'
import SkillCard from './ContactCard'
import { Container } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import MemoryIcon from '@mui/icons-material/Memory'
import { contact } from '../../data/data'
import EmailIcon from '@mui/icons-material/Email';
const ContactContainer = styled(Container)`
  text-align: center;
  margin: 100px 0 100px 0;
	padding-top: 100px;
`

const SkillGridItem = styled(Grid)`
  display: flex;
  justify-content: center;
  align-content: center;
`

const Contact = () => {
  return (
    <ContactContainer id="Contact-Container">
      <EmailIcon sx={{ fontSize: 40 }} />
      <Typography variant="h1" sx={{ marginBottom: 2 }}>
      Contact
      </Typography>
      
        {contact.map((skill: string) => (
          <SkillGridItem item xs={12} md={6} key={uuidv4()}>
            <SkillCard skill={skill} />
          </SkillGridItem>
        ))}
     
    </ContactContainer>
  )
}

export default Contact



