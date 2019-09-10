import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    boxShadow: '0 0 1px 0 rgba(0,0,0,.22)'
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

export default function InventoryItem(props) {
  const classes = useStyles();

  const openProductModal = () => {
    props.openModal(props.item);
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Product ID: {props.item.id}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.item.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.item.type}
        </Typography>
        <Typography variant="body2" component="p">
          {props.item.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={openProductModal}>View Product</Button>
      </CardActions>
    </Card>
  );
}