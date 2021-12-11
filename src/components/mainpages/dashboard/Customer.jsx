import React, {useContext} from 'react'
import ReactApexChart from 'react-apexcharts'
import {GlobalState} from "../../../GlobalState";

export default function Customer(props) {
    const state = useContext(GlobalState)
    const [topCustomers] = state.reportsApi.topCustomers
    const customer_options = {
        series: topCustomers.slice(0,5).map(item => item.total),
        options: {
            chart: {
                type: 'donut',
            },
            labels: topCustomers.slice(0,5).map(item => item.name),
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
                    5 khách hàng mua hàng nhiều nhất
                </div>
                <div className="box-body">
                    <ReactApexChart options={customer_options.options} series={customer_options.series}
                                    type="donut"/>
                </div>
            </div>
        </div>
    )
}