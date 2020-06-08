import React from "react";
import {
  Container,
  Box,
  makeStyles,
  Avatar,
  Typography,
  Divider,
  TextField,
  Grid,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 20px 60px -2px rgba(27,33,58,.4)",
    padding: theme.spacing(2, 4, 3),
    borderRadius: "8px",
    width: 375,
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  name: {
    marginTop: theme.spacing(2),
    fontFamily: "ApercuBold",
  },
  role: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  description: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  resize: {
    fontSize: "0.875em",
  },
}));

export default function Profiles(props) {
  const classes = useStyles();

  const {
    id,
    firstName,
    lastName,
    avatar,
    role,
    email,
    phone,
    location,
    description,
  } = props.member;

  return (
    <Box display="block" className={classes.paper}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Avatar alt="" src={props.member.avatar} className={classes.large} />
      </Box>
      <Typography variant="h6" className={classes.name} align="center">
        {`${firstName} ${lastName}`}
      </Typography>
      <Typography variant="subtitle2" className={classes.role} align="center">
        {`${role}`}
      </Typography>
      <Divider />
      <TextField
        label="Personal Description"
        multiline
        rowsMax={4}
        fullWidth
        defaultValue={description}
        className={classes.description}
        InputProps={{
          classes: {
            input: classes.resize,
          },
        }}
      />
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField
            label="Email"
            defaultValue={email}
            fullWidth
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Phone"
            defaultValue={phone}
            fullWidth
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
          />
        </Grid>
      </Grid>
      {/* <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary" disableElevation>
          Save
        </Button>
      </Box> */}
    </Box>
  );
}
