import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/KeyboardArrowRight';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';

import Loading from './../../Common/Loading';
import FieldRow from './../../Common/FieldRow';
import FieldModal from './../../Common/FieldModal';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rightIcon: {
    fontSize: '1em',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  label: {
    letterSpacing: '.07272727em',
    fontSize: '.6875rem',
    fontWeight: 500,
    lineHeight: '1rem',
    textTransform: 'uppercase',
    color: '#5f6368',
    marginLeft: '10px',
  },
  row: {
    // margin: theme.spacing(1),
    paddingTop: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#f5f5f5',
      cursor: 'pointer'
    }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function a() {
  return alert('hi');
}

export default function Account() {
  const classes = useStyles();

  const [loading, setLoading] = React.useState(true);

  const [fieldModal, setFieldModal] = React.useState({
    open: false,
    field: {
      label: null,
      value: null
    }
  });

  const showFieldModal = (field) => {
    setFieldModal({
      open: true,
      field,
    });
  };

  const handleClose = () => {
    setFieldModal({
      ...fieldModal,
      open: false
    });
  };

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  function Content() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Profile
        </Typography>
        <FieldRow label="Name" value="Bobby B" openModal={showFieldModal} />
        <FieldRow label="Email" value="robert.baratheon@gmail.com" openModal={showFieldModal} />
        <FieldRow label="Role" value="Admin" openModal={showFieldModal} />
        <FieldRow label="Phone" value="123 456 789" openModal={showFieldModal} />
        <Modal
          disableAutoFocus={true}
          disableBackdropClick
          closeAfterTransition
          open={fieldModal.open}
          onClose={handleClose}
          className={classes.modal}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <div style={{ outline: 'none' }}>
            <FieldModal label={fieldModal.field.label} value={fieldModal.field.value} onClose={handleClose} />
          </div>
        </Modal>

      </React.Fragment>
    );
  }


  return (
    <div className={classes.root}>
      {loading ? (
        <Loading visible={loading} />
      ) : (
          <Content />
        )}
    </div>
  )
}