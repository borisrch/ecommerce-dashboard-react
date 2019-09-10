import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import blue from "@material-ui/core/colors/blue";

import Search from './Search';

const drawerWidth = 120;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    zIndex: 0,
    backgroundColor: blue[500],
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: {
    minWidth: 35
  },
  text: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2, 4, 3),
    backgroundColor: '#fff'
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Drawer variant="permanent" >
        <div className={classes.toolbar}></div>
        <List>
          <ListItem button alignItems="center" onClick={handleOpen}>
            <ListItemIcon className={classes.icon}>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.text}
              primary={<Typography variant="button" style={{ color: 'rgba(0, 0, 0, 0.54)' }}> Search </Typography>} />
          </ListItem>

          <ListItem button alignItems="center">
            <ListItemIcon className={classes.icon}>
              <EditIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.text}
              primary={<Typography variant="button" style={{ color: 'rgba(0, 0, 0, 0.54)' }}> Update </Typography>} />
          </ListItem>

          <ListItem button alignItems="center">
            <ListItemIcon className={classes.icon}>
              <MailIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.text}
              primary={<Typography variant="button" style={{ color: 'rgba(0, 0, 0, 0.54)' }}> Message </Typography>} />
          </ListItem>

        </List>
        <Divider />
        <List>
          <ListItem button alignItems="center">
            <ListItemIcon className={classes.icon}>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.text}
              primary={<Typography variant="button" style={{ color: 'rgba(0, 0, 0, 0.54)' }}> Archive </Typography>} />
          </ListItem>

          <ListItem button alignItems="center">
            <ListItemIcon className={classes.icon}>
              <RefreshIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.text}
              primary={<Typography variant="button" style={{ color: 'rgba(0, 0, 0, 0.54)' }}> Refresh </Typography>} />
          </ListItem>
        </List>
      </Drawer>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 250,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Search />
          </div>
        </Fade>
      </Modal>

    </div>
  );
}