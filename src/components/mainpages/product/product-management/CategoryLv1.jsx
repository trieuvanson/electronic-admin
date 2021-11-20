import React, {useContext} from 'react'
import {GlobalState} from "../../../../GlobalState";
import {Link} from "react-router-dom";

function CategoryLv1() {
    const state = useContext(GlobalState)
    const [brands, setBrands] = state.categoriesApi.brands

    return (
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
                                    <input type="text"/>
                                    <div className="icon">
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
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        brands.map((brand, index) => {
                                            return (
                                                <tr key={brand.id}>
                                                    <td>
                                                        <input type="text" className="table-input" value={index+1}/>
                                                    </td>
                                                    <td>
                                                        {brand.name}
                                                        <div className="table-title">
                                                            <Link to="#" className="mr-8 text-priamry">
                                                                <i className="ti-eye"/>
                                                                view
                                                            </Link>
                                                            <Link to={`brand/${brand.id}`} className="mr-8 text-priamry">
                                                                <i className="ti-pencil-alt"/>
                                                                edit
                                                            </Link>
                                                            <Link to="#" className="text-danger">
                                                                <i className="ti-trash"/>
                                                                delete
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
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

export default CategoryLv1