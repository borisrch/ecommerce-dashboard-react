import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import UseAnimations from "react-useanimations";
import {
  Modal,
  Fade,
  Box,
  Typography,
  Backdrop,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 20px 60px -2px rgba(27,33,58,.4)",
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    borderRadius: "8px",
    maxWidth: "450px",
  },
  title: {
    fontFamily: "ApercuMedium",
    fontSize: "1.5em",
    marginLeft: theme.spacing(2),
    color: "#b71c1c",
  },
  icon: {
    color: "#b71c1c",
    marginBottom: "-4px",
  },
  circle: {
    backgroundColor: "#ffcdd2",
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: theme.spacing(2),
  },
  actionBox: {
    marginTop: theme.spacing(4),
  },
  abandon: {
    marginLeft: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    backgroundColor: "#ffcdd2",
    color: "#b71c1c",
    // margin: theme.spacing(1),
    borderRadius: "30px",
    "&:hover": {
      backgroundColor: "#b71c1c",
      color: "white",
    },
  },
}));

export default function WarningModal(props) {
  const { open, setOpen, quit } = props;

  const defaultDetails = {
    animationKey: "alertCircle",
    title: "Modal Title",
    subtitle: ["Subtitle1", "Subtitle2"],
    action: "Quit",
  };

  const details = props.details || defaultDetails;

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Box display="flex" alignItems="center">
            <div className={classes.circle}>
              <UseAnimations
                className={classes.icon}
                animationKey={details.animationKey}
                size={56}
              />
            </div>
            <Typography className={classes.title}>{details.title}</Typography>
          </Box>
          {details.subtitle.map((text, key) => (
            <Typography key={key} className={classes.text} variant="subtitle2">
              {text}
            </Typography>
          ))}
          <Box
            display="flex"
            justifyContent="flex-end"
            className={classes.actionBox}
          >
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={quit} className={classes.abandon}>
              {details.action}
            </Button>
          </Box>
        </div>
      </Fade>
    </Modal>
  );
}
