import React, {useContext, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import {GlobalState} from "../../../GlobalState";
import Pagination from "../../../api/Pagination";
import {formatCash} from "../../../utils/CurrencyCommon";

function User() {
    const state = useContext(GlobalState)
    const [users, setUsers] = state.userAPI.users
    const [orderDetails] = state.orderAPI.orderDetails
    const [order] = state.orderAPI.order
    const sortUsersByUpdate_at = users.sort((a, b) => {
        return new Date(b.update_at).getTime() -
            new Date(a.update_at).getTime()
    })

    const pagination = new Pagination(sortUsersByUpdate_at)

    const groupBy = order.reduce((r, a) => {
        r[a.user?.username] = [...r[a.user?.username] || [], a]
        return r;
    }, {});

    const getTotal = (username) => {
        return groupBy[username]?.reduce((r, a) => {
            return r + a?.total
        }, 0)
    }

    return (
        <>
            <Helmet>
                <title>Administrator - Quản lý khách hàng</title>
            </Helmet>
            <div className="main">
                <div className="main-header">
                    <div className="mobile-toggle" id="mobile-toggle">
                        <i className="ti-menu"></i>
                    </div>
                    <div className="main-title">Quản lý tài khoản</div>
                </div>
                <div className="main-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="box-light box-btn">
                                <button className="btn btn-primary btn-icon-text">
                                    <i className="ti-plus"></i>
                                    Thêm
                                </button>
                                <button className="btn btn-danger btn-icon-text">
                                    <i className="ti-trash"></i>
                                    Xóa tất cả
                                </button>

                                <div className="form-search">
                                    <div className="input-group">
                                        <input type="text"/>
                                        <div className="icon">
                                            <i className="ti-search"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="box">
                                <div className="box-header">Danh mục sản phẩm</div>
                                <div className="box-body overflow-scroll">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Họ và tên</th>
                                            <th>Giới tính</th>
                                            <th className="text-center">Ngày sinh</th>
                                            <th className="text-center">SL Đơn hàng</th>
                                            <th className="text-center">Tổng tiền</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            pagination.currentItems.map((user, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <input type="text" className="table-input"
                                                                   value={index + 1}/>
                                                        </td>
                                                        <td>
                                                            {user?.fullname}
                                                            <div className="table-title">
                                                                <Link
                                                                    to={`/admin/user/${user?.username}`}
                                                                    className="mr-8 text-priamry">
                                                                    <i className="ti-pencil-alt"/>
                                                                    edit
                                                                </Link>
                                                                <button className="text-danger">
                                                                    <i className="ti-trash"></i>
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>{user?.gender?"Nam":"Nữ"}</td>
                                                        <td className="text-center">
                                                            {user?.birthday}
                                                        </td>
                                                        <td className="text-center">
                                                            {groupBy[user?.username]?.length || 0}
                                                        </td>
                                                        <td className="text-center">
                                                            {getTotal(user?.username)>0?formatCash(getTotal(user?.username)):0} <sup>đ</sup>
                                                        </td>
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
            </div>

        </>
    )
}

export default User