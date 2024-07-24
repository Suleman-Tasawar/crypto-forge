import React from 'react'
import { useState, useEffect } from 'react'
import { Pagination } from '@mui/material'

function GeneralPagination({ data }) {

    const [current, setCurrent] = useState(1)
    const [currentData, setCurrentData] = useState([])
    const itemsPerPage = 10
  
    useEffect(() => {
      setCurrentData([...data.slice((current - 1) * itemsPerPage, ((current - 1) * itemsPerPage) + itemsPerPage)])
    }, [current, data])
  
    return (
      <div>
        {currentData.map((element) => element)}
        <Pagination count={Math.ceil(data.length / itemsPerPage)} page={current} variant="outlined" shape="rounded" onChange={(event, value) => setCurrent(value)}/>
      </div>
    )
}

export default GeneralPagination