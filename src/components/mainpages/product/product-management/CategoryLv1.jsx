import React from 'react'

function CategoryLv1() {

    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="ti-menu"></i>
                </div>
                <div className="main-title">
                    Quản lý danh mục cấp 1
                </div>
            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="box">
                            <div className="box-header">
                                Chỉnh sửa thông tin
                            </div>
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label className="form-label">ID</label>
                                                    <input type="text" className="form-control" value="12" disabled/>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label className="form-label">Name</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label className="form-label">Ngày tạo</label>
                                                    <input type="date" className="form-control"/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer box-btn">
                                <button className="btn btn-primary btn-icon-text btn-hover">
                                    <i className="ti-save"></i>
                                    Lưu
                                </button>
                                <button className="btn btn-success btn-icon-text btn-hover">
                                    <i className="ti-save"></i>
                                    Lưu lại trang
                                </button>
                                <button className="btn btn-danger btn-icon-text btn-hover">
                                    <i className="ti-reload"></i>
                                    Xóa tất cả
                                </button>
                                <button className="btn btn-primary btn-icon-text btn-hover">
                                    <i className="ti-close"></i>
                                    Thoát
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CategoryLv1