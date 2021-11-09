import React from 'react'

function ProductDetail() {

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
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label className="form-label">ID</label>
                                                    <input type="text" className="form-control" value="12" disabled/>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label className="form-label">Name</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label className="form-label">Ngày tạo</label>
                                                    <input type="date" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label className="form-label">Ngày sửa</label>
                                                    <input type="date" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="OrderNotes">
                                                        Description
                                                    </label>
                                                    <textarea name="" id="OrderNotes" cols="30" rows="7"
                                                              className="form-textarea"></textarea>
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
                                                                    <label className="form-label">Danh mục hãng</label>
                                                                    <select className="selection">
                                                                        <option value="">Chọn danh mục</option>
                                                                        <option value="">1</option>
                                                                        <option value="">2</option>
                                                                        <option value="">3</option>
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
                                                        <label htmlFor="image1">
                                                            <img src="images/product10.jpg" width="50%" alt=""/>
                                                        </label>
                                                        <div className="form-group">
                                                            <input type="file" className="form-control-file"
                                                                   id="image1"/>
                                                        </div>
                                                        <label htmlFor="image2">
                                                            <img src="images/product10.jpg" width="50%" alt=""/>
                                                        </label>
                                                        <div className="form-group">
                                                            <input type="file" className="form-control-file"
                                                                   id="image2"/>
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
        </div>

    )
}

export default ProductDetail