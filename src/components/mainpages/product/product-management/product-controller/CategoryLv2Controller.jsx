import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from "../../../../../GlobalState";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import {toast, ToastContainer} from "react-toastify";

function CategoryLv1() {
    const state = useContext(GlobalState)
    const params = useParams();
    const [categories] = state.categoriesApi.categories
    const [brands] = state.categoriesApi.brands
    const [detail, setDetail] = useState("")
    const categoryAction = state.categoriesApi.categoryAction

    useEffect(() => {
        getDetail(params.id)
    }, [params.id, brands])

    const getDetail = (id) => {
        const result = categories.filter(category => category.id == id)
        setDetail(result[0])
    }


    const addCategory = (category) => {
        categoryAction.addCategory(category).then(() => toast.success("Thêm thành công"))
    }

    const updateCategory = (category) => {
        categoryAction.updateCategory(category).then(() => toast.success("Cập nhật thành công"))
    }


    const onChangeInput = (e) => {
        const {name, value} = e.target
        if (name === "brand") {
            setDetail({...detail, brand: {id: value}})
        } else {
            setDetail({...detail, [name]: value})
        }
    }

    const changeUpdateAndCreate = () => {
        if (window.location.href.match("/create")) {
            return <button onClick={() => addCategory(detail)}
                           className="btn btn-primary btn-icon-text btn-hover">
                <i className="ti-save"/>
                Lưu
            </button>
        } else
            return <button onClick={() => updateCategory(detail)}
                           className="btn btn-primary btn-icon-text btn-hover">
                <i className="ti-save"/>
                Cập nhật
            </button>
    }

    function clear(e) {
        e.preventDefault()
        setDetail({
            name: "", brand: ""
        })
    }

    return (
        <>
            <Helmet>
                <title>Administrator - Chi tiết danh mục cấp 2</title>
            </Helmet>
            <div className="main">
                <div className="main-header">
                    <div className="mobile-toggle" id="mobile-toggle">
                        <i className="ti-menu"></i>
                    </div>
                    <div className="main-title">
                        Quản lý danh mục cấp 2
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
                                                        <label className="form-label">Name</label>
                                                        <input type="text" name="name"
                                                               value={detail?.name} onChange={onChangeInput}
                                                               className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Danh mục cấp 1</label>
                                                        <select name="brand"
                                                                value={detail?.brand?.id || 0} onChange={onChangeInput}
                                                                className="form-control">
                                                            <option value="">Chọn danh mục cấp 1</option>
                                                            {
                                                                brands.map((category, index) => {
                                                                    return (
                                                                        <option key={index}
                                                                                value={category.id}>{category.name}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="box-btn mt-32">
                                            {changeUpdateAndCreate()}
                                            <button onClick={clear}
                                                    className="btn btn-secondary btn-icon-text btn-hover">
                                                <i className="ti-reload"/>
                                                Làm mới
                                            </button>
                                            <button onClick={() => window.location.href = "/admin/product/category"}
                                                    className="btn btn-danger btn-icon-text btn-hover">
                                                <i className="ti-shift-right"/>
                                                Thoát
                                            </button>
                                        </div>
                                    </div>
                                </div>
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