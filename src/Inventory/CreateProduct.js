import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import AddIcon from "@material-ui/icons/Add";
import PublishIcon from "@material-ui/icons/Publish";

const useStyles = makeStyles((theme) => ({
  button: {
    boxShadow: "none",
    fontFamily: "ApercuMedium",
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
}));

export default function CreateProduct(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={props.createProduct}
        style={{ marginRight: "1em" }}
      >
        Import Product
        <PublishIcon className={classes.rightIcon}>Import Product</PublishIcon>
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={props.createProduct}
      >
        Create New Product
        <AddIcon className={classes.rightIcon}>Create New Product</AddIcon>
      </Button>
    </React.Fragment>
  );
}
