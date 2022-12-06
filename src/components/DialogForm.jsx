import { useState } from 'react'
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogForm(props){

    const handleClickOpen = () => {
      props.setOpen(true);
    };
  
    const handleClose = () => {
      props.setOpen(false);
    };
  
   
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>Editar</DialogTitle>
                <DialogContent>
            
                <TextField
                    autoFocus
                    margin="dense"
                    id="id"
                    disabled
                    label="ID"
                    value={props.id}
                    type="number"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="nome"
                    label="Nome"
                    value={props.primeiroNome}
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="segundoNome"
                    label="Segundo Nome"
                    value={props.segundoNome}
                    type="text"
                    fullWidth
                    variant="standard"
                />
                 <TextField
                    autoFocus
                    margin="dense"
                    id="nome"
                    label="idade"
                    value={props.idade}
                    type="email"
                    fullWidth
                    variant="standard"
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}