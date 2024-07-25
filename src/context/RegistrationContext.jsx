import { createContext, useState } from "react";

export const RegistrationContext = createContext()


export default function RegistrationContextProvider({children})
{
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailCorrect, setEmailCorrect] = useState(false)
    const [passwordCorrect, setPasswordCorrect] = useState(false)

    function emailValidation(e)
    {
        setEmail(e.target.value)
        const emailRegex = /^[\w\d._%+-]+@[\w\d.-]+\.[\w]{2,}$/
        setEmailCorrect(emailRegex.test(e.target.value))
    }

    function passValidation(e)
    {
        setPassword(e.target.value)
        setPasswordCorrect(e.target.value.length > 8 && e.target.value.length < 30)
    }

    return (
        <RegistrationContext.Provider value={{
            username, 
            email, 
            password, 
            emailCorrect, 
            passwordCorrect, 
            setUsername, 
            setEmail, 
            setPassword, 
            setEmailCorrect, 
            setPasswordCorrect,
            emailValidation,
            passValidation
            }}>
            {children}
        </RegistrationContext.Provider>
    )
}


