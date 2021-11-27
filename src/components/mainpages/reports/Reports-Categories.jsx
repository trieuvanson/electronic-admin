import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from "../../../GlobalState";
import ReactApexChart from 'react-apexcharts'

function ReportsCategories() {
    const state = useContext(GlobalState)
    const [brands] = state.categoriesApi.brands
    const [topCategoriesByBrand] = state.reportsApi.topCategoriesByBrand
    const action  = state.reportsApi.categoriesAction
    const options = {
        series: [{
            data: topCategoriesByBrand.map(item => item.quantity)
        }],
        chart: {
            type: 'bar',
            height: 380
        },
        plotOptions: {
            bar: {
                barHeight: '100%',
                distributed: true,
                horizontal: true,
                dataLabels: {
                    position: 'bottom'
                },
            }
        },
        colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
            '#f48024', '#69d2e7'
        ],
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
                colors: ['#fff']
            },
            formatter: function (val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
            },
            offsetX: 0,
            dropShadow: {
                enabled: true
            }
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: topCategoriesByBrand.map(item => item.name),
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        title: {
            text: 'Sản phẩm bán chạy',
            align: 'center',
            floating: true
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return ''
                    }
                }
            }
        }
    };


    const changeDate = (e) => {
        // setBrand(e.target.value)
        action.topCategoriesByBrandName(e.target.value)
    }


    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="ti-menu"></i>
                </div>
                <div className="main-title">
                    Thống kê
                </div>
            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-12">
                        <select className="selection" onChange={changeDate}>
                            <option value="">Chọn hãng</option>
                            {
                                brands.map((brand, index) => {
                                    return (
                                        <option key={index} value={brand.name}>{brand.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="col-12 col-md-6 col-sm-12">
                        <div className="box f-height">
                            <div className="box-body">
                                <div id="chart">
                                    <ReactApexChart options={options} series={options.series} type="bar" height={350}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ReportsCategories