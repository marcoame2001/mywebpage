import React from 'react';
import styled from '@emotion/styled';
import ProfilePic from '../../assets/images/machines.jpg';
import { Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { jobInfo } from '../../data/data';
import { v4 as uuidv4 } from 'uuid'
import EducationCard from './EducationCard'
import { galeria } from '../../data/data'
import { Grid} from '@mui/material'
import SchoolIcon from '@mui/icons-material/School';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';

const EducationContainer = styled(Container)`
  text-align: center;
  margin: 100px 0 100px 0;
  padding-top: 100px;
`

const ProjectGridItem = styled(Grid)`
  display: flex;
  justify-content: center;
  align-content: center;
`



const IconStyled = styled('a')`
  font-size: 30px;

  &:hover svg {
    color: #DAB88B;
  }

`;

const Education = () => {
  return (
    <EducationContainer id="Education-Container">
      <SchoolIcon sx={{ fontSize: 40 }}/>
      <Typography variant="h1" sx={{ marginBottom: 1 }}>
        Education
      </Typography>
     
        {galeria.map((galeria) => (
          <ProjectGridItem item xs={12} md={16} key={uuidv4()}>
            <EducationCard {...galeria} />
          </ProjectGridItem>
        ))}
     
    </EducationContainer>
  )
}

export default Education;



