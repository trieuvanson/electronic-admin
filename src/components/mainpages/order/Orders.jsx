import React, {useContext, useState} from 'react'
import {Link} from "react-router-dom"
import {GlobalState} from "../../../GlobalState";
import {formatCash} from "../../../utils/CurrencyCommon";
import {OrderStatus} from "../../../utils/DataCommon";

function Order() {
    const state = useContext(GlobalState)
    const [order] = state.orderAPI.order
    const status = OrderStatus

    const sortOrder = () => {
        return order.sort((a,b) => {
            return new Date(a.update_at).getTime() -
                new Date(b.update_at).getTime()
        }).reverse();
    }

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const pages = [];
    const itemsLength = Math.ceil(order.length / itemsPerPage);

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
    const currentItems = sortOrder().slice(indexOfFirstItem, indexOfLastItem);


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

    const getClassStatus = (str) => {
        let className = ''
        console.log(status)
        status.find(item => {
            if (item.name === str) {
                className = item.class
            }
        })
        return className
    }

    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="ti-menu"></i>
                </div>
                <div className="main-title">
                    Quản lý đơn hàng
                </div>
            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="box">
                            <div className="box-header">
                                Fitter
                            </div>
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Họ tên</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Trạng thái</label>
                                            <select className="selection">
                                                <option value="">Chọn danh mục</option>
                                                {
                                                    OrderStatus.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.name}>{item.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Tổng tiền</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Từ</label>
                                            <input type="date" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-group">
                                            <label className="form-label">Đến</label>
                                            <input type="date" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <button className="btn btn-primary btn-icon-text btn-hover">
                                                <i className="ti-save"></i>
                                                Lọc
                                            </button>
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
                                Danh sách đơn hàng
                            </div>
                            <div className="box-body overflow-scroll">
                                <table>
                                    <thead>
                                    <tr>
                                        {/*<th>*/}
                                        {/*    <input type="checkbox" name="" id=""/>*/}
                                        {/*</th>*/}
                                        <th>STT</th>
                                        <th>Họ tên</th>
                                        <th>Ngày đặt</th>
                                        <th>Hình thức thanh toán</th>
                                        <th>Tổng</th>
                                        <th>Tình trạng</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        order && sortOrder().map((item, index) => {
                                            return (
                                                <tr key={item.id}>
                                                    <td>#{index + 1}</td>
                                                    <td>{item.address?.fullname}
                                                        <sup className="update-end"> Cập nhập lần
                                                            cuối: {item.update_at}</sup>
                                                        <div className="table-title">
                                                            <Link to={`/admin/order/${item.id}`}
                                                                  className="mr-8 text-priamry">
                                                                <i className="ti-pencil-alt"></i>
                                                                edit
                                                            </Link>
                                                            <Link to="#" className="text-danger">
                                                                <i className="ti-trash"></i>
                                                                delete
                                                            </Link>
                                                        </div>
                                                    </td>
                                                    <td>{item.created_at}</td>
                                                    <td>{item.payment}</td>
                                                    <td>{item.total ? formatCash(item.total) : null} <sup>đ</sup></td>
                                                    <td><span className={`order-status ${getClassStatus(item.status)}`}>{item.status}</span></td>
                                                </tr>
                                            )
                                        })
                                    }
                                    {/* <tr>
                                        <td>
                                            <input type="checkbox" name="" id=""/>
                                        </td>
                                        <td>#2345</td>
                                        <td>Nguyễn Thị Mỹ Duyên</td>
                                        <td>2021-05-09</td>
                                        <td>Tiền mặt</td>
                                        <td>$123.45</td>
                                        <td>
                                <span className="order-status order-shipped">
                                  chưa giao
                                </span>
                                        </td>
                                        <td>
                                            <a href="order-detail.html" href="btn">
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
                                        <td>#2345</td>
                                        <td>Tân Đại</td>
                                        <td>2021-05-09</td>
                                        <td>Tiền mặt</td>
                                        <td>$123.45</td>
                                        <td>
                                <span className="order-status order-ready">
                                  Đã giao
                                </span>
                                        </td>
                                        <td>
                                            <button>
                                                <i className="ti-pencil-alt icon-edit"></i>
                                            </button>
                                            <button>
                                                <i className="ti-trash icon-delete"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" name="" id=""/>
                                        </td>
                                        <td>#2345</td>
                                        <td>Tân Đại</td>
                                        <td>2021-05-09</td>
                                        <td>Tiền mặt</td>
                                        <td>$123.45</td>
                                        <td>
                              <span className="order-status order-cancel">
                                đã hủy
                              </span>
                                        </td>
                                        <td>
                                            <button>
                                                <i className="ti-pencil-alt icon-edit"></i>
                                            </button>
                                            <button>
                                                <i className="ti-trash icon-delete"></i>
                                            </button>
                                        </td>
                                    </tr>*/}
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

export default Order