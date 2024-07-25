import React from 'react'
import { TextField } from '@mui/material'
import { RegistrationContext } from '../context/RegistrationContext'
import { useContext } from 'react'

function EmailField() {
    const {email, emailCorrect, emailValidation} = useContext(RegistrationContext)

  return (
    <TextField 
          type='text'
          required={true}
          label='Email'
          variant="standard"
          fullWidth={true}
          error={!emailCorrect}
          onChange={emailValidation}
          value={email}
          />
  )
}

export default EmailField