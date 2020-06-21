import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";

import { getThemeProps } from "@material-ui/styles";
import DoneIcon from "@material-ui/icons/Done";
import ErrorIcon from "@material-ui/icons/Error";
import CachedIcon from "@material-ui/icons/Cached";
import ConfirmedIcon from "@material-ui/icons/AssignmentLate";
import ShippingIcon from "@material-ui/icons/LocalShipping";
import PackingIcon from "@material-ui/icons/MoveToInbox";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import { Typography, Box, IconButton } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 0 11px #eaf0f6",
    borderRadius: "4px",
    overflow: "hidden",
    border: "1px solid #eaf0f6",
  },
  table: {
    minWidth: 650,
  },
  tableHead: {
    fontFamily: "ApercuMedium",
    fontSize: "0.875rem",
    color: "#525f7f",
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  tableHeadCell: {
    padding: theme.spacing(1),
  },
  tableHeadRow: {
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderStyle: "solid",
    borderLeftWidth: "3px",
  },
  tableFoot: {
    fontFamily: "ApercuMedium",
    fontSize: "0.875rem",
    color: "#525f7f",
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
  tableRow: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderLeftWidth: "3px",
    borderBottomWidth: "0px",
    borderTopWidth: "0px",
    borderRightWidth: "3px",
    "&:hover": {
      borderColor: theme.palette.primary.light,
      borderStyle: "solid",
      borderLeftWidth: "3px",
      backgroundColor: blue[50],
      borderRightColor: blue[50],
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
  active: {
    color: theme.palette.primary.main,
  },
  even: {
    backgroundColor: "#fff",
  },
}));

export default function SimpleTable(props) {
  const classes = useStyles();

  const [lastUpdatedTime, setLastUpdatedTime] = React.useState("N/A");
  React.useEffect(() => {
    // props.dispatch(fetchProducts());
    setLastUpdatedTime(`${new Date().toLocaleString()}`);
  }, []);

  const [data, setData] = React.useState(props.orders);

  /* -1: unsorted/unused
      0: is NOT ascending
      1: is ascending
  */
  const [sortData, setSortData] = React.useState({
    id: -1,
  });

  const sortById = () => {
    const dataset = [...data];

    if (sortData.id < 1) {
      console.log("Unsorted. Sorting By Ascending");
      dataset.sort(function (a, b) {
        return a.orderId - b.orderId;
      });
      setSortData({
        ...sortData,
        id: 1,
      });
    } else {
      console.log("Sorted. Sorting By Descending");
      dataset.reverse();
      setSortData({
        ...sortData,
        id: 0,
      });
    }
    setData(dataset);
  };

  // Placeholder hooks for pagination.
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

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
  }

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.tableHeadRow}>
              <TableCell className={classes.tableHeadCell}>
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Typography className={classes.tableHead}>
                    Order ID
                  </Typography>
                  <IconButton style={{ marginLeft: "1px" }} onClick={sortById}>
                    <UnfoldMoreIcon
                      fontSize="small"
                      className={clsx(sortData.id > -1 && classes.active)}
                    />
                  </IconButton>
                </Box>
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                Created
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                Customer
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                Email
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                Fulfillment
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                Total
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                Status
              </TableCell>
              <TableCell className={classes.tableHead} align="left">
                Last Updated
              </TableCell>
              <TableCell className={classes.tableHead} align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={row.orderId}
                className={classes.tableRow}
                onClick={(row) =>
                  props.pageControl({ manage: true, orderDetails: data[index] })
                }
              >
                <TableCell component="th" scope="row">
                  {row.orderId}
                </TableCell>
                <TableCell align="left">{row.created}</TableCell>
                <TableCell align="left">{`${row.firstName} ${row.lastName}`}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">
                  <Fulfillment fulfillment={row.fulfillment} />
                </TableCell>
                <TableCell align="left">{row.total}</TableCell>
                <TableCell align="left">
                  <StatusChip status={row.status} />
                </TableCell>
                <TableCell align="left">{row.updated}</TableCell>
                <TableCell align="left">
                  <IconButton size="small" aria-label="settings">
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      <div style={{ width: "100%", marginTop: "1em" }}>
        <Box display="flex">
          <Box width="50%">
            {/* <Typography className={classes.tableFoot}>
              1-{data.length} of {Math.floor(Math.random() * 100)} results
            </Typography> */}
            <Pagination count={10} page={page} onChange={handleChange} />
          </Box>
          <Box width="50%" textAlign="right">
            <Typography className={classes.tableFoot}>
              Orders up to date. Last retrieved at {lastUpdatedTime}
            </Typography>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
}
