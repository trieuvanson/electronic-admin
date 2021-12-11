import {useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";

function DiscountsApi(token) {
    const [discount, setDiscount] = useState([]);
    const [code, setCode] = useState('');
    const [discounts, setDiscounts] = useState([]);


    useEffect(() => {
        if (token) {
            getDiscounts();
        }
    }, [token]);

    const getDiscountByCode = async () => {
        await axios.get(`${LOCAL_LINK}/api/discount/${code}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setDiscounts(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const getDiscounts = async () => {
        await axios.get(`${LOCAL_LINK}/api/discount/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setDiscounts(res.data)
        }).catch(err => {
            console.log(err)
        })
    }
    return {
        code: [code, setCode],
        discount: [discount, setDiscount],
        discounts: [discounts, setDiscounts],
        action: {getDiscountByCode}
    }


}

export default DiscountsApi