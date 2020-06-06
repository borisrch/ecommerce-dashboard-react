import React from "react";
import clsx from "clsx";
import faker from "faker";

import {
  Container,
  Typography,
  Box,
  makeStyles,
  Select,
  MenuItem,
  IconButton,
  Grid,
  Avatar,
} from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreIcon from "@material-ui/icons/MoreVert";

import SearchIcon from "@material-ui/icons/Search";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

import PageTitle from "../Common/PageTitle";
import Member from "./Member";

const useStyles = makeStyles((theme) => ({
  menuText: {
    fontFamily: "ApercuMedium",
    fontSize: "0.875em",
    marginBottom: "1px",
    color: theme.palette.action.active,
  },
  select: {
    marginLeft: theme.spacing(1.5),
    fontSize: "0.875em",
    width: "75px",
  },
  selectGroup: {
    // height: "50px",
  },
  button: {
    margin: theme.spacing(1),
  },
  avatar: {
    marginLeft: theme.spacing(1),
  },
  root: {
    boxShadow: "0 0 11px #eaf0f6",
  },
  tableHead: {
    fontFamily: "ApercuMedium",
    fontSize: "0.875rem",
    color: "#525f7f",
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: grey[50],
  },
  tableHeadAvatar: {
    width: "50px",
  },
  tableHeadCell: {
    padding: theme.spacing(0),
  },
  active: {
    color: theme.palette.primary.main,
  },
  tableRow: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderLeftWidth: "4px",
    borderBottomWidth: "0px",
    borderTopWidth: "0px",
    borderRightWidth: "0px",
    "&:hover": {
      borderColor: theme.palette.primary.light,
      borderStyle: "solid",
      borderLeftWidth: "4px",
      backgroundColor: blue[50],
    },
  },
  tableHeadRow: {
    backgroundColor: grey[50],
  },
}));

const populate = (n = 1) => {
  const members = [];

  for (let i = 0; i < n; i++) {
    members.push({
      id: i,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      avatar: faker.image.avatar(),
      role: faker.name.jobTitle(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
      description: faker.hacker.phrase(),
    });
  }

  return members;
};

export default function Team() {
  const classes = useStyles();

  const [showGrid, setShowGrid] = React.useState(true);
  const [sortBy, setSortBy] = React.useState("All");

  const members = populate(7);

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  function DataDisplay() {
    function GridView() {
      return (
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          {members.map((member) => (
            <Grid item xs={3} key={member.id}>
              <Member member={member} />
            </Grid>
          ))}
        </Grid>
      );
    }

    function TableView() {
      return (
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.tableHeadRow}>
                <TableCell
                  align="right"
                  className={classes.tableHeadAvatar}
                ></TableCell>
                <TableCell align="left" className={classes.tableHeadCell}>
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Typography className={classes.tableHead}>Name</Typography>
                    <IconButton style={{ marginLeft: "1px" }}>
                      <UnfoldMoreIcon
                        fontSize="small"
                        //   className={clsx(sortData.id > -1 && classes.active)}
                      />
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell align="left" className={classes.tableHead}>
                  Role
                </TableCell>
                <TableCell align="left" className={classes.tableHead}>
                  Email
                </TableCell>
                <TableCell align="left" className={classes.tableHead}>
                  Phone
                </TableCell>
                <TableCell
                  align="left"
                  className={classes.tableHead}
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id} className={classes.tableRow}>
                  <TableCell align="right">
                    <Avatar
                      aria-label="avatar"
                      className={classes.avatar}
                      src={member.avatar}
                    ></Avatar>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {member.firstName} {member.lastName}
                  </TableCell>
                  <TableCell align="left">{member.role}</TableCell>
                  <TableCell align="left">{member.email}</TableCell>
                  <TableCell align="left">{member.phone}</TableCell>
                  <TableCell align="left">
                    <IconButton aria-label="settings">
                      <MoreIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }

    return showGrid ? <GridView /> : <TableView />;
  }

  return (
    <Container maxWidth="lg">
      <PageTitle title="Team" />
      <Box display="flex">
        <Box display="flex" flexGrow={1}>
          <IconButton
            className={clsx(classes.button, showGrid && classes.active)}
            onClick={() => setShowGrid(true)}
          >
            <ViewModuleIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.button, !showGrid && classes.active)}
            onClick={() => setShowGrid(false)}
          >
            <ViewHeadlineIcon />
          </IconButton>
          <IconButton className={classes.button}>
            <SearchIcon />
          </IconButton>
        </Box>
        <Box
          display="flex"
          flexGrow={1}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Typography className={classes.menuText}>Sort by:</Typography>
          <Select
            className={classes.select}
            value={sortBy}
            onChange={handleChange}
            IconComponent={ExpandMoreIcon}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Name"}>Name</MenuItem>
            <MenuItem value={"Role"}>Role</MenuItem>
          </Select>
        </Box>
      </Box>
      <DataDisplay />
    </Container>
  );
}
