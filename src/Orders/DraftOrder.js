import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Container } from "@material-ui/core/";

import PageTitle from "../Common/PageTitle";
import WarningModal from "../Common/WarningModal";

const useStyles = makeStyles((theme) => ({}));

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
    </Container>
  );
}
