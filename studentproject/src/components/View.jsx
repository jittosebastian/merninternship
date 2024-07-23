import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
const rows=[{"name":"Aruna","adm": "CH0234","department":"Chemistry","semester":"s4"}, 
            {"name":"Beena","adm": "CH0764","department":"Computer science","semester":"s3"} , 
            {"name":"joy","adm": "CH0889","department":"Biology","semester":"s6"}
]
const View = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Admission No</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">semester</TableCell>
      
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.adm}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.semester}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default View