import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Modal, Fade, Backdrop, Button} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import CommentDeck from './CommentDeck';

export default function TransitionsModal(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Activate Modal
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <CommentDeck id={props.id}/>
        </Fade>
      </Modal>
    </div>
  );
}