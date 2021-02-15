import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 6),
    width: '25vw'
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen} className="button">
      Contact us now
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Contact us</h2>
            <div style={{display: 'grid', marginTop: '20px'}} >
            <input type="text" placeholder="Nombre"/>
            <input type="text" placeholder="Apellido Paterno" style={{marginTop: '10px'}}/>
            <input type="text" placeholder="Apellido Materno" style={{marginTop: '10px'}}/>
            <input type="text" placeholder="Asunto" style={{marginTop: '10px'}}/>
            <input type="Email" placeholder="Email" style={{marginTop: '10px'}}/>
            <textarea type="text" placeholder="Mensaje" style={{marginTop: '10px'}}/>
            <button type="submit" className="button" style={{marginTop: '20px'}}>Send Message</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}