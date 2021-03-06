import React, {useContext, useState} from 'react'
import {GlobalState} from "../../../../GlobalState"
import {Link} from "react-router-dom"
import {USER_LINK} from "../../../../utils/hyperlink";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from "../../../../api/Pagination";
import {Helmet} from "react-helmet";
function Product() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productAPI.products
    const [brands] = state.categoriesApi.brands
    const [categories] = state.categoriesApi.categories
    const action = state.productAPI.productAction
    const [filter, setFilter] = useState({
        search: "",
        pcname: "",
        bname: "",
        minDate: "",
        maxDate: "",
        maxPrice: "",
        status: true,
        features: false,
        bestSeller: false

    })

    const updateProductOnclick = (e, id) => {
        const {name} = e.target
        products.map(product => {
            if (product.id === id) {
                product[name] = !product[name]
                action.updateProduct(product)
            }
        })
        setProducts([...products])
    }
    const inputChange = (e) => {
        const {name, value} = e.target
        setFilter({...filter, [name]: value})
    }


    const sortProductsByDate = () => {
        return products.sort((a, b) => {
            return new Date(a.update_at).getTime() -
                new Date(b.update_at).getTime()
        }).reverse();
    }

    const pagination = new Pagination(sortProductsByDate())

    const clickFilter = (e) => {
        action.getProductsByFilter(filter).then(toast("Lọc thành công!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            closeOnClick: true
        }))
    }
    const deleteProduct = (product) => {
        action.deleteProduct(product).then(toast("Xóa thành công!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
            closeOnClick: true
        }))
    }


    return (

        <>
            <Helmet>
                <title>Administrator - Quản lý sản phẩm</title>
            </Helmet>
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
                            <div className="box-light box-btn">
                                <Link to={"product/create"} className="btn btn-primary btn-icon-text text-link">
                                    <i className="ti-plus"></i>
                                    Thêm
                                </Link>
                                <div className="form-search">
                                    <div className="input-group">
                                        <input type="text" placeholder={"Nhập dữ liệu tìm kiếm..."}
                                               name={"search"} value={filter.search} onChange={inputChange}/>
                                        <div className="icon" onClick={clickFilter}>
                                            <i className="ti-search"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group box-light">
                                <label className="form-label">Danh mục cấp 1</label>
                                <select className="form-control"
                                        name={"bname"} value={filter.bname} onChange={inputChange}>
                                    <option value="">Chọn danh mục</option>
                                    {
                                        brands.map(brand => {
                                            return (
                                                <option key={brand.id} value={brand.name}>{brand.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group box-light">
                                <label className="form-label">Danh mục cấp 2</label>
                                <select className="form-control"
                                        name={"pcname"} value={filter.pcname} onChange={inputChange}>
                                    <option value="">Chọn danh mục</option>
                                    {
                                        categories.map(category => {
                                            return (
                                                <option key={category.id} value={category.name}>{category.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group box-light">
                                <label className="form-label">Từ</label>
                                <input type="date"
                                       name={"minDate"} value={filter.minDate} onChange={inputChange}
                                       className="form-control"/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group box-light">
                                <label className="form-label">Đến</label>
                                <input type="date" className="form-control"
                                       name={"maxDate"} value={filter.maxDate} onChange={inputChange}/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group box-light">
                                <label className="form-label">Khoảng tiền</label>
                                <input type="number" className="form-control"
                                       name={"maxPrice"} value={filter.maxPrice} onChange={inputChange}/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group box-light">
                                <label className="form-label">Trạng thái</label>
                                <select className="form-control"
                                        name={"status"} value={filter.status} onChange={inputChange}>
                                    <option value={true}>Hiển thị</option>
                                    <option value={false}>Không hiển thị</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group box-light">
                                <label className="form-label">Nổi bật</label>
                                <select className="form-control"
                                        name={"features"} value={filter.features} onChange={inputChange}>
                                    <option value={true}>Có</option>
                                    <option value={false}>Không</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-group box-light">
                                <label className="form-label">Bán chạy</label>
                                <select className="form-control"
                                        name={"bestSeller"} value={filter.bestSeller} onChange={inputChange}>
                                    <option value={true}>Có</option>
                                    <option value={false}>Không</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="box">
                                <div className="box-header">
                                    Danh mục sản phẩm
                                </div>
                                <div className="box-body overflow-scroll">
                                    <table>
                                        <thead>
                                        <tr>
                                            {/*<th>*/}
                                            {/*    <input type="checkbox" name="" id=""/>*/}
                                            {/*</th>*/}
                                            <th>STT</th>
                                            <th>Hình</th>
                                            <th>Tiêu đề</th>
                                            <th className="text-center">Nổi bật</th>
                                            <th className="text-center">Bán chạy</th>
                                            <th className="text-center">Hiển thị</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            products && pagination.currentItems.map((product, index) => (
                                                <tr key={product.id}>
                                                    {/*<td>*/}
                                                    {/*    <input type="checkbox" name="" id=""/>*/}
                                                    {/*</td>*/}
                                                    <td>
                                                        <input type="text" className="table-input" value={++index}/>
                                                    </td>
                                                    <td>
                                                        <img src={product.thumbnail} alt="" className="table-img"/>
                                                    </td>
                                                    <td>
                                                        {product.name} <sup className="update-end">Cập nhập lần
                                                        cuối: {product.update_at}</sup>
                                                        <div className="table-title">
                                                            <a href={`${USER_LINK}/product/detail/${product.id}`}
                                                               className="mr-8 text-priamry">
                                                                <i className="ti-eye"></i>
                                                                view
                                                            </a>
                                                            <Link to={`/admin/product/${product.id}`}
                                                                  className="mr-8 text-priamry">
                                                                <i className="ti-pencil-alt"></i>
                                                                edit
                                                            </Link>
                                                            <button onClick={() => deleteProduct(product)} className="text-danger">
                                                                <i className="ti-trash"></i>
                                                                delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <input type="checkbox"
                                                               onClick={(e) => updateProductOnclick(e, product.id)}
                                                               checked={product.features} name="features" id="features"/>
                                                    </td>
                                                    <td className="text-center">
                                                        <input type="checkbox" name="best_seller"
                                                               onClick={(e) => updateProductOnclick(e, product.id)}
                                                               checked={product.best_seller} id="best_seller"/>
                                                    </td>
                                                    <td className="text-center">
                                                        <input type="checkbox" name="status"
                                                               onClick={(e) => updateProductOnclick(e, product.id)}
                                                               checked={product.status} id="status"/>
                                                    </td>
                                                </tr>
                                            ))
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

export default Product