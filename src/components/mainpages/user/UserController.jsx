import React, {useContext, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';

function UserController() {

    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="ti-menu"></i>
                </div>
                <div className="main-title">Quản lý Khách hàng</div>
            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-text">
                                    <p>Thông tin khách hàng</p>
                                    <div className="data-time">
                                        <span>Ngày tạo: 12/12/2001</span>
                                        <span>cập nhập lần cuối: 12/12/2001</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label className="form-label">Username</label>
                                                    <input type="text" className="form-control" value="12" disabled/>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label className="form-label">Họ và tên</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label className="form-label">Email</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label className="form-label">Ngày sinh</label>
                                                    <input type="date" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label className="form-label">Giới tính</label>
                                                    <input type="radio" name="gender" id="Male" value="male"
                                                           className="form-radio"/>
                                                        <label htmlFor="Male" className="form-label">Nam</label>
                                                        <input type="radio" name="gender" id="Famle" value="famle"
                                                               className="form-radio"/>
                                                            <label htmlFor="Famle" className="form-label">Nữ</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="OrderNotes">
                                                        Địa chỉ
                                                    </label>
                                                    <textarea cols="30" rows="7" className="form-textarea"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="box mt-32">
                            <div className="box-header">Danh sách đơn hàng</div>
                            <div className="box-body overflow-scroll">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Mã</th>
                                        <th>Họ tên</th>
                                        <th>Ngày đặt</th>
                                        <th>Hình thức thanh toán</th>
                                        <th>Tổng</th>
                                        <th>Tình trạng</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Tân Đại
                                            <div className="table-title">
                                                <a
                                                    href="user-detail.html"
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
                                        <td>2021-05-09</td>
                                        <td>Tiền mặt</td>
                                        <td>$123.45</td>
                                        <td>
                                            <span className="order-status order-ready"> Đã giao </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>Tân Đại
                                            <div className="table-title">
                                                <a
                                                    href="user-detail.html"
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
                                        <td>2021-05-09</td>
                                        <td>Tiền mặt</td>
                                        <td>$123.45</td>
                                        <td>
                                            <span className="order-status order-cancel"> đã hủy </span>
                                        </td>
                                    </tr>

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

export default UserController