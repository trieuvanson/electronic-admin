import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import {GlobalState} from "../../../GlobalState";
import {formatCash} from "../../../utils/CurrencyCommon";

function Product() {
    const state = useContext(GlobalState)
    const [order] = state.orderAPI.order
    const status = [{
        id: 0,
        name: 'Đang chờ xử lý',
        class: 'badge-warning'
    }, {
        id: 1,
        name: 'Đang giao hàng',
        class: 'badge-info'
    }, {
        id: 2,
        name: 'Đã giao hàng',
        class: 'badge-success'
    }, {
        id: 3,
        name: 'Đã hủy',
        class: 'badge-danger'
    }]

    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="ti-menu"></i>
                </div>
                <div className="main-title">
                    Quản lý đơn hàng
                </div>
            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="box">
                            <div className="box-header">
                                Danh sách đơn hàng
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
                                        order && order.map((item, index) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>#{index + 1}</td>
                                                    <td>{item.address?.fullname}</td>
                                                    <td>{item.created_at}</td>
                                                    <td>{item.payment}</td>
                                                    <td>{item.total ? formatCash(item.total) : null} <sup>đ</sup></td>
                                                    <td><span className="order-status order-cancel">{item.status}</span></td>
                                                </tr>
                                            )
                                        })
                                    }
                                    {/* <tr>
                                        <td>
                                            <input type="checkbox" name="" id=""/>
                                        </td>
                                        <td>#2345</td>
                                        <td>Nguyễn Thị Mỹ Duyên</td>
                                        <td>2021-05-09</td>
                                        <td>Tiền mặt</td>
                                        <td>$123.45</td>
                                        <td>
                                <span className="order-status order-shipped">
                                  chưa giao
                                </span>
                                        </td>
                                        <td>
                                            <a href="order-detail.html" href="btn">
                                                <i className="ti-pencil-alt icon-edit"></i>
                                            </a>
                                            <button>
                                                <i className="ti-trash icon-delete"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" name="" id=""/>
                                        </td>
                                        <td>#2345</td>
                                        <td>Tân Đại</td>
                                        <td>2021-05-09</td>
                                        <td>Tiền mặt</td>
                                        <td>$123.45</td>
                                        <td>
                                <span className="order-status order-ready">
                                  Đã giao
                                </span>
                                        </td>
                                        <td>
                                            <button>
                                                <i className="ti-pencil-alt icon-edit"></i>
                                            </button>
                                            <button>
                                                <i className="ti-trash icon-delete"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" name="" id=""/>
                                        </td>
                                        <td>#2345</td>
                                        <td>Tân Đại</td>
                                        <td>2021-05-09</td>
                                        <td>Tiền mặt</td>
                                        <td>$123.45</td>
                                        <td>
                              <span className="order-status order-cancel">
                                đã hủy
                              </span>
                                        </td>
                                        <td>
                                            <button>
                                                <i className="ti-pencil-alt icon-edit"></i>
                                            </button>
                                            <button>
                                                <i className="ti-trash icon-delete"></i>
                                            </button>
                                        </td>
                                    </tr>*/}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product