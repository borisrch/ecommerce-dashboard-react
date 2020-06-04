import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Container,
  Typography,
  TextField,
  Box,
  Button,
  IconButton,
  Popover,
} from "@material-ui/core";

import DoneIcon from "@material-ui/icons/Done";
import PostAdd from "@material-ui/icons/PostAdd";

import Metadata from "./Metadata";

const useStyles = makeStyles((theme) => ({
  textfield: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  root: {
    padding: theme.spacing(4),
  },
  title: {
    fontFamily: "ApercuMedium",
    color: theme.palette.action.active,
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    fontFamily: "ApercuMedium",
    color: theme.palette.action.active,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  button: {
    boxShadow: "none",
    fontFamily: "ApercuMedium",
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  active: {
    color: theme.palette.primary.main,
  },
  popover: {
    padding: theme.spacing(2),
  },
}));

export default function New(props) {
  const classes = useStyles();

  // TODO: Import the schema instead of manually deconstructing
  const {
    orderId,
    created,
    firstName,
    lastName,
    email,
    address,
    city,
    country,
    zip,
    fulfillment,
    total,
    status,
    updated,
  } = props.pageControl.orderDetails;

  const handleNext = () => {
    // Send RESTful call to update Order state on backend.
    props.handleNext();
  };

  return (
    <Box>
      <form className={classes.root}>
        <Metadata pageControl={props.pageControl} />
        <Typography variant="h6" className={classes.subtitle} gutterBottom>
          Customer Information
        </Typography>
        <Box>
          <TextField
            id="customer-first-name"
            label="First Name"
            defaultValue={firstName}
            InputProps={{
              readOnly: true,
            }}
            className={classes.textfield}
            variant="outlined"
          />
          <TextField
            id="customer-first-name"
            label="Last Name"
            defaultValue={lastName}
            InputProps={{
              readOnly: true,
            }}
            className={classes.textfield}
            variant="outlined"
          />
          <TextField
            id="customer-email"
            label="Email"
            style={{ minWidth: "380px" }}
            defaultValue={email}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            className={classes.textfield}
          />
        </Box>
        <Box>
          <TextField
            id="customer-address"
            label="Delivery Address"
            style={{ minWidth: "380px" }}
            defaultValue={address}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            className={classes.textfield}
          />
          <TextField
            id="customer-city"
            label="City"
            style={{ minWidth: "380px" }}
            defaultValue={city}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            className={classes.textfield}
          />
        </Box>
        <Box>
          <TextField
            id="customer-zip"
            label="ZIP/Postal Code"
            defaultValue={zip}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            className={classes.textfield}
          />
          <TextField
            id="customer-country"
            label="Country"
            defaultValue={country}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            className={classes.textfield}
          />
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleNext}
          >
            Begin Work
            <PostAdd className={classes.rightIcon} />
          </Button>
        </Box>
      </form>
    </Box>
  );
}
