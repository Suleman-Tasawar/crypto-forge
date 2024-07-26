import React from 'react'
import Form from '../components/Form'
import { useParams } from 'react-router-dom'


function LoginMenu() {

    const { type } = useParams()

  return (
    <div className='w-full flex items-center justify-center'>
        <Form name={type}></Form>
    </div>
  )
}

export default LoginMenu