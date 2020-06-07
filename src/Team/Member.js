import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CommentIcon from "@material-ui/icons/Comment";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ExpandMoreIcon from "@material-ui/icons/MoreHoriz";
import Divider from "@material-ui/core/Divider";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";

import getAvatar from "../Common/AnimalAvatars";

const useStyles = makeStyles((theme) => ({
  card: {
    // boxShadow: '0 0 1px 0 rgba(0,0,0,.28)',
    boxShadow: "0 0 11px #eaf0f6",
    borderColor: "#fff",
    borderStyle: "solid",
    borderBottomWidth: "4px",
    borderLeftWidth: "0px",
    borderTopWidth: "0px",
    borderRightWidth: "0px",
    "&:hover": {
      borderColor: theme.palette.primary.light,
      borderStyle: "solid",
      borderBottomWidth: "4px",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    marginLeft: "auto",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  button: {
    marginLeft: "auto",
  },
  name: {
    fontFamily: "ApercuMedium",
  },
  subtitle: {
    color: theme.palette.action.active,
  },
}));

export default function Member(props) {
  const classes = useStyles();

  const handleClick = () => {
    if (props.openModal) {
      props.openModal(props.member);
    }
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="avatar"
            className={classes.avatar}
            src={props.member.avatar}
          ></Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <ExpandMoreIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.date}
      />
      <CardContent style={{ paddingTop: "0px" }}>
        <Typography variant="h6" className={classes.name}>
          {props.member.firstName} {props.member.lastName}
        </Typography>
        <Typography variant="subtitle2" className={classes.subtitle}>
          {props.member.role}
        </Typography>
        <Divider light style={{ marginTop: "0.5em", marginBottom: "0.5em" }} />
        <Typography variant="subtitle2" className={classes.subtitle}>
          {props.member.email}
        </Typography>
        <Typography variant="subtitle2" className={classes.subtitle}>
          {props.member.phone}
        </Typography>
      </CardContent>
    </Card>
  );
}
