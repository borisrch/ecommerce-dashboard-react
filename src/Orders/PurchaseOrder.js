import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import UseAnimations from "react-useanimations";

import {
  Typography,
  Paper,
  IconButton,
  Button,
  Container,
  Box,
  Tooltip,
  Modal,
  Fade,
  Backdrop,
} from "@material-ui/core/";

import PageTitle from "../Common/PageTitle";
import WarningModal from "../Common/WarningModal";
import { lorem } from "faker";

const useStyles = makeStyles((theme) => ({}));

export default function PurchaseOrder(props) {
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
      purchaseOrder: false,
      root: true,
    });
  };

  const modalDetails = {
    animationKey: "alertCircle",
    title: "Modal Title",
    subtitle: [
      "Leaving will return you to the Orders page. You will lose all progress on creating your Purchase Order.",
      "You will have to start over to create new Purchase Order.",
    ],
    action: "Abandon",
  };

  return (
    <Container maxWidth="lg">
      <PageTitle
        title="Orders / Create Purchase Order"
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
