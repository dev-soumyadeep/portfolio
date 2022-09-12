import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./MediaCard.css"
export default function MediaCard(props) {
  var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '23vw'
    
}
  return (
    <Card style={cardStyle} sx={{ maxWidth:330 }} >
      <CardMedia
        component="img"
        height="220"
        image={props.imglink}
        alt="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
         {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontSize="1.5rem">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={props.weblink}
        id = "link"
        rel='noopener noreferrer'
        target="_blank"
        >
        <Button size="large">Explore</Button>
        </a>
        
      </CardActions>
    </Card>
  );
}





