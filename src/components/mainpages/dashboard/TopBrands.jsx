import React, {useContext} from 'react'
import ReactApexChart from 'react-apexcharts'
import {GlobalState} from "../../../GlobalState";

export default function TopBrands(props) {
    const state = useContext(GlobalState)
    const [topBrands] = state.reportsApi.topBrands
    const customer_options = {
        series: topBrands.map(item => item.quantity),
        options: {
            chart: {
                type: 'donut',
            },
            labels: topBrands.map(item => item.name),
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    };
    return (
        <div className="col-4 col-md-6 col-sm-12">
            <div className="box f-height">
                <div className="box-header">
                    Đơn hàng theo loại sản phẩm
                </div>
                <div className="box-body">
                        <ReactApexChart options={customer_options.options} series={customer_options.series}
                                        type="donut"/>
                </div>
            </div>
        </div>
    )
}