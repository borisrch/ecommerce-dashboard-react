import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function PurchaseOrder(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

  const WarningModal = () => {
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
            <Typography>Abandon Purchase Order?</Typography>
            <Typography>
              Leaving will return you to the Orders page. You will lose the
              progress on creating your Purchase Order.
            </Typography>
            <Typography>
              You will have to start over to create new Purchase Order.
            </Typography>
            <Box display="flex" justifyContent="flex-end">
              <Button>Cancel</Button>
              <Button onClick={quit}>Leave</Button>
            </Box>
          </div>
        </Fade>
      </Modal>
    );
  };

  return (
    <Container maxWidth="lg">
      <PageTitle
        title="Orders / Create Purchase Order"
        route="/dashboard/orders"
        onClick={quitWarning}
      />
      <WarningModal />
    </Container>
  );
}
