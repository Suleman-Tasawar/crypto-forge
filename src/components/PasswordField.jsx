import React from 'react'
import { TextField } from '@mui/material'
import { RegistrationContext } from '../context/RegistrationContext'
import { useContext } from 'react'

function PasswordField() {
    const {password, passwordCorrect, passValidation} = useContext(RegistrationContext)

  return (
    <TextField 
          type='password'
          required={true}
          label='Password'
          variant="standard"
          fullWidth={true}
          error={!passwordCorrect}
          helperText="Password should be between 8-30 characters"
          onChange={passValidation}
          value={password}
          />
  )
}

export default PasswordField