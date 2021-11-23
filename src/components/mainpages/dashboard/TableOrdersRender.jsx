import React from 'react'
import {OrderStatus} from "../../../utils/DataCommon";
import {formatCash} from "../../../utils/CurrencyCommon";

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
                    Order
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
    )
}