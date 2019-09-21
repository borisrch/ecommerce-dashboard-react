import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/actions/products';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import RefreshIcon from '@material-ui/icons/Refresh';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import CreateProduct from './CreateProduct';
import InventoryItem from './InventoryItem';
import EmptyInventory from './EmptyInventory';
import SearchModal from './SearchModal';
import ProductModal from './ProductModal';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: 0,
    top: 'auto',
    left: 'auto',
    position: 'fixed',
    bottom: theme.spacing(7),
    right: theme.spacing(7),
  },
  action: {
    marginLeft: 'auto',
    marginTop: '0.8rem',
    marginRight: theme.spacing(2)
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // boxShadow: theme.shadows[5],
    boxShadow: '0 20px 60px -2px rgba(27,33,58,.4)',
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    borderRadius: '8px'
  },
  emptyIcon: {
    color: '#00000032',
    fontSize: '10em'
  },
  emptyContainer: {
    marginTop: '25vh',
  },
  title: {
    fontFamily: 'ApercuMedium',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  button: {
    margin: theme.spacing(1)
  },
  toolbar: {
    // boxShadow: '0 0 1px 0 rgba(0,0,0,.22)',
    boxShadow: '0 0 11px #eaf0f6',
    display: 'inline-block',
    marginBottom: theme.spacing(1),
    width: '100%'
  },
  lastUpdated: {
    marginTop: theme.spacing(2),
    padding: 0,
    color: 'rgb(112, 117, 122)'
  }
}));

const Inventory = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState({
    id: 'ID',
    name: 'Name',
    type: 'Type',
    description: 'Description',
  });

  const [searchModal, setSearchModal] = React.useState(false);

  const [lastUpdatedTime, setLastUpdatedTime] = React.useState('N/A');

  React.useEffect(() => {
    props.dispatch(fetchProducts());
    setLastUpdatedTime(`${new Date().toLocaleString()}`);
  }, []);

  const createNewProduct = () => {
    alert('create');
  }

  const openSearchModal = () => {
    setSearchModal(true);
  }

  const closeSearchModal = () => {
    setSearchModal(false);
  }

  const handleOpen = (product) => {
    setProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Typography variant="h6" className={classes.title} gutterBottom>Inventory</Typography>
        <Paper className={classes.toolbar}>
          <div style={{ display: 'flex' }}>
            <div>
              <IconButton className={classes.button} color="primary">
                <ViewModuleIcon />
              </IconButton>
              <IconButton className={classes.button}>
                <ViewHeadlineIcon />
              </IconButton>
              <IconButton className={classes.button}>
                <RefreshIcon />
              </IconButton>
            </div>
            <div className={classes.action}>
              <CreateProduct createProduct={createNewProduct}></CreateProduct>
            </div>
          </div>
        </Paper>
        {
          (props.products.length === 0 || props.products.length === null) ? (
            <EmptyInventory />
          ) : (
              <React.Fragment>
                <Grid container spacing={2}>
                  {
                    props.products.map((product) => (
                      <Grid item xs={4} key={product.id}>
                        <InventoryItem item={product} openModal={handleOpen} />
                      </Grid>
                    ))
                  }
                </Grid>
                <Container className={classes.lastUpdated}>
                  <Typography variant="overline" >Inventory up to date. Last retrieved at {lastUpdatedTime}</Typography>
                </Container>
              </React.Fragment>
            )
        }
      </Container>

      <Zoom
        timeout={transitionDuration}
        style={{
          transitionDelay: `${transitionDuration.exit}ms`,
        }}
        in={true}
        unmountOnExit
      >
        <Fab color="primary" className={classes.fab} aria-label="search" onClick={openSearchModal}>
          <SearchIcon />
        </Fab>
      </Zoom>

      <Modal
        disableAutoFocus={true}
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <ProductModal item={product} />
          </div>
        </Fade>
      </Modal>

      {/* Search Modal */}
      <Modal
        disableAutoFocus={true}
        className={classes.modal}
        open={searchModal}
        onClose={closeSearchModal}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        closeAfterTransition
        disableBackdropClick>
        <Fade in={searchModal}>
          <div className={classes.paper}>
            <SearchModal onClose={closeSearchModal} />
          </div>
        </Fade>
      </Modal>

    </React.Fragment>
  );
}

Inventory.defaultProps = {
  products: []
}

Inventory.propTypes = {
  products: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    products: state.product.products
  }
}

export default connect(mapStateToProps, null)(Inventory);