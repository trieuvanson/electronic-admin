import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from "../../../../GlobalState";
import {Link} from "react-router-dom";
import Pagination from "../../../../api/Pagination";
import {Helmet} from "react-helmet";

function CategoryLv1() {
    const state = useContext(GlobalState)
    const [brands, setBrands] = state.categoriesApi.brands
    const [products] = state.productAPI.products

    const pagination = new Pagination(brands)
    return (
        <>
            <Helmet>
                <title>Administrator - Quản lý danh mục cấp 1</title>
            </Helmet>

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
                                <div className="box-header">
                                    Danh mục sản phẩm cấp 1
                                </div>
                                <div className="box-body overflow-scroll">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên</th>
                                            <th className={"text-center"}>Số lượng sản phẩm</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            pagination.currentItems.map((brand, index) => {
                                                return (
                                                    <tr key={brand.id}>
                                                        <td>
                                                            <input type="text" className="table-input" value={index+1}/>
                                                        </td>
                                                        <td>
                                                            {brand.name} <sup className="update-end">Cập nhập lần
                                                            cuối: {brand.update_at}</sup>
                                                            <div className="table-title">
                                                                <Link to="#" className="mr-8 text-priamry">
                                                                    <i className="ti-eye"/>
                                                                    view
                                                                </Link>
                                                                <Link to={`brand/${brand.id}`} className="mr-8 text-priamry">
                                                                    <i className="ti-pencil-alt"/>
                                                                    edit
                                                                </Link>
                                                                <Link to="#" className="text-danger">
                                                                    <i className="ti-trash"/>
                                                                    delete
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td className={"text-center"}>{products.filter(p => p?.category?.brand?.id == brand.id).length}</td>
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

export default CategoryLv1