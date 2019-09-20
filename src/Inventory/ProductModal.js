import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

import UpdateProduct from './UpdateProduct';
import UpdateProductStock from './UpdateProductStock';
import RemoveProduct from './RemoveProduct';
import FieldRow from './../Common/FieldRow';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(1),
    minWidth: '25vw'
  },
  textField: {
    marginRight: theme.spacing(1),
    width: '375px'
  },
  button: {
    boxShadow: 'none',
  },
  title: {
    fontFamily: 'ApercuMedium',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  subtitle: {
    fontFamily: 'ApercuBold'
  },
  image: {
    width: '10vw',
    boxShadow: '0 0 1px 0 rgba(0,0,0,.22)',
    padding: 15,
    marginBottom: theme.spacing(2),
    borderRadius: 4
  }
}));


export default function Search(props) {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>{props.item.name}</Typography>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <img className={classes.image} src={props.item.pictureUrl} />
        </Grid>
      </Grid>

      <Box>
        <FieldRow label="Name" value={props.item.name} onClick={() => { alert('hi') }} />
        <FieldRow label="Brand" value={props.item.brand} onClick={() => { alert('hi') }} />
        <FieldRow label="Description" value={props.item.description} onClick={() => { alert('hi') }} />
        <FieldRow label="Category" value={props.item.category} onClick={() => { alert('hi') }} />
        <FieldRow label="ID" value={props.item.id} />
        <FieldRow label="Stock" value={Math.floor(Math.random() * 100)} />
      </Box>

      <Box display="flex" justifyContent="flex-end" style={{ marginTop: '2em' }}>
        <Button vsize="small" color="primary" className={classes.button} style={{ marginRight: 10 }} onClick={props.onClose}>
          Done
        </Button>
      </Box>

    </Container>
  );
}