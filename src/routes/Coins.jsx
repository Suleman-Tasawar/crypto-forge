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
import Pagination from '../components/GeneralPagination'

function Coins() {

  const {data} = useContext(CryptoContext)
  return (
    // <Pagination data={CoinData}/>
    <TableContainer component={Paper}>
    <Table aria-label="Crypto Coins" stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell><h1 className='text-lg font-bold'>Coin</h1></TableCell>
          <TableCell align="right"><h1 className='text-lg font-bold'>Name</h1></TableCell>
          <TableCell align="right"><h1 className='text-lg font-bold'>Price</h1></TableCell>
          <TableCell align="right"><h1 className='text-lg font-bold'>Total Volume</h1></TableCell>
          <TableCell align="right"><h1 className='text-lg font-bold'>Change</h1></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              <Link to={`/coinsdetail/:${row.id}`}><img className='w-20 h-20 object-contain rounded-full' src={row.image} alt="crypto coin image" /></Link>
            </TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">${row.current_price}</TableCell>
            <TableCell align="right">{row.total_volume}</TableCell>
            <TableCell  align="right"><p className={`font-extrabold ${row.price_change_percentage_24h >0?'text-green-500':'text-red-500'}`}>{row.price_change_percentage_24h}%</p></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Coins