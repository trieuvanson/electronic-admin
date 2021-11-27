import React, {useContext, useState} from 'react'
import {GlobalState} from "../../../../GlobalState";
import {Link} from "react-router-dom";

function CategoryLv1() {
    const state = useContext(GlobalState)
    const [brands, setBrands] = state.categoriesApi.brands
    const [products] = state.productAPI.products
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const pages = [];
    const itemsLength = Math.ceil(brands.length / itemsPerPage);

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
    const currentItems = brands.slice(indexOfFirstItem, indexOfLastItem);


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
                    Quản lý danh mục cấp 1
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
                                        <th className={"text-center"}>Số lượng sản phẩm</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        currentItems.map((brand, index) => {
                                            return (
                                                <tr key={brand.id}>
                                                    <td>
                                                        <input type="text" className="table-input" value={index+1}/>
                                                    </td>
                                                    <td>
                                                        {brand.name} <sup className="update-end">Cập nhập lần
                                                        cuối: {brand.update_at}</sup>
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
                                                    <td className={"text-center"}>{products.filter(p => p?.category?.brand?.id == brand.id).length}</td>
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

export default CategoryLv1