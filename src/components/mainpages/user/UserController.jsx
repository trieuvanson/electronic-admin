import React, {useContext, useEffect, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";
import {GlobalState} from "../../../GlobalState";
import {Link, useParams} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {OrderStatus} from "../../../utils/DataCommon";
import {formatCash} from "../../../utils/CurrencyCommon";
import Pagination from "../../../api/Pagination";

function UserController() {
    const state = useContext(GlobalState)
    const params = useParams();
    const [users] = state.userAPI.users
    const userAction = state.userAPI.action
    const [detail, setDetail] = useState({})
    const [order] = state.orderAPI.order
    const status = OrderStatus

    useEffect(() => {
        getDetail();
    }, [params.id, users])

    function getDetail() {
        users.forEach(u => {
            if (u.username == params.id) {
                setDetail(u)
            }
        })
    }

    const groupBy = order.reduce((r, a) => {
        r[a.user?.username] = [...r[a.user?.username] || [], a]
        return r;
    }, {});


    function inputChange(e) {
        const {name, value} = e.target;
        if (name === "gender") {
            setDetail({...detail, [name]: !detail?.gender})
        } else {
            setDetail({...detail, [name]: value})
        }
    }



    async function updateUser() {
        await userAction.updateUser(detail).then(r => toast.success("Cập nhật thành công!"))
    }

    const getClassStatus = (str) => {
        let className = ''
        status.find(item => {
            if (item.name === str) {
                className = item.class
            }
        })
        return className
    }
    const sortOrder = () => {
        return groupBy[detail?.username]?.sort((a,b) => {
            return new Date(b.update_at).getTime() -
                new Date(a.update_at).getTime()
        })
    }

    const pagination = new Pagination(sortOrder() || null)



    function clear() {
        setDetail({
            fullname: "",
            email: "",
            birthday: "",
            address: "",
            gender: true
        })
    }

    return (

        <>
            <Helmet>
                <title>Administrator - Chi tiết khách hàng</title>
            </Helmet>
            <div className="main">
                <div className="main-header">
                    <div className="mobile-toggle" id="mobile-toggle">
                        <i className="ti-menu"/>
                    </div>
                    <div className="main-title">Quản lý Khách hàng</div>
                </div>
                <div className="main-content">
                    <div className="row">
                        <div className="col-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-text">
                                        <p>Thông tin khách hàng</p>
                                        <div className="data-time">
                                            <span>Ngày tạo: 12/12/2001</span>
                                            <span>cập nhập lần cuối: 12/12/2001</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Username</label>
                                                        <input type="text" className="form-control"
                                                               value={detail?.username} disabled/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Họ và tên</label>
                                                        <input type="text" className="form-control"
                                                               name={"fullname"} value={detail?.fullname}
                                                               onChange={inputChange}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Email</label>
                                                        <input type="text" className="form-control"
                                                               name={"email"} value={detail?.email}
                                                               onChange={inputChange}/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Ngày sinh</label>
                                                        <input type="date" className="form-control"
                                                               name={"birthday"} value={detail?.birthday}
                                                               onChange={inputChange}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Giới tính</label>
                                                        <input type="radio" name="gender" id="male"
                                                               checked={detail?.gender}
                                                               className="form-radio"
                                                               onClick={inputChange}/>
                                                        <label htmlFor="male" className="form-label">Nam</label>
                                                        <input type="radio" name="gender" id="female"
                                                               checked={!detail?.gender}
                                                               className="form-radio" onClick={inputChange}/>
                                                        <label htmlFor="female" className="form-label">Nữ</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="OrderNotes">
                                                            Địa chỉ
                                                        </label>
                                                        <textarea cols="30" name={"address"} rows="7"
                                                                  className="form-textarea" value={detail?.address}
                                                                  onChange={inputChange}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="box-btn mt-32">
                                                        <button onClick={updateUser}
                                                                className="btn btn-primary btn-icon-text btn-hover">
                                                            <i className="ti-save"/>
                                                            Lưu
                                                        </button>
                                                        <button onClick={clear}
                                                                className="btn btn-secondary btn-icon-text btn-hover">
                                                            <i className="ti-reload"/>
                                                            Làm mới
                                                        </button>
                                                        <button onClick={() => window.location.href = "/admin/product"}
                                                                className="btn btn-danger btn-icon-text btn-hover">
                                                            <i className="ti-shift-right"/>
                                                            Thoát
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="box mt-32">
                                <div className="box-header">Danh sách đơn hàng</div>
                                <div className="box-body overflow-scroll">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Mã</th>
                                            <th>Họ tên</th>
                                            <th>Ngày đặt</th>
                                            <th>Hình thức thanh toán</th>
                                            <th>Tổng</th>
                                            <th>Tình trạng</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            order && pagination.currentItems?.map((item, index) => {
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
            </div>
            <ToastContainer/>
        </>
    )
}

export default UserController