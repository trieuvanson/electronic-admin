import React, {useContext, useEffect, useState} from 'react'
import {Helmet} from "react-helmet";
import {GlobalState} from "../../../GlobalState";
import {useParams} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function SlidesController() {
    const state = useContext(GlobalState)
    const params = useParams();
    const [products, setProducts] = state.productAPI.products
    const [slides, setSlides] = state.categoriesApi.slides
    const [detail, setDetail] = useState([])
    const slideAction = state.categoriesApi.slideAction
    useEffect(() => {
        if (params.id) {
            getDetails(params.id)
        }
    }, [params.id, slides])


    async function getDetails() {
        await slides.forEach(s => {
            if (s.id == params.id) {
                setDetail(s)
            }
        })
    }

    async function updateSlideDetail(detail) {
        await slideAction.updateSlide(detail)
            .then(res => {
                toast.success("Cập nhật thành công!")
            })
            .catch(err => {
                toast.error("Cập nhật thất bại!")
            })
    }

    const inputChange = (e) => {
        const {name, value} = e.target
        if (name === "product") {
            setDetail({...detail, product: {id: value}})
        } else {
            setDetail({...detail, [name]: value})
        }
    }

    function clear() {
        setDetail({
            postion: "",
            product: {id: ""},
        })
    }


    return (
        <>
            <Helmet>
                <title>Administrator - Chi tiết Slideshow</title>
            </Helmet>
            <div className="main">
                <div className="main-header">
                    <div className="mobile-toggle" id="mobile-toggle">
                        <i className="ti-menu"></i>
                    </div>
                    <div className="main-title">Quản lý Slideshow</div>
                </div>
                <div className="main-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-text">
                                        <p>Chỉnh sửa thông tin</p>
                                        <div className="data-time">
                                            <span>Ngày tạo: {detail.created_at}</span>
                                            <span>cập nhập lần cuối: {detail.update_at}</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">STT</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name={"postion"}
                                                            value={detail?.postion}
                                                            onChange={inputChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Sản phấm</label> <br/>
                                                        <select className="form-control" name={"product"}
                                                                value={detail?.product?.id} onChange={inputChange}>
                                                            <option value="">Chọn sản phẩm</option>
                                                            {
                                                                products.map(product => {
                                                                    return (
                                                                        <option key={product.id}
                                                                                value={product.id}>
                                                                            {product.name}
                                                                        </option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label className="form-label">Trạng thái</label> <br/>
                                                        <select className="selection form" name={"status"}
                                                                onChange={inputChange}
                                                                value={detail?.status}>
                                                            <option value={true}>Hiển thị</option>
                                                            <option value={false}>Không hiển thị</option>
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
                                            <button onClick={() => updateSlideDetail(detail)}
                                                    className="btn btn-primary btn-icon-text btn-hover">
                                                <i className="ti-save"/>
                                                Cập nhật
                                            </button>
                                            <button onClick={clear}
                                                    className="btn btn-secondary btn-icon-text btn-hover">
                                                <i className="ti-reload"/>
                                                Làm mới
                                            </button>
                                            <button onClick={() => window.location.href = "/admin/slides"}
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

export default SlidesController