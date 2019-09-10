import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    width: '275px'
  },
  typeField: {
    marginRight: theme.spacing(1),
    width: '175px'
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  button: {
    boxShadow: 'none',
  }
}));



export default function Search() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    type: '',
  });

  const [queryValue, setQueryValue] = React.useState('');

  const attributes = [
    {
      value: 'Order ID',
      label: 'Order ID',
    },
    {
      value: 'Email',
      label: 'Email',
    },
  ];

  function handleChange(event) {
    setValues(oldValues => ({
      type: event.target.value,
    }));
  }

  function handleQueryValue(e) {
    setQueryValue(e.target.value);
  }

  return (
    <div>
      <h3>Query Orders</h3>
      <TextField
        id="standard-select-currency"
        select
        label="Attribute"
        className={classes.typeField}
        value={values.type}
        onChange={handleChange}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="e.g. Order ID, Email, etc."
        margin="normal"
        variant="outlined"
      >
        {attributes.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-name"
        label="Value"
        className={classes.textField}
        value={queryValue.value}
        onChange={handleQueryValue}
        margin="normal"
        variant="outlined"
      />
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary" className={classes.button}>
        Search
        <SearchIcon className={classes.rightIcon} />
        </Button>
      </Box>

    </div>
  );
}