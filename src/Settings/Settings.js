import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import SettingTabs from './SettingTabs';

const useStyles = makeStyles(theme => ({
  paper: {
    boxShadow: '0 0 1px 0 rgba(0,0,0,.22)',
    borderRadius: '4px',
    overflow: 'hidden',
    marginTop: theme.spacing(4),
  },
  title: {
    fontFamily: 'ApercuMedium',
    marginTop: theme.spacing(4),
  }
}));

export default function Settings()  {

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
    <Typography variant="h4" className={classes.title} gutterBottom>Account Settings</Typography>
    <Typography variant="subtitle1">Change your profile and account settings.</Typography>
    <Paper className={classes.paper}>
      <SettingTabs />
    </Paper>
    </Container>
  )
}