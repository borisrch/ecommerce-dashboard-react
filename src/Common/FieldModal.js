import React from 'react';
import { makeStyles, TextField, Container, Typography, Divider, Box, IconButton, Button } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 20px 60px -2px rgba(27,33,58,.4)',
    padding: theme.spacing(2, 4, 3),
    borderRadius: '8px',
    minWidth: 550
  },
  textfield: {

  },
  label: {
    marginTop: 8
  },
  button: {
    boxShadow: 'none',
    marginLeft: '1rem'
  }
}));

export default function FieldModal(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(props.value);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  function Input() {
    if (props.variant === 'textarea') {
      return (
        <TextField
          id="outlined-name"
          label={props.label}
          className={classes.textField}
          fullWidth
          multiline
          rows="4"
          value={value}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
      )
    } else {
      return (
        <TextField
          id="outlined-name"
          label={props.label}
          className={classes.textField}
          fullWidth
          value={value}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
      )
    }
  }

  return (
    <Container className={classes.paper}>
      <Box display="flex" justifyContent="flex-start">
        <IconButton aria-label="delete" className={classes.margin} onClick={props.onClose}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5" className={classes.label}>{props.label}</Typography>
      </Box>
      <Divider light={true} />
      <Input />
      <Box display="flex" justifyContent="flex-end" style={{ marginTop: '2em' }}>
        <Button className={classes.button} color="primary" onClick={props.onClose}>
          Cancel
        </Button>
        <Button variant="contained" className={classes.button} color="primary" >
          Update
        </Button>
      </Box>
    </Container>
  );
}