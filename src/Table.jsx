import { useState } from 'react'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DialogForm from './components/DialogForm';
import Button from '@mui/material/Button';
export default function Table(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen=()=>{
    setOpen(true)
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {field: 'age',headerName: 'Age', width: 90,},
    { field: 'Acoes', headerName: 'Acoes', width:90,
        renderCell: () => (
          <strong>
            
            <Button
              variant="outlined"
              size="small"
              style={{ textAlign:'center'}}
              onClick={handleClickOpen}
            >
              EDITAR
            </Button>
          </strong>
        ),
      },
  ];
  
  const rows = [
    { id: `${props.id}`, lastName:`${props.name}`, firstName: `${props.sobrenome}`, age: props.idade, acoes:props.acoes },
   
  ];
  return (
    <div>
      <div style={{width:'80%'}}>
        <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          />
      </div>
      </div>
          <DialogForm
            open={open}
            setOpen={setOpen}
            id={props.id}
            primeiroNome={props.name}
            segundoNome={props.sobrenome}
            idade={props.idade}
          />

    </div>
  )
}

