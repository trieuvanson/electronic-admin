import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from "../../../../../GlobalState";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Helmet} from "react-helmet";
import {toast, ToastContainer} from "react-toastify";

function ProductController() {
    const state = useContext(GlobalState)
    const params = useParams();
    const [products] = state.productAPI.products
    const [categories] = state.categoriesApi.categories
    const [brands] = state.categoriesApi.brands
    const [detail, setDetail] = useState("");
    const [categoriesByBrands, setCategoriesByBrands] = useState("");
    const action = state.productAPI.productAction
    useEffect(() => {
        getDetail();
    }, [params.id, products])
    const getCategoriesByBrand = (id) => {
        const newArray = categories.filter(category => category.brand?.id == id)
        setCategoriesByBrands(newArray)
    }

    function getDetail() {
        products.forEach(pro => {
            if (pro.id == params.id) {
                setDetail(pro)
            }
        })
    }

    const upLoadImage = async (file, model) => {
        if (!file) return
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "electronic")
        formData.append("folder", "electronic/products")
        var config = {
            method: 'post',
            url: 'https://api.cloudinary.com/v1_1/trieuvanson/image/upload',
            headers: {},
            data: formData
        };
        const res = await axios(config)
            .catch(function (error) {
                console.log(error);
            });
        setDetail({...detail, [model]: res.data.url})
    }

    const inputChange = (e) => {
        const {name, value} = e.target
        console.log([name])
        if (name === "category") {
            setDetail({...detail, category: {id: value, brand: {id: detail.category.brand.id}}})
        } else if (name === "brand") {
            getCategoriesByBrand(value)
            setDetail({...detail, category: {id: categoriesByBrands[0]?.id, brand: {id: value}}})
        } else if (name === "thumbnail") {
            upLoadImage(e.target.files[0], name)
        } else if (name === "thumbnail2") {
            console.log(e.target.files[0])
            upLoadImage(e.target.files[0], name)
        } else {
            setDetail({...detail, [name]: value})
        }
    }

    const updateProduct = (e) => {
        action.updateProduct(detail).then(() => toast.success("C???p nh???t th??nh c??ng"))
        window.location.reload()
    }

    const clear = (e) => {
        setDetail({
            ...detail,
            name: "",
            regular_price: "",
            sale_price: "",
            category: {id: categoriesByBrands[0]?.id, brand: {id: brands[0]?.id}},
            description: "",

        })
    }

    const addProduct = () => {
        action.addProduct(detail).then(() => toast.success("Th??m s???n ph???m th??nh c??ng"))
    }

    const changeUpdateAndCreate = () => {
        if (window.location.href.match("/create")) {
            return <button onClick={() => addProduct(detail)}
                           className="btn btn-primary btn-icon-text btn-hover">
                <i className="ti-save"/>
                L??u
            </button>
        } else
            return <button onClick={() => updateProduct(detail)}
                           className="btn btn-primary btn-icon-text btn-hover">
                <i className="ti-save"/>
                C???p nh???t
            </button>
    }

    return (
        <>
            <Helmet>
                <title>Administrator - S???n ph???m chi ti???t</title>
            </Helmet>
            <div className="main">
                <div className="main-header">
                    <div className="mobile-toggle" id="mobile-toggle">
                        <i className="ti-menu"></i>
                    </div>
                    <div className="main-title">
                        Qu???n l?? s???n ph???m
                    </div>
                </div>
                <div className="main-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-text">
                                        <p>Ch???nh s???a th??ng tin</p>
                                        <div className="data-time">
                                            <span>Ng??y t???o: {detail.created_at}</span>
                                            <span>c???p nh???p l???n cu???i: {detail.update_at}</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label className="form-label">Name</label>
                                                        <input type="text" name="name" className="form-control"
                                                               value={detail?.name} onChange={inputChange}/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Gi?? g???c</label>
                                                        <input type="number" name="regular_price"
                                                               className="form-control"
                                                               value={detail?.regular_price} onChange={inputChange}/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Gi?? khuy???n m??i</label>
                                                        <input type="number" name="sale_price" className="form-control"
                                                               onChange={inputChange} value={detail?.sale_price}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Lo???i s???n ph???m</label>
                                                        <select className="form-control"
                                                                name="brand"
                                                                value={detail?.category?.brand?.id}
                                                                onChange={(e) => {
                                                                    getCategoriesByBrand(e.target.value)
                                                                    inputChange(e)
                                                                }}
                                                                onClick={(e) => {
                                                                    getCategoriesByBrand(e.target.value)
                                                                    inputChange(e)
                                                                }}>
                                                            {
                                                                brands.map((item, index) => {
                                                                    return (
                                                                        <option key={index}
                                                                                value={item.id}>
                                                                            {item.name}
                                                                        </option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Nh??n hi???u</label>
                                                        <select className="form-control"
                                                                name="category"
                                                                onChange={inputChange}
                                                                value={detail?.category?.id}
                                                        >

                                                            {
                                                                categoriesByBrands ?
                                                                    categoriesByBrands && categoriesByBrands.map((item, index) => {
                                                                        return (
                                                                            <option key={index}
                                                                                    value={item.id}>
                                                                                {item.name}
                                                                            </option>
                                                                        )
                                                                    }) :
                                                                    categories.filter(item => item.brand?.id == detail?.category?.brand?.id).map((item, index) => {
                                                                        return (
                                                                            <option key={index}
                                                                                    value={item.id}>
                                                                                {item.name}
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
                                                        <label className="form-label" htmlFor="description">
                                                            M?? t???
                                                        </label>
                                                        <textarea name="description" id="description"
                                                                  onChange={inputChange}
                                                                  value={detail?.description} cols="30" rows="7"
                                                                  className="form-textarea"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-5">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="box">
                                                        <div className="box-header">
                                                            H??nh ???nh s???n ph???m <br/>
                                                            <label htmlFor="thumbnail">
                                                                <img src={detail.thumbnail} width="50%" alt=""/>
                                                            </label>
                                                            <div className="form-group">
                                                                <input type="file" name="thumbnail"
                                                                       className="form-control-file"
                                                                       onChange={inputChange} id="thumbnail"/>
                                                            </div>
                                                            <label htmlFor="thumbnail2">
                                                                <img src={detail.thumbnail2} width="50%" alt=""/>
                                                            </label>
                                                            <div className="form-group">
                                                                <input type="file" name="thumbnail2"
                                                                       className="form-control-file"
                                                                       onChange={inputChange} id="thumbnail2"/>
                                                            </div>
                                                        </div>
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
                                                L??m m???i
                                            </button>
                                            <button onClick={() => window.location.href = "/admin/product"}
                                                    className="btn btn-danger btn-icon-text btn-hover">
                                                <i className="ti-shift-right"/>
                                                Tho??t
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

export default ProductController