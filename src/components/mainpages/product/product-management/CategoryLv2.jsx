import React, {useContext, useState} from 'react'
import {GlobalState} from "../../../../GlobalState";
import {Link} from "react-router-dom";

function CategoryLv2() {
    const state = useContext(GlobalState)
    const [categories, setCategories] = state.categoriesApi.categories
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const pages = [];
    const itemsLength = Math.ceil(categories.length / itemsPerPage);

    for (let i = 0; i < itemsLength; i++) {
        pages.push(i + 1);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const renderPageNumbers = pages && pages.map(number => {
        return (
            <li key={number}>
                <Link to="#" id={number} className={number === currentPage ? "active" : ""}
                      onClick={(e) => handleClickSetCurrentPage(e)}>{number}</Link>
            </li>
        )
    })
    const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem);


    const handleClickSetCurrentPage = (e) => {
        setCurrentPage(Number(e.target.id))
        window.scroll(0,0)
    }

    const next = () => {
        if (currentPage <= renderPageNumbers.length - 1) {
            setCurrentPage(currentPage + 1)
            window.scroll(0,0)
        }
    }

    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            window.scroll(0,0)
        }
    }



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
                                        currentItems.map((category, index) => {
                                            return (
                                                <tr key={category.id}>
                                                    <td>
                                                        <input type="text" className="table-input" value={index + 1}/>
                                                    </td>
                                                    <td>
                                                        {category.name} <sup className="update-end">Cập nhập lần
                                                        cuối: {category.update_at}</sup>
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
                            <ul className="pagination">
                                <li><Link to="#"
                                          onClick={() => prev()}><i
                                    className='ti-angle-left'/></Link></li>
                                {renderPageNumbers}
                                <li><Link to="#"
                                          onClick={() => next()}><i
                                    className='ti-angle-right'/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CategoryLv2