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
                    <i className="ti-menu"/>
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
                                        <p className="text-priamry">{detail?.id}</p>
                                    </div>
                                    <div className="order">
                                        <span className="order-header">Số điện thoại</span>
                                        <p>{detail?.address?.phone}</p>
                                    </div>
                                    <div className="order">
                                        <span className="order-header">Ngày đặt</span>
                                        <p>{detail?.created_at}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <div className="order-detail">
                                    <div className="order">
                                        <span className="order-header">Hình thức thanh toán</span>
                                        <p className="text-priamry">{detail?.payment}</p>
                                    </div>
                                    <div className="order">
                                        <span className="order-header">Email</span>
                                        <p>{detail?.address?.user?.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <div className="order-detail">
                                    <div className="order">
                                        <span className="order-header">Họ tên</span>
                                        <p className="text-success text-bold text-uppercase">{detail?.address?.fullname}</p>
                                    </div>
                                    <div className="order">
                                        <span className="order-header">Địa chỉ</span>
                                        <p>{detail?.address?.address}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-sm-12">
                                <div className="order-detail">
                                    <div className="order">
                                        <span className="order-header">Tình trạng</span>
                                        <select value={detail?.status} className="order-select">
                                            {
                                                OrderStatus.map((item, index) => {
                                                    return (
                                                        <option className={`order-status ${item.class}`} key={index}
                                                                value={item.value}>{item.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-sm-12">
                                <div className="order-detail">
                                    <div className="order">
                                        <span className="order-header">Ghi chú</span>
                                        <textarea className="order-textarea" rows="6"
                                                  value={detail?.note} placeholder="Ghi chú"/>
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
                            {
                                orderDetailsByOrder && orderDetailsByOrder.map((oddt, index) => (
                                    <tr key={oddt.id}>
                                        <td>#{index + 1}</td>
                                        <td>
                                            <img src={oddt.product?.thumbnail} alt="" className="order-img"/>
                                        </td>
                                        <td>{oddt.product?.name}</td>
                                        <td>{oddt.price? formatCash(oddt.price):null} <sup>đ</sup></td>
                                        <td>{oddt.quantity}</td>
                                        <td className="text-danger">{formatCash(oddt.price * oddt.quantity)} <sup>đ</sup></td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                    <div className="box-footer">
                        <div className="col-12">
                            <div className="order-total">
                                <span>Tạm tính</span>
                                <p className="text-danger">{detail.subTotal>=0?formatCash(detail.subTotal):null}<sup>đ</sup></p>
                            </div>
                            <div className="order-total">
                                <span>Giảm giá</span>
                                <p className="text-danger">{detail.discount>=0?formatCash(detail.discount):null} <sup>đ</sup></p>
                            </div>
                            <div className="order-total">
                                <span>Tổng cộng</span>
                                <p className="text-danger">{detail.total?formatCash(detail.total):null} <sup>đ</sup></p>
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