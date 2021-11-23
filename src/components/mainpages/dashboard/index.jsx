import React, {useContext} from 'react'
import Chart from 'react-apexcharts'
import TableOrdersRender from "./TableOrdersRender";
import {GlobalState} from "../../../GlobalState";
import TopProducts from "./TopProducts";

function Index() {
    const state = useContext(GlobalState)
    const [order] = state.orderAPI.order
    const [orderDetails] = state.orderAPI.orderDetails
    const customer_options = {
        options: {},
        series: [
            {
                // name: "Net Profit",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
            {
                // name: "Revenue",
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            },
            {
                // name: "Free Cash Flow",
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            },
        ],
        chart: {
            type: "bar",
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        xaxis: {
            categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        },
        yaxis: {
            title: {
                text: "$ (thousands)",
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands";
                },
            },
        },
    };




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
                <div className="row">
                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="box box-hover">
                            <div className="counter">
                                <div className="counter-title">
                                    total order
                                </div>
                                <div className="counter-info">
                                    <div className="counter-count">
                                        6578
                                    </div>
                                    <i className="ti-bag"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="box box-hover">
                            <div className="counter">
                                <div className="counter-title">
                                    total order
                                </div>
                                <div className="counter-info">
                                    <div className="counter-count">
                                        6578
                                    </div>
                                    <i className="ti-bag"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="box box-hover">
                            <div className="counter">
                                <div className="counter-title">
                                    total order
                                </div>
                                <div className="counter-info">
                                    <div className="counter-count">
                                        6578
                                    </div>
                                    <i className="ti-bag"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="box box-hover">
                            <div className="counter">
                                <div className="counter-title">
                                    total order
                                </div>
                                <div className="counter-info">
                                    <div className="counter-count">
                                        6578
                                    </div>
                                    <i className="ti-bag"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <TopProducts item={orderDetails}/>
                    <div className="col-4 col-md-6 col-sm-12">
                        <div className="box f-height">
                            <div className="box-body">
                                <div id="category-chat">
                                    <Chart
                                        options={customer_options.options}
                                        series={customer_options.series}
                                        type="donut"
                                        width="380" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 col-md-6 col-sm-12">
                        <div className="box f-height">
                            <div className="box-header">
                                customers
                            </div>
                            <div className="box-body">
                                <div id="customers-chart"/>
                            </div>
                        </div>
                    </div>
                    <TableOrdersRender item={order}/>
                </div>
            </div>
        </div>

    )
}

export default Index