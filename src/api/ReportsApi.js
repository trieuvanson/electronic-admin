import {useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";

function ReportsApi(token) {
    const [topBrands, setTopBrands] = useState([]);
    const [orderRevenue, setOrderRevenue] = useState([]);
    useEffect(() => {
        if (token) {
            getTopBrands()
            console.log(new Date().getFullYear())
            getOrderRevenueByYear(new Date().getFullYear())
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

    const getOrderRevenueByYear = (year) => {
        axios.get(`${LOCAL_LINK}/api/reports/orders/${year}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(res => {
                setOrderRevenue(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return {
        topBrands: [topBrands, setTopBrands],
        orderRevenue: [orderRevenue, setOrderRevenue],
        orderAction: {
            getOrderRevenueByYear
        }
    }
}

export default ReportsApi