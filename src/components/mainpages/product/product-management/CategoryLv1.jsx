import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from "../../../../GlobalState";
import {Link} from "react-router-dom";
import Pagination from "../../../../api/Pagination";
import {Helmet} from "react-helmet";
import {USER_LINK} from "../../../../utils/hyperlink";
import {toast, ToastContainer} from "react-toastify";

function CategoryLv1() {
    const state = useContext(GlobalState)
    const [brands, setBrands] = state.categoriesApi.brands
    const [products] = state.productAPI.products
    const brandAction = state.categoriesApi.brandAction
    const [name, setName] = useState("")

    const pagination = new Pagination(brands)

    const deleteBrand = (brand) => {
        brandAction.deleteBrand(brand).then(() => toast.success("Xóa thành công"))
    }

    const getBrandsByName = (name) => {
        brandAction.getBrandsByName(name).then(() => {
            toast.success("Tìm kiếm thành công")
        })
    }

    function inputChange(e) {
        const value = e.target.value
        setName(value)
    }

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
                                <Link to={"brand/create"} className="btn btn-primary btn-icon-text text-link">
                                    <i className="ti-plus"></i>
                                    Thêm
                                </Link>
                                <div className="form-search">
                                    <div className="input-group">
                                        <input type="text" value = {name}
                                               placeholder={"Bạn cần tìm gì?"} onChange={inputChange}/>
                                        <div onClick={() => getBrandsByName(name)} className="icon">
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
                                                            <input type="text" className="table-input"
                                                                   value={index + 1}/>
                                                        </td>
                                                        <td>
                                                            {brand.name} <sup className="update-end">Cập nhập lần
                                                            cuối: {brand.update_at}</sup>
                                                            <div className="table-title">
                                                                <a href={`${USER_LINK}/products/brand/${brand.id}`}
                                                                   className="mr-8 text-priamry">
                                                                    <i className="ti-eye"/>
                                                                    view
                                                                </a>
                                                                <Link to={`brand/${brand.id}`}
                                                                      className="mr-8 text-priamry">
                                                                    <i className="ti-pencil-alt"/>
                                                                    edit
                                                                </Link>
                                                                <button onClick={() => deleteBrand(brand)} className="text-danger">
                                                                    <i className="ti-trash"/>
                                                                    delete
                                                                </button>
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
            <ToastContainer/>
        </>

    )
}

export default CategoryLv1