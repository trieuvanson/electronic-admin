import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from "../../../../../GlobalState";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";

function CategoryLv1() {
    const state = useContext(GlobalState)
    const params = useParams();
    const [categories] = state.categoriesApi.categories
    const [brands] = state.categoriesApi.brands
    const [detail, setDetail] = useState("")

    useEffect(() => {
        getDetail(params.id)
    }, [params.id, brands])

    const getDetail = (id) => {
        const result = categories.filter(category => category.id == id)
        setDetail(result[0])
    }

    const onChangeInput = (e) => {
        const {name, value} = e.target
        setDetail({...detail, [name]: value})
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
                                                                value={detail?.brand?.id || 0   } onChange={onChangeInput}
                                                                className="form-control">
                                                            <option value="">Chọn danh mục cấp 1</option>
                                                            {
                                                                brands.map((category, index) => {
                                                                    return (
                                                                        <option key={index} value={category.id}>{category.name}</option>
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
                                <div className="box-footer box-btn">
                                    <button className="btn btn-primary btn-icon-text">
                                        <i className="ti-save"></i>
                                        Lưu
                                    </button>
                                    <button className="btn btn-success btn-icon-text">
                                        <i className="ti-save"></i>
                                        Lưu lại trang
                                    </button>
                                    <button className="btn btn-danger btn-icon-text">
                                        <i className="ti-reload"></i>
                                        Xóa tất cả
                                    </button>
                                    <button className="btn btn-primary btn-icon-text">
                                        <i className="ti-close"></i>
                                        Thoát
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default CategoryLv1