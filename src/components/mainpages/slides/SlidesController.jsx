import React, {useContext, useState} from 'react'
import {Helmet} from "react-helmet";

function SlidesController() {

    return (
        <>
            <Helmet>
                <title>Administrator - Chi tiết Slideshow</title>
            </Helmet>
            <div className="main">
                <div className="main-header">
                    <div className="mobile-toggle" id="mobile-toggle">
                        <i className="ti-menu"></i>
                    </div>
                    <div className="main-title">Quản lý Slideshow</div>
                </div>
                <div className="main-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-text">
                                        <p>Chỉnh sửa Slideshow</p>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">STT</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value="12"
                                                            disabled
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Sản phẩm</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label className="form-label">Trạng thái</label> <br/>
                                                        <select className="selection form">
                                                            <option value="">Hoạt động</option>
                                                            <option value="">Không hoạt động</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer box-btn">
                                    <button className="btn btn-primary btn-icon-text">Lưu</button>
                                    <button className="btn btn-success btn-icon-text">
                                        Lưu lại trang
                                    </button>
                                    <button className="btn btn-danger btn-icon-text">Xóa tất cả</button>
                                    <button className="btn btn-secondary btn-icon-text">Thoát</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}

export default SlidesController