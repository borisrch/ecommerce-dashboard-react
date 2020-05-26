import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Blue from "@material-ui/core/colors/blueGrey";
import Chip from "@material-ui/core/Chip";
import blue from "@material-ui/core/colors/blue";

import { getThemeProps } from "@material-ui/styles";
import DoneIcon from "@material-ui/icons/Done";
import ErrorIcon from "@material-ui/icons/Error";
import CachedIcon from "@material-ui/icons/Cached";
import ConfirmedIcon from "@material-ui/icons/AssignmentLate";
import ShippingIcon from "@material-ui/icons/LocalShipping";
import PackingIcon from "@material-ui/icons/MoveToInbox";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

import { Typography, Box, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
    // boxShadow: '0 0 1px 0 rgba(0,0,0,.22)',
    boxShadow: "0 0 11px #eaf0f6",
  },
  table: {
    minWidth: 650,
  },
  tableHead: {
    fontFamily: "ApercuMedium",
    fontSize: "0.875rem",
    color: '#525f7f',
  },
  tableHeadCell: {
    padding: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  primaryButton: {
    backgroundColor: "#2196f3",
  },
  input: {
    display: "none",
  },
  row: {
    "&:hover": {
      // backgroundColor: '#f5f5f5',
      backgroundColor: blue[50],
      cursor: "pointer",
    },
  },
  paidChip: {
    backgroundColor: "#66BB6A",
    color: "#fff",
  },
  unfulfilledChip: {
    backgroundColor: "#F44336",
    color: "#fff",
  },
}));

function createData(
  orderId,
  created,
  customer,
  email,
  fulfillment,
  total,
  status,
  updated
) {
  return {
    orderId,
    created,
    customer,
    email,
    fulfillment,
    total,
    status,
    updated,
  };
}

const rows = [
  createData(
    6,
    new Date().toLocaleDateString(),
    "Rick Astley",
    "rickastley@gmail.com",
    "Processing",
    240,
    "Paid",
    "Today"
  ),
  createData(
    7,
    new Date().toLocaleDateString(),
    "Bob Martin",
    "bobmartin@live.com",
    "Confirmed",
    580,
    "Dispute",
    "Today"
  ),
  createData(
    3,
    new Date().toLocaleDateString(),
    "Evan Berry",
    "evanberry@gmail.com",
    "Packing",
    1245,
    "Paid",
    "Today"
  ),
  createData(
    4,
    new Date().toLocaleDateString(),
    "Perry Ortiz",
    "perryotiz@gmail.com",
    "Shipped",
    75,
    "Paid",
    "Today"
  ),
  createData(
    5,
    new Date().toLocaleDateString(),
    "Tiffany Williams",
    "verda2014@hotmail.com",
    "Unfulfilled",
    2650,
    "Paid",
    "Today"
  ),
];

export default function SimpleTable() {
  const classes = useStyles();

  const [data, setData] = React.useState(rows);

  /* -1: unsorted/unused
      0: is NOT ascending
      1: is ascending
  */
  const [sortData, setSortData] = React.useState({
    id: -1, 
  });

  const updateData = () => {
    const rows = [
      createData(
        3,
        new Date().toLocaleDateString(),
        "Test",
        "Unfulfilled",
        240,
        "Paid",
        "Today"
      ),
    ];

    setData(rows);
  };

  const sortById = () => {
    const dataset = [...data];

    if (sortData.id < 1) {
      console.log('Unsorted. Sorting By Ascending');
      dataset.sort(function(a, b) {
        return a.orderId - b.orderId;
      });
      setSortData({
        ...sortData,
        id: 1
      });
    } else {
      console.log('Sorted. Sorting By Descending');
      dataset.reverse();
      setSortData({
        ...sortData,
        id: 0
      });
    }
    setData(dataset);
  }

  function StatusChip(props) {
    if (props.status === "Paid") {
      return <Typography variant="body2">Paid</Typography>;
    } else {
      return (
        <Chip
          label={props.status}
          style={{ color: "#1A237E", backgroundColor: "#C5CAE9" }}
        />
      );
    }
  }

  function Fulfillment(props) {
    switch (props.fulfillment) {
      case "Processing":
        return (
          <Chip
            icon={<CachedIcon style={{ color: "#263238" }} fontSize="small" />}
            label={props.fulfillment}
            style={{
              color: "#263238",
              backgroundColor: "#ECEFF1",
              paddingLeft: 2,
            }}
          />
        );

      case "Confirmed":
        return (
          <Chip
            icon={
              <ConfirmedIcon style={{ color: "#FF6F00" }} fontSize="small" />
            }
            label={props.fulfillment}
            style={{
              color: "#FF6F00",
              backgroundColor: "#FFECB3",
              paddingLeft: 2,
            }}
          />
        );

      case "Packing":
        return (
          <Chip
            icon={<PackingIcon style={{ color: "#33691E" }} fontSize="small" />}
            label={props.fulfillment}
            style={{
              color: "#33691E",
              backgroundColor: "#DCEDC8",
              paddingLeft: 2,
            }}
          />
        );

      case "Shipped":
        return (
          <Chip
            icon={
              <ShippingIcon style={{ color: "#0D47A1" }} fontSize="small" />
            }
            label={props.fulfillment}
            style={{
              color: "#0D47A1",
              backgroundColor: "#BBDEFB",
              paddingLeft: 2,
            }}
          />
        );

      case "Unfulfilled":
        return (
          <Chip
            icon={<ErrorIcon style={{ color: "#b71c1c" }} fontSize="small" />}
            label={props.fulfillment}
            style={{
              color: "#b71c1c",
              backgroundColor: "#ffcdd2",
              paddingLeft: 2,
            }}
          />
        );

      default:
        return (
          <Chip
            icon={<DoneIcon style={{ color: "#fff" }} fontSize="small" />}
            label={props.fulfillment}
          />
        );
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
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeadCell}> 
              <Box display="flex" justifyContent="flex-start" alignItems="center">
                <Typography className={classes.tableHead}>Order ID</Typography>
                <IconButton style={{marginLeft: '2px'}} onClick={sortById}>
                  <UnfoldMoreIcon fontSize="small" />
                </IconButton>
              </Box>
            </TableCell>
            <TableCell className={classes.tableHead} align="right">
              Created
            </TableCell>
            <TableCell className={classes.tableHead} align="right">
              Customer
            </TableCell>
            <TableCell className={classes.tableHead} align="right">
              Email
            </TableCell>
            <TableCell className={classes.tableHead} align="right">
              Fulfillment
            </TableCell>
            <TableCell className={classes.tableHead} align="right">
              Total
            </TableCell>
            <TableCell className={classes.tableHead} align="right">
              Status
            </TableCell>
            <TableCell className={classes.tableHead} align="right">
              Last Updated
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.orderId} className={classes.row}>
              <TableCell component="th" scope="row">
                {row.orderId}
              </TableCell>
              <TableCell align="right">{row.created}</TableCell>
              <TableCell align="right">{row.customer}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
                <Fulfillment fulfillment={row.fulfillment} />
              </TableCell>
              <TableCell align="right">{row.total}</TableCell>
              <TableCell align="right">
                <StatusChip status={row.status} />
              </TableCell>
              <TableCell align="right">{row.updated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
