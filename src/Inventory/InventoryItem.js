import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    // boxShadow: '0 0 1px 0 rgba(0,0,0,.22)'
    boxShadow: '0 0 11px #eaf0f6',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  subtitle: {
    fontFamily: 'ApercuBold'
  }
});

export default function InventoryItem(props) {
  const classes = useStyles();

  const openProductModal = () => {
    props.openModal(props.item);
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {props.item.name}
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="textSecondary" className={classes.subtitle}>
              Brand
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {props.item.brand}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="textSecondary" className={classes.subtitle}>
              ID
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {props.item.id}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="textSecondary" className={classes.subtitle}>
              Category
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {props.item.category}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" color="textSecondary" className={classes.subtitle}>
              Stock
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {Math.floor(Math.random() * 100)}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body2" component="p">
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={openProductModal}>View Product</Button>
      </CardActions>
    </Card>
  );
}