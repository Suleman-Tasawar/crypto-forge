import axios from "axios";

export function getGeneralData(setData, currency = 'usd')
{
    axios.get(`/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1`)
    .then(response => {
        setData(() => [...response.data])
    })
    .catch(err => console.error(err))
}

//response: {
// data: [{
//     id,
//     symbol,
//     name,
//     current_price,
//     market_cap_rank,
//     total_volume,
//     price_change_percentage_24h,
// }]
//}

export function getHistoricalData(setGraph, coin = "bitcoin", timeframe = 30, currency = 'usd')
{
    axios.get(`api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${timeframe}`)
    .then(response => {
        setGraph(() => [...response.data.prices])
    })
    .catch(err => console.error(err))
}
// response: {
    // data: {
    //   "prices": [
    //     [1625270400000, 2000.35],
    //     [1625356800000, 2100.50],
    //     ...
    //
    //   ],
    //   "market_caps": [
    //     [1625270400000, 234567890000],
    //     [1625356800000, 245678900000],
    //     ...
    //
    //   ],
    //   "total_volumes": [
    //     [1625270400000, 3456789000],
    //     [1625356800000, 4567890000],
    //     ...
    //
    //   ]
    // }
// }
// arrays contain timestamps and price


export function getNewsData(setNews, page=1)
{
    axios.get(`api/v3/news?page=${page}`)
    .then(response => {
        setNews(() => [...response.data.data])
    })
    .catch(err => console.error(err))
}

// response: {
    // data: {
    //  data: [
    //      {
    //        title
    //        description,
    //        author,
    //        url,
    //        updated_at,
    //        news_site,
    //        thumb_2x
    //      },
    //    ]
    // }
// }