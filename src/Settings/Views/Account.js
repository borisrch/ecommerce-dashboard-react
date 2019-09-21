import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/KeyboardArrowRight';
import Divider from '@material-ui/core/Divider';
import Loading from './../../Common/Loading';
import FieldRow from './../../Common/FieldRow';

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
  }
}));

function a() {
  return alert('hi');
}

export default function Account() {
  const classes = useStyles();

  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  function Content() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Profile
        </Typography>
        <div className={classes.row}>
          <Grid container onClick={a}>
            <Grid item xs={3}>
              <Typography variant="overline" className={classes.label} gutterBottom>
                Name
            </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="subtitle1" gutterBottom>
                Bobby B.
            </Typography>
            </Grid>
            <Grid item xs={1}>
              <Edit></Edit>
            </Grid>
          </Grid>
          <Divider light={true} />
        </div>
        <div className={classes.row}>
          <Grid container onClick={a}>
            <Grid item xs={3}>
              <Typography variant="overline" className={classes.label} gutterBottom>
                Email
            </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="subtitle1" gutterBottom>
                bobby.darcy@company.com
            </Typography>
            </Grid>
            <Grid item xs={1}>
              <Edit style={{ marginTop: '0.1em' }}></Edit>
            </Grid>
          </Grid>
          <Divider light={true} style={{ marginTop: '0.25em' }} />
        </div>
        <div className={classes.row}>
          <Grid container onClick={a}>
            <Grid item xs={3}>
              <Typography variant="overline" className={classes.label} gutterBottom>
                Role
            </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="subtitle1" gutterBottom>
                Admin
            </Typography>
            </Grid>
            <Grid item xs={1}>

            </Grid>
          </Grid>
          <Divider light={true} style={{ marginTop: '0.25em' }} />
        </div>
        <div className={classes.row}>
          <Grid container onClick={a}>
            <Grid item xs={3}>
              <Typography variant="overline" className={classes.label} gutterBottom>
                Phone
            </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="subtitle1" gutterBottom>
                123 456 7890
            </Typography>
            </Grid>
            <Grid item xs={1}>
              <Edit style={{ marginTop: '0.1em' }}></Edit>
            </Grid>
          </Grid>
          <Divider light={true} style={{ marginTop: '0.25em' }} />
        </div>
      </React.Fragment>
    );
  }


  return (
    <div className={classes.root}>
      {loading ? (
        <Loading visible={loading} />
      ) : (
          <Content />
        )}
    </div>
  )
}