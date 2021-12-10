import React, {useContext, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

function Voucher() {

    return (
        <>
            <Helmet>
                <title>Administrator - Quản lý voucher</title>
            </Helmet>
            <div className="main">
                <div className="main-header">
                    <div className="mobile-toggle" id="mobile-toggle">
                        <i className="ti-menu"></i>
                    </div>
                    <div className="main-title">Quản lý voucher</div>
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

                        <div className="col-4">
                            <div className="box-light box-btn">
                                <div className="form-group">
                                    <label className="form-label">Trạng thái</label>
                                    <select className="selection">
                                        <option value="">Kích hoạt</option>
                                        <option value="">Chưa áp dụng</option>
                                        <option value="">Tất cả</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="box">
                                <div className="box-header">Danh sách voucher</div>
                                <div className="box-body overflow-scroll">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Mã đợt phát hành</th>
                                            <th>Tên đợt phát hành</th>
                                            <th className="text-center">Từ ngày</th>
                                            <th className="text-center">Đến ngày</th>
                                            <th className="text-center">Số lượng</th>
                                            <th className="text-center">Mệnh giá</th>
                                            <th className="text-center">Trạng thái</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                PH001
                                            </td>
                                            <td>
                                                Tết đến
                                                <div className="table-title">
                                                    <Link
                                                        to="/admin/voucher/detail"
                                                        className="mr-8 text-priamry"
                                                    >
                                                        <i className="ti-pencil-alt"></i>
                                                        edit
                                                    </Link>
                                                    <a href="" className="text-danger">
                                                        <i className="ti-trash"></i>
                                                        delete
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="text-center">29/07/2001</td>
                                            <td className="text-center">29/07/2001</td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">
                                                100
                                            </td>
                                            <td className="text-center">
                                                Kích hoạt
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                PH001
                                            </td>
                                            <td>
                                                Chào hè
                                                <div className="table-title">
                                                    <a
                                                        href="/admin/voucher/detail"
                                                        className="mr-8 text-priamry"
                                                    >
                                                        <i className="ti-pencil-alt"></i>
                                                        edit
                                                    </a>
                                                    <a href="" className="text-danger">
                                                        <i className="ti-trash"></i>
                                                        delete
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="text-center">29/07/2001</td>
                                            <td className="text-center">29/07/2001</td>
                                            <td className="text-center">100</td>
                                            <td className="text-center">
                                                100
                                            </td>
                                            <td className="text-center">
                                                Kích hoạt
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

export default Voucher