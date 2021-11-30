import React, {useContext, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";

function VoucherController() {

    return (
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
                        <div className="box">
                            <div className="box-header">
                                <div className="box-text">
                                    <p>Thông tin</p>
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
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label className="form-label">Mã đợt phát hành</label>
                                                    <input type="text" className="form-control" value="12" disabled/>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label className="form-label">Tên đợt phát hành</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label className="form-label">Mệnh tiền</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label className="form-label">Tổng tiền tối thiểu</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label className="form-label">Từ ngày</label>
                                                    <input type="date" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label className="form-label">Đến ngày</label>
                                                    <input type="date" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label className="form-label">Trạng thái</label>
                                                    <select className="selection">
                                                        <option value="">Kích hoạt</option>
                                                        <option value="">Chưa áp dụng</option>
                                                        <option value="">Tất cả</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-group">
                                                    <label className="form-label">Hàng/ nhóm mua hàng</label>
                                                    <select className="selection">
                                                        <option value="">Tất cả nhóm hàng</option>
                                                        <option value="">Điện thoại</option>
                                                        <option value="">Laptop</option>
                                                        <option value="">Đồng hồ</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">

                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="OrderNotes">
                                                        Ghi chú
                                                    </label>
                                                    <textarea name="OrderNotes" id="OrderNotes" cols="30" rows="7"
                                                              className="form-textarea"></textarea>
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
                        <div className="box mt-32">
                            <div className="box-header">Lịch sử sử dụng</div>
                            <div className="box-body overflow-scroll">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Mã Phiếu</th>
                                        <th>Thời gian</th>
                                        <th>Người bán</th>
                                        <th>Người sử dụng</th>
                                        <th>Doanh thu</th>
                                        <th>Giá trị voucher</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>2.860.000</td>
                                        <td>150.000</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <a href="" className="text-link">HD001</a>
                                        </td>
                                        <td>08/05/2020 09:24</td>
                                        <td>Admin</td>
                                        <td>Tân Đại</td>
                                        <td>660.000</td>
                                        <td>50.000</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <a href="" className="text-link">HD001</a>
                                        </td>
                                        <td>08/05/2020 09:24</td>
                                        <td>Admin</td>
                                        <td>Tân Đại</td>
                                        <td>660.000</td>
                                        <td>50.000</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <button id="myBtn" className="text-link">HD001</button>
                                        </td>
                                        <td>08/05/2020 09:24</td>
                                        <td>Admin</td>
                                        <td>Tân Đại</td>
                                        <td>660.000</td>
                                        <td>50.000</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*Tìm model trong css display: block; thành none là nó ẩn*/}
            {/*Model*/}
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <div className="modal-text">
                        <h1>Hóa đơn</h1>
                        <span className="close">&times;</span>
                    </div>
                    <div className="modal-box">
                        <div className="row">
                            <div className="col-4">
                                <div className="modal-group">
                                    <label htmlFor="" className="modal-label">Mã hóa đơn</label>
                                    <span className="modal-span">HD001</span>
                                </div>
                                <div className="modal-group">
                                    <label htmlFor="" className="modal-label">Thời gian</label>
                                    <span className="modal-span">08/05/2020 09:24</span>
                                </div>
                                <div className="modal-group">
                                    <label htmlFor="" className="modal-label">Khách hàng</label>
                                    <span className="modal-span">Tân Đại</span>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="modal-group">
                                    <label htmlFor="" className="modal-label">Trạng thái</label>
                                    <span className="modal-span">Hoàn thành</span>
                                </div>
                                <div className="modal-group">
                                    <label htmlFor="" className="modal-label">Người bán</label>
                                    <span className="modal-span">Admin</span>
                                </div>
                                <div className="modal-group">
                                    <label htmlFor="" className="modal-label">Người tạo</label>
                                    <span className="modal-span">Admin</span>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="model-desc">
                                    <p className="model-decs__text">Ghi chú</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="box-body overflow-scroll">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Mã Hàng</th>
                                            <th>Tên hàng</th>
                                            <th>Số lượng</th>
                                            <th>Đơn giá</th>
                                            <th>Giảm giá</th>
                                            <th>Thành tiền</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                HD0001
                                            </td>
                                            <td>Samsung Galaxy A52s 5G 256GB</td>
                                            <td>Admin</td>
                                            <td>Tân Đại</td>
                                            <td>660.000</td>
                                            <td>50.000</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                HD0001
                                            </td>
                                            <td>Samsung Galaxy A52s 5G 256GB</td>
                                            <td>Admin</td>
                                            <td>Tân Đại</td>
                                            <td>660.000</td>
                                            <td>50.000</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                HD0001
                                            </td>
                                            <td>Samsung Galaxy A52s 5G 256GB</td>
                                            <td>Admin</td>
                                            <td>Tân Đại</td>
                                            <td>660.000</td>
                                            <td>50.000</td>
                                        </tr>

                                        </tbody>
                                    </table>
                                    <div className="modal-order-total">
                                        <ul className="modal-list">
                                            <li className="model-item">
                                                <p>Tổng số lượng</p>
                                                <span>2</span>
                                            </li>
                                            <li className="model-item">
                                                <p>Giảm giá</p>
                                                <span>200.000</span>
                                            </li>
                                            <li className="model-item">
                                                <p>Tổng tiền</p>
                                                <span>25.000.000</span>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/*  Mã js bật modal  */}
            {/*var modal = document.getElementById("myModal");*/}

            {/*var btn = document.getElementById("myBtn");*/}

            {/*var span = document.getElementsByClassName("close")[0];*/}

            {/*btn.onclick = function() {*/}
            {/*    modal.style.display = "block";*/}
            {/*}*/}

            {/*span.onclick = function() {*/}
            {/*    modal.style.display = "none";*/}
            {/*}*/}

            {/*window.onclick = function(event) {*/}
            {/*    if (event.target == modal) {*/}
            {/*        modal.style.display = "none";*/}
            {/*    }*/}
            {/*}*/}
        </div>




    )
}

export default VoucherController