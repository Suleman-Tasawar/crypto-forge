import axios from "axios";

export function getGeneralData(setData, currency = 'usd')
{
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1`)
    .then(response => {
        setData(() => [...response.data])
        localStorage.setItem("crypto",JSON.stringify(response.data))
    })
    .catch(err => console.error(err))
}

export function getHistoricalData(setGraph, coin = "bitcoin", timeframe = 30, currency = "usd")
{
    axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${timeframe}`)
    .then(response => {
        setGraph(() => [...response.data.prices])
    })
    .catch(err => console.error(err))
}

export function getNewsData(setNews, page=1)
{
    axios.get(`https://api.coingecko.com/api/v3/news?page=${page}`)
    .then(response => {
        setNews(() => [...response.data.data])
    })
    .catch(err => console.error(err))
}
