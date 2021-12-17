import React, {useContext, useState} from 'react'
import {GlobalState} from "../../../../GlobalState";
import {Link} from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from "../../../../api/Pagination";
import {Helmet} from "react-helmet";
import {USER_LINK} from "../../../../utils/hyperlink";

function CategoryLv2() {
    const state = useContext(GlobalState)
    const [categories, setCategories] = state.categoriesApi.categories
    const [brands] = state.categoriesApi.brands
    const [products] = state.productAPI.products
    const [filter, setFilter] = useState({
        search: '',
        brandName: ''
    })

    const action = state.categoriesApi.categoryAction


    const inputChange = (e) => {
        const {name, value} = e.target
        setFilter({...filter, [name]: value})
    }

    const pagination = new Pagination(categories)

    const deleteCategory = (category) => {
        action.deleteCategory(category).then(() => toast.success('Xóa thành công'))
    }

    const filterCategories = (e) => {
        e.preventDefault()
        action.getCategoriesByFilter(filter).then(toast("Lọc thành công!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            closeOnClick: true
        }))

    }

    return (
        <>
            <Helmet>
                <title>Administrator - Quản lý danh mục cấp 2</title>
            </Helmet>
            <div className="main">
                <div className="main-header">
                    <div className="mobile-toggle" id="mobile-toggle">
                        <i className="ti-menu"></i>
                    </div>
                    <div className="main-title">
                        Quản lý Danh Mục cấp 2
                    </div>
                </div>
                <div className="main-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="box-light box-btn">
                                <Link to="category/create" className="btn btn-primary btn-icon-text text-link">
                                    <i className="ti-plus"></i>
                                    Thêm
                                </Link>

                                <div className="form-search">
                                    <div className="input-group">
                                        <input type="text" name={"search"} value={filter.search}
                                               onChange={inputChange} placeholder={"Nhập dữ liệu tìm kiếm..."}/>
                                        <div className="icon" onClick={filterCategories}>
                                            <i className="ti-search"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="box-light box-btn">
                                <select className="form-control" name={"brandName"} value={filter.brandName}
                                        onChange={inputChange}>
                                    <option value="">Chọn danh mục</option>
                                    {brands.map((brand, index) => {
                                        return (
                                            <option key={index} value={brand.name}>{brand.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="box">
                                <div className="box-header">
                                    Danh mục sản phẩm cấp 2
                                </div>
                                <div className="box-body overflow-scroll">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tiêu đề</th>
                                            <th>Danh mục cấp 1</th>
                                            <th className={"text-center"}>Số lượng sản phẩm</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            pagination.currentItems.map((category, index) => {
                                                return (
                                                    <tr key={category.id}>
                                                        <td>
                                                            <input type="text" className="table-input"
                                                                   value={index + 1}/>
                                                        </td>
                                                        <td>
                                                            {category.name} <sup className="update-end">Cập nhập lần
                                                            cuối: {category.update_at}</sup>
                                                            <div className="table-title">
                                                                <a href={`${USER_LINK}/products/category/${category.id}`} className="mr-8 text-priamry">
                                                                    <i className="ti-eye"/>
                                                                    view
                                                                </a>
                                                                <Link to={`category/${category.id}`}
                                                                      className="mr-8 text-priamry">
                                                                    <i className="ti-pencil-alt"/>
                                                                    edit
                                                                </Link>
                                                                <button onClick={() => deleteCategory(category)} className="text-danger">
                                                                    <i className="ti-trash"/>
                                                                    delete
                                                                </button>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            {category.brand?.name}
                                                        </td>
                                                        <td className={"text-center"}>{products.filter(p => p?.category?.id == category.id).length}</td>
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
                <ToastContainer/>
            </div>
        </>

    )
}

export default CategoryLv2