import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from "../../../../../GlobalState";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CategoryLv1() {
    const state = useContext(GlobalState)
    const params = useParams();
    const [brands] = state.categoriesApi.brands
    const [detail, setDetail] = useState("")
    const brandAction = state.categoriesApi.brandAction

    useEffect(() => {
        getDetail(params.id)
    }, [params.id, brands])

    const getDetail = (id) => {
        const result = brands.filter(brand => brand.id == id)
        setDetail(result[0])
    }

    const onChangeInput = (e) => {
        const {name, value} = e.target
        setDetail({...detail, [name]: value})
    }

    async function updateBrand(detail) {
        await brandAction.updateBrand(detail)
            .then(res => {
                toast.success("Cập nhật thành công")
            })
            .catch(err => {
                toast.error("Cập nhật thất bại")
            })
    }

    async function addBrand(detail) {
        await brandAction.addBrand(detail)
            .then(res => {
                toast.success("Cập nhật thành công")
            })
            .catch(err => {
                toast.error("Cập nhật thất bại")
            })
    }

    function clear() {
        setDetail({name: ""}
        )
    }

    const changeUpdateAndCreate = () => {
        if (window.location.href.match("/create")) {
            return <button onClick={() => addBrand(detail)}
                    className="btn btn-primary btn-icon-text btn-hover">
                <i className="ti-save"/>
                Lưu
            </button>
        } else
            return <button onClick={() => updateBrand(detail)}
                           className="btn btn-primary btn-icon-text btn-hover">
                <i className="ti-save"/>
                Cập nhật
            </button>
    }

    return (
        <>
            <Helmet>
                <title>Administrator - Chi tiết danh mục cấp 1</title>
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
                                                        <label className="form-label">Tên danh mục</label>
                                                        <input type="text" name="name"
                                                               value={detail?.name} onChange={onChangeInput}
                                                               className="form-control"/>
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
                                            <button onClick={() => window.location.href = "/admin/product/brand"}
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