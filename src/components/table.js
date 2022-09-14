import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DataContext from '../context/DataContext';
import CalculationContext from "../context/CalculationContext"
import { useContext } from 'react';



const BasicTable = () => {
  const {visible} =useContext(DataContext)
  const {sonuc} = useContext(CalculationContext)
  return (
    <>
    {visible === true &&

    <TableContainer component={Paper}>
  
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Taksit No</TableCell>
            <TableCell align="right">Taksit Tutarı</TableCell>
            <TableCell align="right">Ana Para Tutarı</TableCell>
            <TableCell align="right">Faiz Tutarı</TableCell>
            <TableCell align="right">KKDF Tutarı</TableCell>
            <TableCell align="right">BSMV Tutarı</TableCell>
            <TableCell align="right">Kalan Ana Para Tutarı</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sonuc?.map((el,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{i+1}
              </TableCell>
              <TableCell align="right">{el[0]}</TableCell>
              <TableCell align="right">{el[1]}</TableCell>
              <TableCell align="right">{el[2]}</TableCell>
              <TableCell align="right">{el[3]}</TableCell>
              <TableCell align="right">{el[4]}</TableCell>
              <TableCell align="right">{el[5]}</TableCell>
              <TableCell align="right">{el[6]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <hr></hr>
      * Kredi hesaplaması, dosya masrafı dahil edilmeden çekilecek kredi üzerinden hesaplanmıştır.
      <hr></hr>
    
    </TableContainer>
          }
          </>
  );
}

export default BasicTable;