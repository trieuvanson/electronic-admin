import React, {useContext, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

function User() {

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
                                        <tr>
                                            <td>
                                                <input type="text" className="table-input" value="2"/>
                                            </td>
                                            <td>
                                                Hoàng Tân Đại
                                                <div className="table-title">
                                                    <Link
                                                        to="/admin/user/detail"
                                                        className="mr-8 text-priamry"
                                                    >
                                                        <i className="ti-pencil-alt"></i>
                                                        edit
                                                    </Link>
                                                    <Link to="" className="text-danger">
                                                        <i className="ti-trash"></i>
                                                        delete
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>Nam</td>
                                            <td className="text-center">
                                                29/07/2001
                                            </td>
                                            <td className="text-center">
                                                100
                                            </td>
                                            <td className="text-center">
                                                100
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <input type="text" className="table-input" value="2"/>
                                            </td>
                                            <td>
                                                Hoàng Tân Đại
                                                <div className="table-title">
                                                    <Link to="/admin/user/detail" className="mr-8 text-priamry">
                                                        <i className="ti-pencil-alt"></i>
                                                        edit
                                                    </Link>
                                                    <Link href="" className="text-danger">
                                                        <i className="ti-trash"></i>
                                                        delete
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>Nam</td>
                                            <td className="text-center">
                                                29/07/2001
                                            </td>
                                            <td className="text-center">
                                                100
                                            </td>
                                            <td className="text-center">
                                                100
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>


                                </div>
                                <ul className="pagination">
                                    <li>
                                        <a href="#"><i className="ti-angle-left"></i></a>
                                    </li>
                                    <li><a href="#" className="active">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li>
                                        <a href="#"><i className="ti-angle-right"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default User