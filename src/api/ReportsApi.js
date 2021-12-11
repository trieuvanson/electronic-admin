import {useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";

function ReportsApi(token) {
    const [topBrands, setTopBrands] = useState([]);
    const [orderRevenue, setOrderRevenue] = useState([]);
    const [topCategoriesByBrand, setTopCategoriesByBrand] = useState([]);
    const [revenueByYear, setRevenueByYear] = useState([]);
    const [topCustomers, setTopCustomers] = useState([]);
    useEffect(() => {
        if (token) {
            getTopBrands()
            getOrderRevenueByYear(new Date().getFullYear())
            getRevenueByYear(new Date().getFullYear())
            topCategoriesByBrandName('')
            getTopByUser()
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

    const getTopByUser = () => {
        axios.get(`${LOCAL_LINK}/api/reports/top-customer`, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(res => {
                setTopCustomers(res.data)
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

    const topCategoriesByBrandName = (brandName) => {
        console.log(brandName)
        axios.get(`${LOCAL_LINK}/api/reports/categories?bname=${brandName}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(res => {
                setTopCategoriesByBrand(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getRevenueByYear = (year) => {
        axios.get(`${LOCAL_LINK}/api/reports/revenue/${year}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(res => {
                setRevenueByYear(res.data)
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
        },
        topCategoriesByBrand: [topCategoriesByBrand, setTopCategoriesByBrand],
        categoriesAction: {
            topCategoriesByBrandName
        },
        revenueByYear: [revenueByYear, setRevenueByYear],
        revenueAction: {
            getRevenueByYear
        },
        topCustomers: [topCustomers, setTopCustomers],
    }
}

export default ReportsApi