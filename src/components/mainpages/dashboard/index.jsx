import React, {useContext} from 'react'
import Chart from 'react-apexcharts'
import TableOrdersRender from "./TableOrdersRender";
import {GlobalState} from "../../../GlobalState";
import TopProducts from "./TopProducts";
import TopBrands from "./TopBrands";
import TotalData from "./TotalData";
import Customer from "./Customer";

function Index() {
    const state = useContext(GlobalState)
    const [order] = state.orderAPI.order
    const [orderDetails] = state.orderAPI.orderDetails

    const filterOrders = order
        .filter(o => o.status.match("Đang chờ xử lý"))
        .sort((a, b) => {
            return new Date(b.create_at).getTime() -
                new Date(a.create_at).getTime()
        })

    const totalData = [
        {
            name: "Tổng doanh thu",
            value: order.filter(o => o.status.match("Đã nhận hàng")).reduce((total, o) => {
                return total + o.total
            }, 0)
        }, {
            name: "Tổng số đơn hàng",
            value: order.length
        }, {
            name: "Đơn hàng đang chờ xử lý",
            value: order.filter(o => o.status.match("Đang chờ xử lý")).length
        }, {
            name: "Đơn hàng đã nhận hàng",
            value: order.filter(o => o.status.match("Đã nhận hàng")).length
        }
    ]

    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="ti-menu"/>
                </div>
                <div className="main-title">
                    Dashboard
                </div>
            </div>
            <div className="main-content">
                <TotalData item={totalData}/>
                <div className="row">
                    <TopProducts item={orderDetails}/>
                    <TopBrands/>
                    <Customer/>
                    <TableOrdersRender item={filterOrders}/>
                </div>
            </div>
        </div>

    )
}

export default Index