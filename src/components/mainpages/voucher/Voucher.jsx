import React, {useContext, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import {GlobalState} from "../../../GlobalState";
import {formatCash} from "../../../utils/CurrencyCommon";
import Pagination from "../../../api/Pagination";

function Voucher() {
    const state = useContext(GlobalState)
    const [discounts, setDiscounts] = state.discountsApi.discounts


    const pagination = new Pagination(discounts)

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
                                    <select className="form-control">
                                        <option value="">Kích hoạt</option>
                                        <option value="">Chưa áp dụng</option>
                                        {/*<option value="">Tất cả</option>*/}
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
                                            <th className="text-center">Từ ngày</th>
                                            <th className="text-center">Đến ngày</th>
                                            <th className="text-center">Số lượng</th>
                                            <th className="text-center">Mệnh giá</th>
                                            <th className="text-center">Trạng thái</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            pagination.currentItems?.map((discount, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{discount.id}
                                                            <div className="table-title">
                                                                <Link to={`/admin/voucher/${discount.id}`}
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
                                                        <td className="text-center">{discount.created_at}</td>
                                                        <td className="text-center">{discount.expired_at}</td>
                                                        <td className="text-center">{discount.total}</td>
                                                        <td className="text-center">{discount.discount>0?formatCash(discount?.discount):0} <sup>đ</sup></td>
                                                        <td className="text-center">
                                                            <div className="switch">
                                                                <label>
                                                                    <input type="checkbox" checked={discount?.discount_status}/>
                                                                    <span className="lever"></span>
                                                                </label>
                                                            </div>
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