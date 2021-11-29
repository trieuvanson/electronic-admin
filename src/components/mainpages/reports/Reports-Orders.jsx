import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from "../../../GlobalState";
import ReactApexChart from 'react-apexcharts'

function ReportsOrders() {
    const state = useContext(GlobalState)
    const [orderRevenue] = state.reportsApi.orderRevenue
    const action  = state.reportsApi.orderAction
/*
    const getQuantity = [
        orderRevenue.filter(item => item.month === 1)[0]?.quantity || 0,
        orderRevenue.filter(item => item.month === 2)[0]?.quantity || 0,
        orderRevenue.filter(item => item.month === 3)[0]?.quantity || 0,
        orderRevenue.filter(item => item.month === 4)[0]?.quantity || 0,
        orderRevenue.filter(item => item.month === 5)[0]?.quantity || 0,
        orderRevenue.filter(item => item.month === 6)[0]?.quantity || 0,
        orderRevenue.filter(item => item.month === 7)[0]?.quantity || 0,
        orderRevenue.filter(item => item.month === 8)[0]?.quantity || 0,
        orderRevenue.filter(item => item.month === 9)[0]?.quantity || 0,
        orderRevenue.filter(item => item.month === 10)[0]?.quantity || 0,
        orderRevenue.filter(item => item.month === 11)[0]?.quantity || 0,
        orderRevenue.filter(item => item.month === 12)[0]?.quantity || 0
    ]

    const getTotal = [
        orderRevenue.filter(item => item.month === 1)[0]?.total || 0,
        orderRevenue.filter(item => item.month === 2)[0]?.total || 0,
        orderRevenue.filter(item => item.month === 3)[0]?.total || 0,
        orderRevenue.filter(item => item.month === 4)[0]?.total || 0,
        orderRevenue.filter(item => item.month === 5)[0]?.total || 0,
        orderRevenue.filter(item => item.month === 6)[0]?.total || 0,
        orderRevenue.filter(item => item.month === 7)[0]?.total || 0,
        orderRevenue.filter(item => item.month === 8)[0]?.total || 0,
        orderRevenue.filter(item => item.month === 9)[0]?.total || 0,
        orderRevenue.filter(item => item.month === 10)[0]?.total || 0,
        orderRevenue.filter(item => item.month === 11)[0]?.total || 0,
        orderRevenue.filter(item => item.month === 12)[0]?.total || 0
    ]*/

    const year = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]

    /*const options = {
        series: [{
            name: 'Số lượng',
            type: 'column',
            data: getQuantity
        }, {
            name: 'Doanh thu',
            type: 'column',
            data: getTotal
        }],
        chart: {
            height: 350,
            type: 'line',
            stacked: false
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [1, 1, 4]
        },
        title: {
            text: 'Đơn hàng',
            align: 'left',
            offsetX: 110
        },
        xaxis: {
            categories: ["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"]
        },
        yaxis: [
            {
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#008FFB'
                },
                labels: {
                    style: {
                        colors: '#008FFB',
                    }
                },
                title: {
                    text: "Số lượng",
                    style: {
                        color: '#008FFB',
                    }
                },
                tooltip: {
                    enabled: true
                }
            },
            {
                seriesName: 'Income',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#00E396'
                },
                labels: {
                    style: {
                        colors: '#00E396',
                    }
                },
                title: {
                    text: "Doanh thu",
                    style: {
                        color: '#26e7a6',
                    }
                },

            },
        ],
        tooltip: {
            fixed: {
                enabled: true,
                position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                offsetY: 30,
                offsetX: 60
            },
        },
        legend: {
            horizontalAlign: 'left',
            offsetX: 40
        }
    };*/

    const options = {
        series: [{
            name: 'Số lượng',
            type: 'column',
            data: orderRevenue.map(item => item.quantity)
        }, {
            name: 'Doanh thu',
            type: 'column',
            data: orderRevenue.map(item => item.total)
        }],
        chart: {
            height: 350,
            type: 'line',
            stacked: false
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [1, 1, 4]
        },
        title: {
            text: 'Đơn hàng',
            align: 'left',
            offsetX: 110
        },
        xaxis: {
            categories: orderRevenue.map(item => "Tháng " + item.month)
        },
        yaxis: [
            {
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#008FFB'
                },
                labels: {
                    style: {
                        colors: '#008FFB',
                    }
                },
                title: {
                    text: "Số lượng",
                    style: {
                        color: '#008FFB',
                    }
                },
                tooltip: {
                    enabled: true
                }
            },
            {
                seriesName: 'Income',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#00E396'
                },
                labels: {
                    style: {
                        colors: '#00E396',
                    }
                },
                title: {
                    text: "Doanh thu",
                    style: {
                        color: '#26e7a6',
                    }
                },

            },
        ],
        tooltip: {
            fixed: {
                enabled: true,
                position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                offsetY: 30,
                offsetX: 60
            },
        },
        legend: {
            horizontalAlign: 'left',
            offsetX: 40
        }
    };

    const changeDate = (e) => {
        // setBrand(e.target.value)
        action.getOrderRevenueByYear(e.target.value)
    }


    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="ti-menu"/>
                </div>
                <div className="main-title">
                    Thống kê
                </div>
            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-12">
                        <select className="selection" onChange={changeDate}>
                            <option value="">Chọn năm</option>
                            {
                                year.reverse().map((item, index) => {
                                    return <option key={index} value={item}>{item}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="col-12 col-md-6 col-sm-12">
                        <div className="box f-height">
                            <div className="box-body">
                                <div id="chart">
                                    <ReactApexChart options={options} series={options.series} type="line" height={400}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ReportsOrders