import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Container, Modal } from '@material-ui/core';

import UpdateProduct from './UpdateProduct';
import UpdateProductStock from './UpdateProductStock';
import RemoveProduct from './RemoveProduct';
import FieldRow from './../Common/FieldRow';
import FieldModal from './../Common/FieldModal';

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
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // boxShadow: theme.shadows[5],
    boxShadow: '0 20px 60px -2px rgba(27,33,58,.4)',
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    borderRadius: '8px'
  },
}));


export default function ProductModal(props) {
  const classes = useStyles();

  const [fieldModal, setFieldModal] = React.useState({
    open: false,
    field: {
      label: null,
      value: null
    }
  });

  const [product, setProduct] = React.useState({
    ...props.item
  })

  const showFieldModal = (field) => {
    setFieldModal({
      open: true,
      field,
    });
  }

  const handleClose = () => {
    setFieldModal({
      ...fieldModal,
      open: false
    });
  }

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>{props.item.name}</Typography>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <img className={classes.image} src={props.item.pictureUrl} />
        </Grid>
      </Grid>

      <Box>
        <FieldRow label="Name" value={props.item.name} openModal={showFieldModal} />
        <FieldRow label="Brand" value={props.item.brand} openModal={showFieldModal} />
        <FieldRow label="Description" value={props.item.description} openModal={showFieldModal} variant="textarea" />
        <FieldRow label="Category" value={props.item.category} openModal={showFieldModal} />
        <FieldRow label="ID" value={props.item.id} />
        <FieldRow label="Stock" value={Math.floor(Math.random() * 100)} />
      </Box>

      <Box display="flex" justifyContent="flex-end" style={{ marginTop: '2em' }}>
        <Button variant="contained" color="primary" className={classes.button} style={{ marginRight: 10 }} onClick={props.onClose}>
          Save
        </Button>
        <Button color="primary">Cancel</Button>
      </Box>

      <Modal
        disableAutoFocus={true}
        disableBackdropClick
        closeAfterTransition
        open={fieldModal.open}
        onClose={handleClose}
        className={classes.modal}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div style={{ outline: 'none' }}>
          <FieldModal label={fieldModal.field.label} value={fieldModal.field.value} onClose={handleClose} item={props.item} setProduct={props.setProduct} />
        </div>

      </Modal>

    </Container>
  );
}