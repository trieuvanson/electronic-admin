import React, {useContext, useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom"
import {GlobalState} from "../../../GlobalState";
import {formatCash} from "../../../utils/CurrencyCommon";
import {OrderStatus} from "../../../utils/DataCommon";

function OrderController() {
    const state = useContext(GlobalState)
    const params = useParams();
    const [order] = state.orderAPI.order
    const [orderDetails] = state.orderAPI.orderDetails
    const [detail, setDetail] = useState("")
    const [orderDetailsByOrder, setOrderDetailsByOrder] = useState([]);

    useEffect(() => {
        getDetail();
        getOrderDetailsByOrderId()
    }, [params.id, order])


    function getOrderDetailsByOrderId() {
        const newArray = [];
        orderDetails.forEach(oddt => {
            if (oddt.order.id == params.id) {
                newArray.push(oddt)
            }
        })
        setOrderDetailsByOrder(newArray)
    }

    const inputChange = (e) => {
        const {name, value} = e.target
        setDetail({...detail, [name]: value})
        console.log(detail)
    }
    console.log(orderDetailsByOrder)

    async function getDetail() {
        await order.forEach(od => {
            if (od.id == params.id) {
                setDetail(od)
            }
        })
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
                <div className="box f-height">
                    <div className="box-header">
                        Thông tin chính
                    </div>
                    <div className="box-body">
                        <div className="row">
                            <div className="col-4 col-md-6 col-sm-12">
                                <div className="order-detail">
                                    <div className="order">
                                        <span className="order-header">Mã đơn hàng</span>
                                        <p className="text-priamry">2323</p>
                                    </div>
                                    <div className="order">
                                        <span className="order-header">Số điện thoại</span>
                                        <p>09870103358</p>
                                    </div>
                                    <div className="order">
                                        <span className="order-header">Ngày đặt</span>
                                        <p>20/02/2001</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <div className="order-detail">
                                    <div className="order">
                                        <span className="order-header">Hình thức thanh toán</span>
                                        <p className="text-priamry">Tiền mặt</p>
                                    </div>
                                    <div className="order">
                                        <span className="order-header">Email</span>
                                        <p>@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <div className="order-detail">
                                    <div className="order">
                                        <span className="order-header">Họ tên</span>
                                        <p className="text-success text-bold text-uppercase">Nguyễn Thị Mỹ Lẹ</p>
                                    </div>
                                    <div className="order">
                                        <span className="order-header">Địa chỉ</span>
                                        <p>phần mềm quang trung, q.12, tp.hcm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-sm-12">
                                <div className="order-detail">
                                    <div className="order">
                                        <span className="order-header">Yêu cầu khác</span>
                                        <textarea className="order-textarea" rows="6"></textarea>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-sm-12">
                                <div className="order-detail">
                                    <div className="order">
                                        <span className="order-header">Tình trạng</span>
                                        <select className="order-select">
                                            <option value="">Mới đặt</option>
                                            <option value="">Ghi gì thì ghi</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-sm-12">
                                <div className="order-detail">
                                    <div className="order">
                                        <span className="order-header">Ghi chú</span>
                                        <textarea className="order-textarea" rows="6" placeholder="Ghi chú"></textarea>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box f-height mt-32">
                    <div className="box-header">
                        Chi tiết đơn hàng
                    </div>
                    <div className="box-body overflow-scroll">
                        <table>
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th>Hình ảnh</th>
                                <th>Sản phẩm</th>
                                <th>Đơn giá</th>
                                <th>Số lượng</th>
                                <th>Tạm tính</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <img src="./images/product1.jpg" alt="" className="order-img"/>
                                </td>
                                <td>Điện thoại</td>
                                <td>250.000 <sup>đ</sup></td>
                                <td>1</td>
                                <td className="text-danger">250.000 <sup>đ</sup></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="box-footer">
                        <div className="col-12">
                            <div className="order-total">
                                <span>Tổng giá trị đơn hàng</span>
                                <p className="text-danger">250.000 <sup>đ</sup></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="box-btn mt-32">
                            <button className="btn btn-primary btn-icon-text btn-hover">
                                <i className="ti-save"></i>
                                Lưu
                            </button>
                            <button className="btn btn-secondary btn-icon-text btn-hover">
                                <i className="ti-reload"></i>
                                Làm lại
                            </button>
                            <button className="btn btn-danger btn-icon-text btn-hover">
                                <i className="ti-shift-right"></i>
                                Thoát
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderController