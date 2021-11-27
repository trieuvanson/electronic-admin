import React from 'react'
import {OrderStatus} from "../../../utils/DataCommon";
import {formatCash} from "../../../utils/CurrencyCommon";
import {Link} from "react-router-dom";

export default function TotalData(props) {
    const {item} =  props
    return (
        <div className="row">

            {
                item && item.map((item, index) => {
                    return (
                        <div className="col-3 col-md-6 col-sm-12" key={index}>
                            <div className="box box-hover">
                                <div className="counter">
                                    <div className="counter-title box-header">
                                        {item.name}
                                    </div>
                                    <div className="counter-info">
                                        <div className="counter-count">
                                            {!item.name.match("Doanh thu")?formatCash(item.value):item.value}
                                        </div>
                                        <i className="ti-bag"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}