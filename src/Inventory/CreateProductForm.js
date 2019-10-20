import React from "react";
import { Container, Box, makeStyles, Button, Stepper, Step, StepLabel, Grid } from "@material-ui/core";

import Basics from './Form/Basics';

const useStyles = makeStyles(theme => ({
  grid: {
    flexGrow: 1,
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  box: {
  },
  root: {
    width: "80vw",
    overflow: "scroll"
  },
  formControl: {
    minWidth: 120,
    marginTop: theme.spacing(2)
  },
  button: {
    boxShadow: 'none',
  },
  content: {
    minHeight: 400,
  }
}));

function getSteps() {
  return ['Basics', 'Media', 'Pricing', 'Shipping', 'Inventory'];
}

export default function CreateProductForm() {
  const classes = useStyles();

  const [product, setProduct] = React.useState({
    name: '',
    brand: '',
    description: '',
    category: '',
  });

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <Basics setProduct={setProduct} />;
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'Uknown stepIndex';
    }
  }


  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container maxWidth="lg" className={classes.root}>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <Box className={classes.content}>
        {getStepContent(activeStep)}
      </Box>

      <Grid container style={{ marginTop: '2em' }}>
        <Grid item xs={6}>
          <Button variant="outlined" color="secondary" className={classes.button}>
            Quit
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="flex-end">
            {activeStep > 0 ? <Button color="primary" className={classes.button} style={{ marginRight: '1em' }} onClick={handleBack}>Back</Button> : null}
            {activeStep === steps.length - 1 ?
              (
                <Button variant="contained" color="primary" className={classes.button}>
                  Finish
                </Button>
              ) : (
                <Button variant="contained" color="primary" className={classes.button} onClick={handleNext}>
                  Next
                </Button>
              )}
          </Box>
        </Grid>
      </Grid>



      { /* 

      <Grid container className={classes.grid} spacing={4}>
        <Grid item className={classes.box} xs={4}>
          <Box>
            <Typography variant="h5">Pricing</Typography>
            <Typography variant="subtitle1"></Typography>
          </Box>
        </Grid>
        <Grid container item className={classes.box} xs={8}>
          <Grid item xs={12}>
            <TextField
              id="outlined-name"
              label="Price"
              margin="normal"
              variant="outlined"
              onChange={handleChange('price')}
              InputProps={{
                startAdornment: <InputAdornment position="start">€</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={product.chargeTax}
                  onChange={handleChange('chargeTax')}
                  value="chargeTax"
                  color="primary"
                  inputProps={{
                    'aria-label': 'primary checkbox',
                  }}
                />
              }
              label="Charge tax on product"
            />
          </Grid>
        </Grid>
      </Grid>
      
    */ }

    </Container>
  );
}
