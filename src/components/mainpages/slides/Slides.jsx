import React, {useContext, useState} from 'react'
import {Link} from "react-router-dom";
import {GlobalState} from "../../../GlobalState";
import {USER_LINK} from "../../../utils/hyperlink";

function Slides() {
    const state = useContext(GlobalState);
    const [slides] = state.categoriesApi.slides
    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="ti-menu"></i>
                </div>
                <div className="main-title">
                    Quản lý Slideshow
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
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="box">
                            <div className="box-header">
                                Danh mục Slideshow
                            </div>
                            <div className="box-body overflow-scroll">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Hình</th>
                                        <th>Sản phẩm</th>
                                        <th>Hiển thị</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        slides && slides.sort((a,b) => a.postion - b.postion).map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>
                                                        <input type="text" name="postion" value={item.postion} className="table-input-text"/>
                                                    </td>
                                                    <td>
                                                        <img src={item?.product?.thumbnail} alt="" className="table-img"/>
                                                    </td>
                                                    <td>
                                                        {item?.product?.name}
                                                        <div className="table-title">
                                                            <a href={`${USER_LINK}/product/detail/${item?.product?.id}`} className="mr-8 text-priamry">
                                                                <i className="ti-eye"></i>
                                                                View
                                                            </a>
                                                            <Link to={`/admin/slides/${item.id}`} className="mr-8 text-priamry">
                                                                <i className="ti-pencil-alt"></i>
                                                                edit
                                                            </Link>
                                                            <Link to="" className="text-danger">
                                                                <i className="ti-trash"></i>
                                                                delete
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <input type="checkbox" name="status"    checked={item.status} id=""/>
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

export default Slides