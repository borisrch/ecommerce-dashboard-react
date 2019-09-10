import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rightIcon: {
    fontSize: '1em',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  label: {
    letterSpacing: '.07272727em',
    fontSize: '.6875rem',
    fontWeight: 500,
    lineHeight: '1rem',
    textTransform: 'uppercase',
    color: '#5f6368',
    marginLeft: '10px',
  },
  row: {
    // margin: theme.spacing(1),
    paddingTop: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#f5f5f5',
      cursor: 'pointer'
    }
  },
  checkbox: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function a() {
  return alert('hi');
}

export default function Notifications() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    newProductEmail: true,
    newProductMobile: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Notifications
      </Typography>

      <div>
        <Grid container>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="overline" className={classes.label} gutterBottom>
              Email
          </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="overline" className={classes.label} gutterBottom>
              Mobile
          </Typography>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>
      </div>

      <div className={classes.row}>
        <Grid container>
          <Grid item xs={3}>
            <Typography variant="overline" className={classes.label} gutterBottom>
              New Product Is Created
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Checkbox
              className={classes.checkbox}
              checked={state.newProductEmail}
              onChange={handleChange('newProductEmail')}
              value="newProductEmail"
              color="primary"
              inputProps={{
                'aria-label': 'primary checkbox',
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <Checkbox
              className={classes.checkbox}
              checked={state.newProductMobile}
              onChange={handleChange('newProductMobile')}
              value="newProductMobile"
              color="primary"
              inputProps={{
                'aria-label': 'primary checkbox',
              }}
              />
          </Grid>
          <Grid item xs={7}>
            </Grid>
          </Grid>
          <Divider light={true} />
      </div>

      </div>
      )
}