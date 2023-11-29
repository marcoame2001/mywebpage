import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export interface ProjectProps {
  title: string
  description: string
  image: string
  link: string
}

/* TODO 
    Take out paddingLeft
    Open links in another tab (maybe)
*/

const EducationCard = ({ title, description, image, link }: ProjectProps) => {
  return (
    <Card sx={{ maxWidth: 650, minWidth: 200 }}>
      <CardActionArea href={link}>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt="project image"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default EducationCard