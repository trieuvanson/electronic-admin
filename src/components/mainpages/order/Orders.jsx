import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import {GlobalState} from "../../../GlobalState";
import {formatCash} from "../../../utils/CurrencyCommon";

function Product() {
    const state = useContext(GlobalState)
    const [order] = state.orderAPI.order
    const status = [{
        name: 'Đang chờ xử lý',
        class: 'order-ready'
    }, {
        name: 'Đang giao hàng',
        class: 'order-delivery'
    }, {
        name: 'Đã giao hàng',
        class: 'order-shipped'
    }, {
        name: 'Huỷ bỏ',
        class: 'order-cancel'
    }]

    const sortOrder = () => {
        return order.sort((a,b) => {
            return new Date(a.update_at).getTime() -
                new Date(b.update_at).getTime()
        }).reverse();
    }

    console.log(sortOrder())


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
                                Fitter
                            </div>
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Mã</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Họ tên</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Trạng thái</label>
                                            <select className="selection">
                                                <option value="">Chọn danh mục</option>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Tổng tiền</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Từ</label>
                                            <input type="date" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Đến</label>
                                            <input type="date" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
                                        order && sortOrder().map((item, index) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>#{index + 1}</td>
                                                    <td>{item.address?.fullname}</td>
                                                    <td>{item.created_at}</td>
                                                    <td>{item.payment}</td>
                                                    <td>{item.total ? formatCash(item.total) : null} <sup>đ</sup></td>
                                                    <td><span className={`order-status ${getClassStatus(item.status)}`}>{item.status}</span></td>
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