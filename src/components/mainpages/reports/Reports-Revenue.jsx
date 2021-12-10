import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from "../../../GlobalState";
import ReactApexChart from 'react-apexcharts'
import {Helmet} from "react-helmet";

function ReportsRevenue() {
    const state = useContext(GlobalState)
    const [revenueByYear] = state.reportsApi.revenueByYear
    const action = state.reportsApi.revenueAction
    function unique(arr) {
        var newArr = []
        for (let i = 0; i < arr.length; i++) {
            if (newArr.indexOf(arr[i]) === -1) {
                newArr.push(arr[i])
            } else {
                newArr.push(0)
            }
        }
        return newArr
    }
    const year = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]

    var options = {
        series: [{
            name: "Doanh số",
            data: revenueByYear.map(item => item.total)
        }],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Doanh thu theo tháng',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: revenueByYear.map(item => "Tháng "+item.month)
        }
    };
    const changeDate = (e) => {
        action.getRevenueByYear(e.target.value)
    }


    return (
        <>
            <Helmet>
                <title>Administrator - Thống kê doanh thu</title>
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

export default ReportsRevenue