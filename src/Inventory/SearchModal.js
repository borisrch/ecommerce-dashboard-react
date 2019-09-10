import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginRight: theme.spacing(1),
    width: '375px'
  },
  typeField: {
    marginLeft: theme.spacing(1),
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
  },
  title: {
    fontFamily: 'ApercuMedium',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
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
      value: 'ID',
      label: 'ID',
    },
    {
      value: 'Name',
      label: 'Name',
    },
    {
      value: 'Type',
      label: 'Type',
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
      <Typography variant="h4" className={classes.title}>Search Inventory</Typography>
      <TextField
        id="outlined-name"
        label="Value"
        className={classes.textField}
        value={queryValue.value}
        onChange={handleQueryValue}
        margin="normal"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon edge="start"/>
            </InputAdornment>
          ),
        }}
      />
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
        margin="normal"
        variant="outlined"
      >
        {attributes.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      
      <Box display="flex" justifyContent="flex-end" style={{marginTop: '2em'}}>
        <Button vsize="small" color="primary" className={classes.button} style={{marginRight: 10}} >
          Cancel
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
          Search
        </Button>
      </Box>

    </div>
  );
}