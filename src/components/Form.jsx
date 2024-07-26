import { Button, Card } from '@mui/material'
import React  from 'react'
import PasswordField from './PasswordField'
import EmailField from './EmailField'
import { RegistrationContext } from '../context/RegistrationContext'
import { useContext } from 'react'

function Form({name}) {

    const {passwordCorrect, emailCorrecct} = useContext(RegistrationContext)

    return (
      <Card className='flex flex-col items-center justify-center m-[5rem] gap-5 w-[30rem] px-24 py-10'>
          <h2 className='text-2xl font-semibold' >{name}</h2>
          <EmailField />
          <PasswordField />
          <Button disabled={!passwordCorrect && !emailCorrecct} variant="outlined">{name}</Button>
      </Card>
    )
}

export default Form