import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      margin: 20,
      background: `linear-gradient(rgba(101, 147, 245, 1),rgba(101, 147, 245, 0.6)), url('https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')` ,
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        text:'#fff',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });



const CardComponent = (props) => {

    const classes = useStyles();
    return (
               
                    <Card className={classes.card} style={{textAlign: 'left'}}>
                        <CardContent>
                                <Typography className={classes.title}  gutterBottom>
                                    <strong style={{color: 'rgb(107, 95, 95)', fontSize: '1.2rem'}} >{props.name}</strong> 
                                </Typography>
                        </CardContent>
                            <CardActions>
                                <Button size="small" style={{color: '#fff'}} onClick={()=>props.onClickHandler(props.name)}>See Weather</Button>
                            </CardActions>
                    </Card>
            
    )

}

export default CardComponent;