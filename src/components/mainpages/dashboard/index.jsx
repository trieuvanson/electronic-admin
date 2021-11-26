import React, {useContext} from 'react'
import Chart from 'react-apexcharts'
import TableOrdersRender from "./TableOrdersRender";
import {GlobalState} from "../../../GlobalState";
import TopProducts from "./TopProducts";
import TopBrands from "./TopBrands";

function Index() {
    const state = useContext(GlobalState)
    const [order] = state.orderAPI.order
    const [orderDetails] = state.orderAPI.orderDetails

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
                    <TopBrands/>
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