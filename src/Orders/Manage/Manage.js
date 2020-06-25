import React from "react";

import {
  makeStyles,
  Container,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@material-ui/core/";

import PageTitle from "../../Common/PageTitle";
import New from "./New";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    boxShadow: "0 0 11px #eaf0f6",
    borderRadius: "4px",
  },
  paper: {
    boxShadow: "0 0 1px 0 rgba(0,0,0,.22)",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "New",
    "Active",
    "Inventory",
    "Package",
    "Approve",
    "Fulfilled",
    "Delivered",
  ];
}

export default function Manage(props) {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const quit = () => {
    props.setPageControl({
      manage: false,
      root: true,
      purchaseOrder: false,
    });
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <New
            pageControl={props.pageControl}
            setPageControl={props.setPageControl}
            handleNext={handleNext}
          />
        );
      case 1:
        return "What is an ad group anyways?";
      case 2:
        return "This is the bit I really care about!";
      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <PageTitle
          title="Orders / Manage Order"
          route="/dashboard/orders"
          onClick={quit}
        />
        <Paper className={classes.root}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
        <Paper className={classes.root}>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  All steps completed
                </Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>{getStepContent(activeStep)}</div>
            )}
          </div>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
