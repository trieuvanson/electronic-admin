import React, {useContext, useState} from 'react'
import {Link} from "react-router-dom";

function Slides() {

    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="ti-menu"></i>
                </div>
                <div className="main-title">
                    Quản lý Slideshow
                </div>
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
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="box">
                            <div className="box-header">
                                Danh mục Slideshow
                            </div>
                            <div className="box-body overflow-scroll">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Hình</th>
                                        <th>Sản phẩm</th>
                                        <th>Hiển thị</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <td>
                                        <input type="text" name="" id="" className="table-input-text"/>
                                    </td>
                                    <td>
                                        <img src="" alt="" className="table-img"/>
                                    </td>
                                    <td>
                                        Điện thoại
                                        <div className="table-title">
                                            <Link to="/admin/slides/detail" className="mr-8 text-priamry">
                                                <i className="ti-pencil-alt"></i>
                                                edit
                                            </Link>
                                            <Link to="" className="text-danger">
                                                <i className="ti-trash"></i>
                                                delete
                                            </Link>
                                        </div>
                                    </td>
                                    <td>
                                        <input type="checkbox" name="" id=""/>
                                    </td>
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

export default Slides