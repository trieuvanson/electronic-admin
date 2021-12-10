import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from "../../../GlobalState";
import ReactApexChart from 'react-apexcharts'
import {Helmet} from "react-helmet";

function ReportsOrders() {
    const state = useContext(GlobalState)
    const [orderRevenue] = state.reportsApi.orderRevenue
    const action  = state.reportsApi.orderAction


    const year = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]

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
        <>
            <Helmet>
                <title>Administrator - Thống kê hoá đơn</title>
            </Helmet>
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

        </>

    )
}

export default ReportsOrders