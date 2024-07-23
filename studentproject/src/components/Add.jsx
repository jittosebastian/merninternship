import { Box, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Name"

      />
      <br />
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Department"
      />
      <br />
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="semester"
      />
      <br />
      </div>
      </Box>
  )
}

export default Add