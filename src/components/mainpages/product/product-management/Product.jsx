import React, {useContext} from 'react'
import {GlobalState} from "../../../../GlobalState"
import {Link} from "react-router-dom"
function Product() {
    const state = useContext(GlobalState)
    const [products] = state.productAPI.products
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
                        <div className="box-light box-btn">
                            <button className="btn btn-primary btn-icon-text btn-hover">
                                <i className="ti-plus"></i>
                                Thoát
                            </button>
                            <button className="btn btn-danger btn-icon-text btn-hover">
                                <i className="ti-trash"></i>
                                Xóa tất cả
                            </button>

                            <div className="form-search">
                                <div className="input-group">
                                    <input type="text" />
                                        <div className="icon">
                                            <i className="ti-search"></i>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="box-light box-btn">
                            <select className="selection">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>

                            <select className="selection">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
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
                                        <th>
                                            <input type="checkbox" name="" id=""/>
                                        </th>
                                        <th>STT</th>
                                        <th>Hình</th>
                                        <th>Tiêu đề</th>
                                        <th className="text-center">Nổi bật</th>
                                        <th className="text-center">Nổi bật danh mục</th>
                                        <th className="text-center">Sale</th>
                                        <th className="text-center">Khuyến mãi</th>
                                        <th className="text-center">Hiển thị</th>
                                        <th>Thao tác</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products && products.map((product, index) => (
                                                <tr key = {product.id}>
                                        <td>
                                            <input type="checkbox" name="" id=""/>
                                        </td>
                                        <td>
                                            <input type="text" className="table-input" value={++index}/>
                                        </td>
                                        <td>
                                            <img src={product.thumbnail}alt="" className="table-img"/>
                                        </td>
                                        <td>
                                            {product.name}
                                            <div className="table-title">
                                                <Link to="#" className="mr-8 text-priamry">
                                                    <i className="ti-eye"></i>
                                                    view
                                                </Link>
                                                <Link to={`/admin/product/${product.id}`} className="mr-8 text-priamry">
                                                    <i className="ti-pencil-alt"></i>
                                                    edit
                                                </Link>
                                                <Link to="#" className="mr-8 text-success">
                                                    <i className="ti-files"></i>
                                                    copy
                                                </Link>
                                                <Link to="#" className="text-danger">
                                                    <i className="ti-trash"></i>
                                                    delete
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" checked = {product.features} name="" id=""/>
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" name="" id=""/>
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" name="" id=""/>
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" name="" checked = {product.best_seller} id=""/>
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" name="" checked = {product.status} id=""/>
                                        </td>
                                        <td>
                                            <a href="product-detail.html">
                                                <i className="ti-pencil-alt icon-edit"></i>
                                            </a>
                                            <button>
                                                <i className="ti-trash icon-delete"></i>
                                            </button>
                                        </td>
                                    </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product