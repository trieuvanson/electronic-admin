import React from 'react'
import {OrderStatus} from "../../../utils/DataCommon";
import {formatCash} from "../../../utils/CurrencyCommon";
import {Link} from "react-router-dom";

export default function TableOrdersRender(props) {
    const {item} =  props
    const status = OrderStatus
    const getClassStatus = (str) => {
        let className = ''
        status.find(item => {
            if (item.name === str) {
                className = item.class
            }
        })
        return className
    }
    return (
        <div className="col-12">
            <div className="box">
                <div className="box-header">
                    Đơn hàng mới nhất
                </div>
                <div className="box-body overflow-scroll">
                    <table>
                        <thead>
                        <tr>
                            {/*<th>*/}
                            {/*    <input type="checkbox" name="" id=""/>*/}
                            {/*</th>*/}
                            <th>STT</th>
                            <th>Họ tên</th>
                            <th>Ngày đặt</th>
                            <th>Hình thức thanh toán</th>
                            <th>Tổng</th>
                            <th>Tình trạng</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            item && item.slice(0,5).map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>#{index + 1}</td>
                                        <td>{item.address?.fullname}
                                            <sup className="update-end"> Cập nhập lần
                                                cuối: {item.update_at}</sup>
                                            <div className="table-title">
                                                <Link to="#" className="mr-8 text-priamry">
                                                    <i className="ti-eye"></i>
                                                    view
                                                </Link>
                                                <Link to={`/admin/product/${item.id}`}
                                                      className="mr-8 text-priamry">
                                                    <i className="ti-pencil-alt"></i>
                                                    edit
                                                </Link>
                                                <Link to="#" className="text-danger">
                                                    <i className="ti-trash"></i>
                                                    delete
                                                </Link>
                                            </div>
                                        </td>
                                        <td>{item.created_at}</td>
                                        <td>{item.payment}</td>
                                        <td>{item.total ? formatCash(item.total) : null} <sup>đ</sup></td>
                                        <td><span className={`order-status ${getClassStatus(item.status)}`}>{item.status}</span></td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}