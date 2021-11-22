import React, {useContext} from 'react'
import {GlobalState} from "../../../../GlobalState";
import {Link} from "react-router-dom";

function CategoryLv2() {
    const state = useContext(GlobalState)
    const [categories, setCategories] = state.categoriesApi.categories

    return (
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
                            <button className="btn btn-primary btn-icon-text">
                                <i className="ti-plus"></i>
                                Thêm
                            </button>
                            <button className="btn btn-danger btn-icon-text">
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
                        <div className="box-light box-btn">
                            <select className="selection">
                                <option value="">Chọn danh mục cấp 1</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
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
                                        {/*<th>*/}
                                        {/*    <input type="checkbox" name="" id=""/>*/}
                                        {/*</th>*/}
                                        <th>STT</th>
                                        <th>Tiêu đề</th>
                                        <th>Danh mục cấp 1</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        categories.map((category, index) => {
                                            return (
                                                <tr key={category.id}>
                                                    <td>
                                                        <input type="text" className="table-input" value={index + 1}/>
                                                    </td>
                                                    <td>
                                                        {category.name}
                                                        <div className="table-title">
                                                            <Link to="#" className="mr-8 text-priamry">
                                                                <i className="ti-eye"/>
                                                                view
                                                            </Link>
                                                            <Link to={`category/${category.id}`}
                                                                  className="mr-8 text-priamry">
                                                                <i className="ti-pencil-alt"/>
                                                                edit
                                                            </Link>
                                                            <Link to="#" className="text-danger">
                                                                <i className="ti-trash"/>
                                                                delete
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {category.brand?.name}
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

export default CategoryLv2