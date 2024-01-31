import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@mui/material';

const Vouchers = () => {
  const columns = [
    { id: 'id', label: 'ID', minWidth: 90 },
    { id: 'Coupon Code', label: 'Coupon Code', minWidth: 150 },
    { id: 'Coupon Type', label: 'Coupon Type', minWidth: 150 },
    { id: 'Coupon Value', label: 'Coupon Value', minWidth: 110 },
    { id: 'Coupon Time', label: 'Coupon Time', minWidth: 160 },
    { id: 'Action', label: 'Action', minWidth: 160 },
  ];

  const rows = [
    { id: 1, 'Coupon Code': 'Snow', 'Coupon Type': 'Jon', 'Coupon Value': 14, 'Coupon Time': 'Arya' },
    { id: 2, 'Coupon Code': 'Lannister', 'Coupon Type': 'Cersei', 'Coupon Value': 31, 'Coupon Time': 'Daenerys' },
    { id: 3, 'Coupon Code': 'Lannister', 'Coupon Type': 'Jaime', 'Coupon Value': 31, 'Coupon Time': 'Jaime' },
    { id: 4, 'Coupon Code': 'Stark', 'Coupon Type': 'Arya', 'Coupon Value': 11, 'Coupon Time': 'Stark' },
    { id: 5, 'Coupon Code': 'Targaryen', 'Coupon Type': 'Daenerys', 'Coupon Value': 23, 'Coupon Time': 'Daenerys' },
    { id: 6, 'Coupon Code': 'Melisandre', 'Coupon Type': 'rkjhg', 'Coupon Value': 150, 'Coupon Time': 'Melisandre' },
    { id: 7, 'Coupon Code': 'Clifford', 'Coupon Type': 'Ferrara', 'Coupon Value': 44, 'Coupon Time': 'Ferrara' },
    { id: 8, 'Coupon Code': 'Frances', 'Coupon Type': 'Rossini', 'Coupon Value': 36, 'Coupon Time': 'Rossini' },
    { id: 9, 'Coupon Code': 'Roxie', 'Coupon Type': 'Harvey', 'Coupon Value': 65, 'Coupon Time': 'Harvey' },
  ];

  const handleDeleteClick = (id) => {
    // Handle delete logic here
    console.log(`Deleting row with ID ${id}`);
  };

  return (
    <>
      <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card sx={{ width: '80%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <Grid sx={{ width: '100%' }}>
            <TableContainer component={Paper} sx={{ height: '100%', overflowY: 'auto' }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.id} style={{ minWidth: column.minWidth }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      {columns.map((column) => (
                        <TableCell key={column.id}>
                          {column.id === 'Action' ? (
                            <>
                              <Checkbox color="primary" />
                              <IconButton onClick={() => handleDeleteClick(row.id)}>
                                <DeleteIcon />
                              </IconButton>
                            </>
                          ) : (
                            row[column.id]
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default Vouchers;
