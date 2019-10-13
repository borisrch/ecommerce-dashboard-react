import React from 'react';
import { makeStyles, Grid, Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'ApercuMedium'
  }
}));

export default function Basics(props) {
  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <Grid container className={classes.grid} spacing={4}>
      <Grid item className={classes.box} xs={4}>
        <Box>
          <Typography variant="h5" className={classes.title} gutterBottom>Basics</Typography>
          <Typography variant="subtitle1">Name, brand, and description let shoppers quickly scan through each product.</Typography>
        </Box>
      </Grid>
      <Grid container item className={classes.box} xs={8}>
        <Grid item xs={12}>
          <TextField
            id="outlined-name"
            label="Product Name"
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-name"
            label="Brand"
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows="4"
            defaultValue=""
            className={classes.textField}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="outlined-category-simple">
              Category
          </InputLabel>
            <Select
              value={''}
              labelWidth={labelWidth}
              inputProps={{
                name: 'category',
                id: 'outlined-category-simple',
              }}
              style={{ width: 125 }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Clothes'}>Clothes</MenuItem>
              <MenuItem value={'Shoes'}>Shoes</MenuItem>
              <MenuItem value={'Bag'}>Bag</MenuItem>
              <MenuItem value={'Watch'}>Watch</MenuItem>
              <MenuItem value={'Misc'}>Misc</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  );
}