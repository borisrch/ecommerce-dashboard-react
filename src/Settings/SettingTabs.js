import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import TabButton from './TabButton';
import Account from './Views/Account';
import Password from './Views/Password';
import Notifications from './Views/Notifications';
import UserGroups from './Views/UserGroups';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{width: '100%'}}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 500,
  },
  tabs: {
    borderRight: `1px solid rgba(0,0,0,.08)`,
    textAlign: 'left'
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
}));


export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label={<TabButton icon="account" text="account" />} {...a11yProps(0)} />
        <Tab label={<TabButton icon="password" text="security" />} {...a11yProps(1)} />
        <Tab label={<TabButton icon="usergroups" text="user groups" />} {...a11yProps(2)} />
        <Tab label={<TabButton icon="notifications" text="notifications" />} {...a11yProps(3)} />
        <Tab label={<TabButton icon="help" text="help" />} {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Account />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Password />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <UserGroups />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Notifications />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Help
      </TabPanel>
    </div>
  );
}