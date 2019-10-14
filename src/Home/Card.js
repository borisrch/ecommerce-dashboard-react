import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: '0 0 1px 0 rgba(0,0,0,.22)',
    // boxShadow: '0 0.938em 1.588em rgba(50,50,93,.1), 0 0.313em 0.938em rgba(0,0,0,.07)'
  },
  media: {
    userSelect: 'none',
    pointerEvents: 'none',
  }
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        title="Contemplative Reptile"
        image={props.image}
        className={classes.media}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary" component={Link} to={props.route}>
          {props.button}
        </Button>
      </CardActions>
    </Card>
  );
}