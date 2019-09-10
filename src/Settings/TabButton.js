import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AccountIcon from '@material-ui/icons/AccountCircle';
import PasswordIcon from '@material-ui/icons/Lock';
import UserGroupsIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpIcon from '@material-ui/icons/Help';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '4px',
    fontSize: '1em',
    width: 175,
    marginLeft: theme.spacing(2),
    fontFamily: 'ApercuMedium',
  },
  leftIcon: {
    marginRight: theme.spacing(2),
  },
  text: {
    marginBottom: '5px',
  }
}));

export default function TabButton(props) {
  const classes = useStyles();

  function GetIcon() {
    switch (props.icon) {
      case 'account':
        return (<AccountIcon className={classes.leftIcon} />);
      case 'password':
        return (<PasswordIcon className={classes.leftIcon} />);
      case 'usergroups':
        return (<UserGroupsIcon className={classes.leftIcon} />);
      case 'notifications':
        return (<NotificationsIcon className={classes.leftIcon} />);   
      case 'help':
        return (<HelpIcon className={classes.leftIcon} />);
      default:
        throw new SyntaxError('Invalid button type'); 
    }
  }

  return (
      <Grid container direction="row" alignItems="center" className={classes.button}>
        <Grid item>
          <GetIcon />
        </Grid>
        <Grid item className={classes.text}>
          { props.text }
        </Grid>
      </Grid>

  )
}