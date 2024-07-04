import { useState, useEffect } from "react";
export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
            const resJson = await res.json();
            setData(resJson[currency]);
            // console.log(data);
        }
        fetchData();

    }, [currency])

    return data;
}

