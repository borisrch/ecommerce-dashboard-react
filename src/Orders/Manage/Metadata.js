import React from "react";
import faker from "faker";

import { Typography, TextField, Box, makeStyles } from "@material-ui/core";

import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  textfield: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  title: {
    fontFamily: "ApercuMedium",
    color: theme.palette.action.active,
    marginBottom: theme.spacing(2),
  },
}));

export default function Metadata(props) {
  const classes = useStyles();

  // TODO: Add state to <Autocomplete />

  const testProps = {
    ...props.pageControl.orderDetails,
    assignedTo: `${faker.name.firstName()} ${faker.name.lastName()}`,
    // inventorySignoff: `${faker.name.firstName()} ${faker.name.lastName()}`,
    packingSignoff: `${faker.name.firstName()} ${faker.name.lastName()}`,
  };

  const {
    orderId,
    created,
    assignedTo,
    inventorySignoff,
    packingSignoff,
  } = testProps;

  const managers = [
    { name: "Boris Chan", email: "boris@shopcast.com" },
    { name: "Conan O'Brien", email: "conan@shopcast.com" },
    { name: "Linus Sebastian", email: "linus@shopcast.com" },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" className={classes.title} gutterBottom>
        Order Metadata
      </Typography>
      <Box>
        <TextField
          id="order-id"
          label="Unique ID"
          defaultValue={orderId}
          InputProps={{
            readOnly: true,
          }}
          disabled
          size="small"
          className={classes.textfield}
        />
        <TextField
          id="state"
          label="State"
          defaultValue="New"
          InputProps={{
            readOnly: true,
          }}
          disabled
          size="small"
          className={classes.textfield}
        />
        <TextField
          id="state"
          label="Order Placed"
          defaultValue={created}
          InputProps={{
            readOnly: true,
          }}
          disabled
          size="small"
          className={classes.textfield}
        />
        {assignedTo && (
          <TextField
            id="state"
            label="Assigned To"
            defaultValue={assignedTo}
            InputProps={{
              readOnly: true,
            }}
            disabled
            size="small"
            className={classes.textfield}
          />
        )}
        <div>
          {/* {inventorySignoff && (
            <Autocomplete
              style={{ display: "inline-flex" }}
              options={managers.map((manager) => manager.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label=""
                  margin="normal"
                  size="small"
                  label="Inventory Signoff"
                  className={classes.textfield}
                  style={{ width: 154 }}
                />
              )}
            />
          )}
          {packingSignoff && (
            <Autocomplete
              style={{ display: "inline-flex" }}
              options={managers.map((manager) => manager.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label=""
                  margin="normal"
                  size="small"
                  label="Packing Signoff"
                  className={classes.textfield}
                  style={{ width: 154 }}
                />
              )}
            />
          )} */}
        </div>
      </Box>
    </React.Fragment>
  );
}
