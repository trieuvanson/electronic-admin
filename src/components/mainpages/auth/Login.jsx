import React, {useState} from 'react';
import axios from "axios";
import {LOCAL_LINK} from "../../../utils/hyperlink";
import {setLogin, setToken} from "../../../utils/Common";
import {Link} from "react-router-dom";


function Login() {
    const [user, setUser] = useState({
        username: '', password: ''
    })
    const onChangeInput = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }

    const handlerLogin = async (e) => {
        e.preventDefault();
        try {
            console.log(user)
            const res = await axios.post(`${LOCAL_LINK}/api/login`, user)
            console.log(res.data)
            await res.data.user.roles.forEach((role) => {
                console.log(role)
                if (role === "ADMIN_ROLE") {
                    setLogin(true)
                    setToken(res.data.tokens)
                    window.location.href = "/admin/dashboard"
                }
            })
        } catch (error) {
            alert("Tài khoản hoặc mật khẩu không chính xác!")
        }
    }

    return (
        <>
            <div className="login-websites">
                <a href="" title="Xem website">
                    <i className="ti-back-left"></i>
                    Xem website
                </a>
            </div>
            <div className="login-box">
                <div className="login-card">
                    <p className="login-msg">Đăng nhập vào hệ thống</p>
                    <form action="">
                        <div className="form-group">
                            <div className="login-icon">
                                <i className="ti-user"></i>
                            </div>
                            <input type="text" className="form-input"
                                  onChange={onChangeInput} name="username" placeholder="Tên tài khoản"/>
                        </div>
                        <div className="form-group">
                            <div className="login-icon">
                                <i className="ti-lock"></i>
                            </div>
                            <input type="password" name="password" onChange={onChangeInput} className="form-input"/>
                        </div>
                        <button className="form-btn" onClick={handlerLogin}>Đăng nhập</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login