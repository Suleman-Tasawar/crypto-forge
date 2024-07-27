import React, {useContext } from 'react'
import {Link} from "react-router-dom"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CryptoContext } from '../context/CryptoContext'
import { useEffect } from 'react';
import { getHistoricalData } from '../utils/api';

function Coins() {

  const {data, setGraph} = useContext(CryptoContext)

  useEffect(() => {
    getHistoricalData(setGraph)
  }, [])

  return (
    // <Pagination data={CoinData}/>
    <TableContainer component={Paper}>
      <Table sx={{backgroundColor: 'rgb(55 65 81)', color: 'white', padding: '0rem 5rem'}} aria-label="Crypto Coins" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{backgroundColor: 'rgb(55 65 81)', color:'white'}}>
              <h1 className="text-lg font-bold">Coin</h1>
            </TableCell>
            <TableCell sx={{backgroundColor: 'rgb(55 65 81)', color:'white'}} align="right">
              <h1 className="text-lg font-bold">Name</h1>
            </TableCell>
            <TableCell sx={{backgroundColor: 'rgb(55 65 81)', color:'white'}} align="right">
              <h1 className="text-lg font-bold">Price</h1>
            </TableCell>
            <TableCell sx={{backgroundColor: 'rgb(55 65 81)', color:'white'}} align="right">
              <h1 className="text-lg font-bold">Total Volume</h1>
            </TableCell>
            <TableCell sx={{backgroundColor: 'rgb(55 65 81)', color:'white'}} align="right">
              <h1 className="text-lg font-bold">Change</h1>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <Link to={`/coinsdetail/${row.id}`}>
                  <img
                    className="w-20 h-20 object-contain rounded-full"
                    src={row.image}
                    alt="crypto coin"
                  />
                </Link>
              </TableCell>
              <TableCell sx={{color: 'white'}} align="right">{row.name}</TableCell>
              <TableCell sx={{color: 'white'}} align="right">${row.current_price}</TableCell>
              <TableCell sx={{color: 'white'}} align="right">{row.total_volume}</TableCell>
              <TableCell sx={{color: 'white'}} align="right">
                <p className={`font-extrabold ${row.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {row.price_change_percentage_24h}%
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Coins