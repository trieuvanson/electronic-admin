import React, {useContext, useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom"
import {GlobalState} from "../../../GlobalState";
import {formatCash} from "../../../utils/CurrencyCommon";
import {OrderStatus} from "../../../utils/DataCommon";
import {USER_LINK} from "../../../utils/hyperlink";
import {Helmet} from "react-helmet";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OrderController() {
    const state = useContext(GlobalState)
    const params = useParams();
    const [detail, setDetail] = useState([])
    const [order] = state.orderAPI.order;
    const [orderDetailsByOrderId] = state.orderAPI.orderDetailsByOrderId
    const action = state.orderAPI.action

    useEffect(() => {
        if (params.id) {
            getDetails()
        }
    }, [params.id, order])

    const inputChange = (e) => {
        const {name, value} = e.target
        setDetail({...detail, [name]: value})
    }

    async function getDetails() {
        await order.forEach(o => {
            if (o.id == params.id) {
                action.getOrderDetailsByOrderId(o.id)
                setDetail(o)
            }
        })
    }

    const updateOrderDetail = async (id, oddt) => {
        await action.updateOrder(id, oddt)
            .then(res => {
                    toast.success("Cập nhật thành công")
            })
            .catch(err => {
                toast.error("Cập nhật thất bại")
            })

    }

    const clear = () => {
        setDetail({
            note: ''
        })
    }


    return (
        <>
            <Helmet>
                <title>Administrator - Hoá đơn chi tiết</title>
            </Helmet>
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
                                            <select name="status" value={detail?.status} onChange={inputChange}
                                                    className="order-select">
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
                                                      name={"note"} onChange={inputChange} value={detail?.note}
                                                      placeholder="Ghi chú"/>
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
                                    orderDetailsByOrderId.map((oddt, index) => (
                                        <tr key={oddt.id}>
                                            <td>#{index + 1}</td>
                                            <td>
                                                <img src={oddt.product?.thumbnail} alt="" className="order-img"/>
                                            </td>
                                            <td><a
                                                href={`${USER_LINK}/product/detail/${oddt.id}`}>{oddt.product?.name}</a>
                                            </td>
                                            <td>{oddt.price ? formatCash(oddt.price) : null} <sup>đ</sup></td>
                                            <td>{oddt.quantity}</td>
                                            <td className="text-danger">{formatCash(oddt.price * oddt.quantity)}
                                                <sup>đ</sup></td>
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
                                    <p className="text-danger">{detail.subTotal >= 0 ? formatCash(detail.subTotal) : null}<sup>đ</sup>
                                    </p>
                                </div>
                                <div className="order-total">
                                    <span>Giảm giá</span>
                                    <p className="text-danger">{detail?.discount?.discount >= 0 ? formatCash(detail.discount?.discount) : 0}
                                        <sup>đ</sup></p>
                                </div>
                                <div className="order-total">
                                    <span>Tổng cộng</span>
                                    <p className="text-danger">{detail.total ? formatCash(detail.total) : null}
                                        <sup>đ</sup></p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="box-btn mt-32">
                                <button onClick={() => updateOrderDetail(params.id, detail)}
                                        className="btn btn-primary btn-icon-text btn-hover">
                                    <i className="ti-save"/>
                                    Cập nhật
                                </button>
                                <button onClick={clear} className="btn btn-secondary btn-icon-text btn-hover">
                                    <i className="ti-reload"/>
                                    Làm mới
                                </button>
                                <button onClick={() => window.location.href = "/admin/order"}
                                        className="btn btn-danger btn-icon-text btn-hover">
                                    <i className="ti-shift-right"/>
                                    Thoát
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default OrderController