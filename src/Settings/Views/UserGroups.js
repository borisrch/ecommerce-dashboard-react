import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/KeyboardArrowRight';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';

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
  },
  row: {
    // margin: theme.spacing(1),
    paddingTop: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#f5f5f5',
      cursor: 'pointer'
    }
  },
  paper: {
    width: '100%',
    marginTop: theme.spacing(2),
    overflowX: 'auto',
    boxShadow: '0 0 1px 0 rgba(0,0,0,.22)',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  button: {
    boxShadow: 'none',
    fontFamily: 'ApercuMedium',
    marginTop: theme.spacing(4),
  },
}));

function a() {
  return alert('hi');
}

export default function Password() {
  const classes = useStyles();

  const date = new Date().toLocaleString('en-US');

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        User Groups
      </Typography>

      <Paper className={classes.paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="overline" className={classes.label} gutterBottom>
                Login
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="overline" className={classes.label} gutterBottom>
                Password
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="overline" className={classes.label} gutterBottom>
                Email
              </Typography>
            </TableCell>
            <TableCell align="right">
            <Typography variant="overline" className={classes.label} gutterBottom>
              Role
          </Typography>
            </TableCell>
            <TableCell align="right">
            <Typography variant="overline" className={classes.label} gutterBottom>
              Date Created
          </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className={classes.row}>
            <TableCell component="th" scope="row">bobby.darcy</TableCell>
            <TableCell align="right">•••••••••</TableCell>
            <TableCell align="right">bobby.darcy@company.com</TableCell>
            <TableCell align="right">Admin</TableCell>
            <TableCell align="right">01/01/2010</TableCell>
          </TableRow>
          <TableRow className={classes.row}>
          <TableCell component="th" scope="row">boris.chan</TableCell>
          <TableCell align="right">•••••••••</TableCell>
          <TableCell align="right">boris.chan@company.com</TableCell>
          <TableCell align="right">User</TableCell>
          <TableCell align="right">01/01/2013</TableCell>
        </TableRow>
        </TableBody>
      </Table>
    </Paper>

      <Button variant="contained" color="primary" className={classes.button}>
        Create New User
        <AddIcon className={classes.rightIcon}></AddIcon>
      </Button>

    </div>
  )
}