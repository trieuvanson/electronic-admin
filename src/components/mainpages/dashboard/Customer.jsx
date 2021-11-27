import React, {useContext} from 'react'
import ReactApexChart from 'react-apexcharts'
import {GlobalState} from "../../../GlobalState";

export default function Customer(props) {
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
        <div className="col-5 col-md-6 col-sm-12">
            <div className="box f-height">
                <div className="box-header">
                    Khách hàng mua hàng nhiều nhất
                </div>
                <div className="box-body">
                    <div id="customers-chart"/>
                </div>
            </div>
        </div>
    )
}