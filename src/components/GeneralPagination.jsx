import React from 'react'
import { useState, useEffect } from 'react'
import { Pagination, PaginationItem } from '@mui/material'

function GeneralPagination({ data }) {

    const [current, setCurrent] = useState(1)
    const [currentData, setCurrentData] = useState([])
    const itemsPerPage = 5
  
    useEffect(() => {
      setCurrentData([...data.slice((current - 1) * itemsPerPage, ((current - 1) * itemsPerPage) + itemsPerPage)])
    }, [current, data])
  
    return (
      <div className='flex flex-col items-center'>
        {currentData.map((element) => element)}
        <Pagination sx={
          {
            color: 'white'
          }
        }
        shape='rounded'
        count={Math.ceil(data.length / itemsPerPage)} 
        page={current} 
        // variant="outlined" 
        renderItem={(item) => (
          <PaginationItem
            {...item}
            sx={{
              color: item.selected ? 'white' : 'blue',
              backgroundColor: item.selected ? 'blue' : 'white',
              '&:hover': {
                backgroundColor: 'lightblue',
              },
            }}
          />
        )}
        onChange={(event, value) => setCurrent(value)}/>
      </div>
    )
}

export default GeneralPagination