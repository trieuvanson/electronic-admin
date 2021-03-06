import {useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";

function OrdersApi(token) {
    const [order, setOrder] = useState([])
    const [orderDetails, setOrderDetails] = useState([])
    const [orderDetailsByOrderId, setOrderDetailsByOrderId] = useState([])
    useEffect(() => {
        if (token) {
            getOrders();
            getOrderDetails()
        }
    }, [token])

    const getOrders = async () => {
        await axios.get(`${LOCAL_LINK}/api/order/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setOrder(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const getOrderDetailsByOrderId = async (orderId) => {
        await axios.get(`${LOCAL_LINK}/api/order/order-details/${orderId}`, {
                headers: {Authorization: `Bearer ${token}`}
            }
        )
            .then(res => {
                setOrderDetailsByOrderId(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getOrderDetails = async () => {
        await axios.get(`${LOCAL_LINK}/api/order/order-details/`, {
                headers: {Authorization: `Bearer ${token}`}
            }
        )
            .then(res => {
                setOrderDetails(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const updateOrder = async (orderId, order) => {
        await axios.put(`${LOCAL_LINK}/api/order/${orderId}`, order, {
                headers: {Authorization: `Bearer ${token}`}
            }
        )
            .then(res => {
                getOrders()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const addOrderDetails = async (order) => {
        await axios.post(`${LOCAL_LINK}/api/order/order-details/`, order, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            setOrderDetails([...orderDetails, res.data])
        }).catch(err => {
            console.log(err)
        })
    }

    const getOrdersByFilter = async (filter) => {
        try {
            const res = await axios.get(`${LOCAL_LINK}/api/order/filters?fullname=${filter.fullname}&status=${filter.status}&payment=${filter.payment}&max=${filter.max || Number.MAX_SAFE_INTEGER}&minDate=${filter.minDate || "1970-01-01"}&maxDate=${filter.maxDate || "2050-01-01"}`, {
                    headers: {Authorization: `Bearer ${token}`}
                }
            )
            setOrder(res.data)
        } catch (err) {
            console.log(err)
        }
    }


    // const deleteCartItem = async (id, username) => {
    //     await axios.delete(`${LOCAL_LINK}/api/cart/${id}&${username}`, {
    //         headers: {Authorization: `Bearer ${token}`}
    //     }).then(res => console.log(res.data))
    //     setCarts(carts.filter(c => c.id !== id))
    // }
    // const updateCartItem = async (id, cart) => {
    //     await axios.put(`${LOCAL_LINK}/api/cart/${id}`, cart, {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //             'Content-Type': 'application/json'
    //         }
    //     });
    // }
    return {
        order: [order, setOrder],
        orderDetails: [orderDetails, setOrderDetails],
        orderDetailsByOrderId: [orderDetailsByOrderId],
        action: {getOrdersByFilter, getOrderDetails, getOrderDetailsByOrderId, updateOrder, getOrders}
        // actionOrder: {addOrder}
    }


}

export default OrdersApi