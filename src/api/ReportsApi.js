import {useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";

function ReportsApi(token) {
    const [topBrands, setTopBrands] = useState([]);
    useEffect(() => {
        if (token) {
            getTopBrands()
        }
    }, [token])

    const getTopBrands = () => {
        axios.get(`${LOCAL_LINK}/api/reports/top-brands`, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(res => {
                setTopBrands(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    console.log(topBrands)

    return {
        topBrands: [topBrands, setTopBrands]
    }
}

export default ReportsApi