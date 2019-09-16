import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Blue from '@material-ui/core/colors/blueGrey';
import Chip from '@material-ui/core/Chip';
import { getThemeProps } from '@material-ui/styles';
import DoneIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/Error';
import CachedIcon from '@material-ui/icons/Cached';
import ConfirmedIcon from '@material-ui/icons/AssignmentLate';
import ShippingIcon from '@material-ui/icons/LocalShipping';
import PackingIcon from '@material-ui/icons/MoveToInbox';

import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    // boxShadow: '0 0 1px 0 rgba(0,0,0,.22)',
    boxShadow: '0 0 11px #eaf0f6',
  },
  table: {
    minWidth: 650,
  },
  button: {
    margin: theme.spacing(1),
  },
  primaryButton: {
    backgroundColor: '#2196f3',
  },
  input: {
    display: 'none',
  },
  row: {
    '&:hover': {
      backgroundColor: '#f5f5f5',
      cursor: 'pointer'
    }
  },
  paidChip: {
    backgroundColor: '#66BB6A',
    color: '#fff',
  },
  unfulfilledChip: {
    backgroundColor: '#F44336',
    color: '#fff',
  }
}));

function createData(orderId, created, customer, email, fulfillment, total, status, updated) {
  return { orderId, created, customer, email, fulfillment, total, status, updated };
}

const rows = [
  createData(1, new Date().toLocaleDateString(), 'Rick Astley', 'rickastley@gmail.com', 'Processing', 240, 'Paid', 'Today'),
  createData(2, new Date().toLocaleDateString(), 'Bob Martin', 'bobmartin@live.com', 'Confirmed', 580, 'Dispute', 'Today'),
  createData(3, new Date().toLocaleDateString(), 'Evan Berry', 'evanberry@gmail.com', 'Packing', 1245, 'Paid', 'Today'),
  createData(4, new Date().toLocaleDateString(), 'Perry Ortiz', 'perryotiz@gmail.com', 'Shipped', 75, 'Paid', 'Today'),
  createData(5, new Date().toLocaleDateString(), 'Tiffany Williams', 'verda2014@hotmail.com', 'Unfulfilled', 2650, 'Paid', 'Today'),
];

export default function SimpleTable() {
  const classes = useStyles();

  const [data, setData] = React.useState(rows);

  const updateData = () => {
    const rows = [
      createData(3, new Date().toLocaleDateString(), 'Test', 'Unfulfilled', 240, 'Paid', 'Today'),
    ]

    setData(rows);
  }

  function StatusChip(props) {
    if (props.status === 'Paid') {
      return (
        <Typography variant="body2">Paid</Typography>
      )
    } else {
      return (
        <Chip
          label={props.status}
          style={{color: '#fff', backgroundColor: '#3F51B5'}}
        />
      )
    }
  }

  function Fulfillment(props) {

    switch (props.fulfillment) {
      case 'Processing':
        return (
        <Chip
          icon={<CachedIcon style={{color: '#fff'}} />}
          label={props.fulfillment}
          style={{color: '#fff', backgroundColor: '#78909c', paddingLeft: 2}}
        />
      )

      case 'Confirmed':
        return (
        <Chip
          icon={<ConfirmedIcon style={{color: '#fff'}} />}
          label={props.fulfillment}
          style={{color: '#fff', backgroundColor: '#fbc02d', paddingLeft: 2}}
        />
      )

      case 'Packing':
        return (
        <Chip
          icon={<PackingIcon style={{color: '#fff'}} />}
          label={props.fulfillment}
          style={{color: '#fff', backgroundColor: '#8BC34A', paddingLeft: 2}}
        />
      )

      case 'Shipped':
        return (
        <Chip
          icon={<ShippingIcon style={{color: '#fff'}} />}
          label={props.fulfillment}
          style={{color: '#fff', backgroundColor: '#03A9F4', paddingLeft: 2}}
        />
      )

      case 'Unfulfilled':
        return (
        <Chip
          icon={<ErrorIcon style={{color: '#fff'}} />}
          label={props.fulfillment}
          style={{color: '#fff', backgroundColor: '#FF5722', paddingLeft: 2}}
        />
      )

      default:
        return (
        <Chip
          icon={<DoneIcon style={{color: '#fff'}} />}
          label={props.fulfillment}
        />
      )
    }

    // if (props.fulfillment === 'Processing') {
    //   return (
    //     <Chip
    //       icon={<DoneIcon style={{color: '#fff'}} />}
    //       label={props.fulfillment}
    //       className={classes.unfulfilledChip}
    //     />
    //   )
    // } else {
    //   return (
    //     <Chip
    //       icon={<DoneIcon style={{color: '#fff'}} />}
    //       label={props.fulfillment}
    //     />
    //   )
    // }
  }

  return (
    <Paper className={classes.root}>
      <Button variant="outlined" color="primary" className={classes.button}>All Orders</Button>
      <Button variant="outlined" className={classes.button}>Active</Button>
      <Button variant="outlined" className={classes.button}>Unfulfilled</Button>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell align="right">Created</TableCell>
            <TableCell align="right">Customer</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Fulfillment</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.orderId} className={classes.row}>
              <TableCell component="th" scope="row">
                {row.orderId}
              </TableCell>
              <TableCell align="right">{row.created}</TableCell>
              <TableCell align="right">{row.customer}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
                <Fulfillment fulfillment={row.fulfillment}/>
              </TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right">
                <StatusChip status={row.status}/>
              </TableCell>
              <TableCell align="right">{row.updated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </Paper>
  );
}