import React, {useContext, useState} from 'react'
import {Link} from "react-router-dom"
import {GlobalState} from "../../../GlobalState";
import {formatCash} from "../../../utils/CurrencyCommon";
import {OrderStatus} from "../../../utils/DataCommon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from "../../../api/Pagination";

function Order() {
    const state = useContext(GlobalState)
    const [order] = state.orderAPI.order
    const status = OrderStatus
    const action = state.orderAPI.action
    const [filter, setFilter] = useState({
        fullname: "", status: "", payment: "", max: "", minDate: "", maxDate: ""
    })

    const sortOrder = () => {
        return order.sort((a,b) => {
            return new Date(a.update_at).getTime() -
                new Date(b.update_at).getTime()
        }).reverse();
    }

    const inputChange = (e) => {
        const {name, value} = e.target
        setFilter({...filter, [name]: value})
        console.log(filter)
    }
    const filterOrder = (e) => {
        e.preventDefault()
        action.getOrdersByFilter(filter)
        toast("Lọc thành công!")
    }

    const pagination = new Pagination(sortOrder())
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
                                            <label className="form-label">Họ tên</label>
                                            <input type="text" name={"fullname"} value={filter?.fullname}
                                                   onChange={inputChange} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Trạng thái</label>
                                            <select className="form-control" value={filter?.status}
                                                    onChange={inputChange} name={"status"}>
                                                <option value="">Tất cả</option>
                                                {
                                                    OrderStatus.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.name}>{item.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Khoảng tiền</label>
                                            <input type="number" value={filter?.max}
                                                   onChange={inputChange} name={"max"} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Thanh toán</label>
                                            <select className="form-control" name={"payment"}
                                                    onChange={inputChange} value={filter?.payment}>
                                                <option value="">Tất cả</option>
                                                <option value="Tiền mặt">Tiền mặt</option>
                                                <option value="Thanh toán Paypal">Thanh toán Paypal</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Từ</label>
                                            <input type="date" value={filter?.minDate}
                                                   onChange={inputChange} name={"minDate"} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Đến</label>
                                            <input type="date" value={filter?.maxDate}
                                                   onChange={inputChange} name={"maxDate"} className="form-control"/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-group">
                                            <button onClick={filterOrder} className="btn btn-primary btn-icon-text btn-hover">
                                                <i className="ti-filter"></i>
                                                Lọc
                                            </button>
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
                                        order && pagination.currentItems.map((item, index) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>#{index + 1}</td>
                                                    <td>{item.address?.fullname}
                                                        <sup className="update-end"> Cập nhập lần
                                                            cuối: {item.update_at}</sup>
                                                        <div className="table-title">
                                                            <Link to={`/admin/order/${item.id}`}
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
                            <ul className="pagination">
                                <li><Link to="#"
                                          onClick={() => pagination.prev()}><i
                                    className='ti-angle-left'/></Link></li>
                                {pagination.renderPageNumbers}
                                <li><Link to="#"
                                          onClick={() => pagination.next()}><i
                                    className='ti-angle-right'/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Order