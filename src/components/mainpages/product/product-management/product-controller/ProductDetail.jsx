import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from "../../../../../GlobalState";
import {useParams} from "react-router-dom";
import axios from "axios";

function ProductDetail() {
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
            headers: {
            },
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
        }
        else {
            setDetail({...detail, [name]: value})
        }
        console.log(detail)
    }

    const updateProduct = (e) => {
        action.updateProduct(detail)
        window.location.reload()
    }
    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="ti-menu"></i>
                </div>
                <div className="main-title">
                    Quản lý sản phẩm
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
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="form-label">Name</label>
                                                    <input type="text" name="name" className="form-control"
                                                           value={detail?.name} onChange={inputChange}/>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label className="form-label">Giá gốc</label>
                                                    <input type="number" name="regular_price" className="form-control"
                                                           value={detail?.regular_price} onChange={inputChange}/>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label className="form-label">Giá khuyến mãi</label>
                                                    <input type="number" name="sale_price" className="form-control"
                                                           onChange={inputChange} value={detail?.sale_price}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="description">
                                                        Description
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
                                                        Danh mục sản phẩm <br/> <br/>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label className="form-label">Loại sản phẩm</label>
                                                                    <select className="selection"
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
                                                                    <label className="form-label">Hãng</label>
                                                                    <select className="selection"
                                                                            name="category"
                                                                            onChange={inputChange}
                                                                            value={detail?.category?.id}
                                                                    >

                                                                        {
                                                                            categoriesByBrands?
                                                                            categoriesByBrands && categoriesByBrands.map((item, index) => {
                                                                                return (
                                                                                    <option key={index}
                                                                                            value={item.id}>
                                                                                        {item.name}
                                                                                    </option>
                                                                                )
                                                                            }):
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
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="box">
                                                    <div className="box-header">
                                                        Hình ảnh sản phẩm <br/>
                                                        <label htmlFor="thumbnail">
                                                            <img src={detail.thumbnail} width="50%" alt=""/>
                                                        </label>
                                                        <div className="form-group">
                                                            <input type="file" name="thumbnail" className="form-control-file"
                                                                   onChange={inputChange} id="thumbnail"/>
                                                        </div>
                                                        <label htmlFor="thumbnail2">
                                                            <img src={detail.thumbnail2} width="50%" alt=""/>
                                                        </label>
                                                        <div className="form-group">
                                                            <input type="file" name="thumbnail2" className="form-control-file"
                                                                   onChange={inputChange} id="thumbnail2"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="box">
                                                    <div className="box-header">
                                                        <button className="btn btn-block btn-outline"
                                                                onClick={updateProduct}>
                                                            Lưu
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail