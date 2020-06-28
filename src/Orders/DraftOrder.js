import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Paper, Typography } from "@material-ui/core/";

import PageTitle from "../Common/PageTitle";
import WarningModal from "../Common/WarningModal";
import TableBuilder from "../Common/TableBuilder";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 0 11px #eaf0f6",
    borderRadius: "4px",
    overflow: "hidden",
    border: "1px solid #eaf0f6",
  },
  title: {
    fontFamily: "ApercuMedium",
  },
}));

export default function DraftOrder(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const quitWarning = () => {
    handleOpen(true);
  };

  const quit = () => {
    props.setPageControl({
      manage: false,
      orderDetails: null,
      draftOrder: false,
      root: true,
    });
  };

  const modalDetails = {
    animationKey: "alertCircle",
    title: "Abandon Draft Order",
    subtitle: [
      "Leaving will return you to the Orders page. You will lose all progress on creating your Draft Order.",
      "You will have to start over to create new Draft Order.",
    ],
    action: "Abandon",
  };

  return (
    <Container maxWidth="lg">
      <PageTitle
        title="Orders / Create Draft Order"
        route="/dashboard/orders"
        onClick={quitWarning}
      />
      <WarningModal
        open={open}
        setOpen={setOpen}
        quit={quit}
        details={modalDetails}
      />
      <Typography variant="h6" className={classes.title}>
        Order Details
      </Typography>

      <TableBuilder />
    </Container>
  );
}
