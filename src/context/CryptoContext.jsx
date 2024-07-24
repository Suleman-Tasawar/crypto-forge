import { createContext, useState } from "react";

export const CryptoContext = createContext()


export default function CryptoContextProvider({children})
{
    const [data, setData] = useState([])
    const [graph, setGraph] = useState([])
    const [news, setNews] = useState([])

    return (
        <CryptoContext.Provider value={{data, setData, graph, setGraph, news, setNews}}>
            {children}
        </CryptoContext.Provider>
    )
}


