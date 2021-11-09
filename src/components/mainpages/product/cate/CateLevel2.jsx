import React from 'react'

function CateLevel2() {

    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="ti-menu"></i>
                </div>
                <div className="main-title">
                    Quản lý sản phẩm cấp 2
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
                                <option value="">Chọn danh mục</option>
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
                                        <th>
                                            <input type="checkbox" name="" id=""/>
                                        </th>
                                        <th>STT</th>
                                        <th>Tiêu đề</th>
                                        <th className="text-center">Nổi bật</th>
                                        <th className="text-center">Hiển thị</th>
                                        <th>Thao tác</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <input type="checkbox" name="" id=""/>
                                        </td>
                                        <td>
                                            <input type="text" className="table-input" value="2"/>
                                        </td>
                                        <td>
                                            Điện thoại
                                            <div className="table-title">
                                                <a href="" className="mr-8 text-priamry">
                                                    <i className="ti-eye"></i>
                                                    view
                                                </a>
                                                <a href="" className="mr-8 text-priamry">
                                                    <i className="ti-pencil-alt"></i>
                                                    edit
                                                </a>
                                                <a href="" className="mr-8 text-success">
                                                    <i className="ti-files"></i>
                                                    copy
                                                </a>
                                                <a href="" className="text-danger">
                                                    <i className="ti-trash"></i>
                                                    delete
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" name="" id=""/>
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" name="" id=""/>
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
                                    <tr>
                                        <td>
                                            <input type="checkbox" name="" id=""/>
                                        </td>
                                        <td>
                                            <input type="text" className="table-input" value="2"/>
                                        </td>
                                        <td>
                                            Điện thoại
                                            <div className="table-title">
                                                <a href="" className="mr-8 text-priamry">
                                                    <i className="ti-eye"></i>
                                                    view
                                                </a>
                                                <a href="" className="mr-8 text-priamry">
                                                    <i className="ti-pencil-alt"></i>
                                                    edit
                                                </a>
                                                <a href="" className="mr-8 text-success">
                                                    <i className="ti-files"></i>
                                                    copy
                                                </a>
                                                <a href="" className="text-danger">
                                                    <i className="ti-trash"></i>
                                                    delete
                                                </a>
                                            </div>
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" name="" id=""/>
                                        </td>
                                        <td className="text-center">
                                            <input type="checkbox" name="" id=""/>
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

export default CateLevel2