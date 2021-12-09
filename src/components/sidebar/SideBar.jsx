import React, {useContext, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {GlobalState} from "../../GlobalState";

function SideBar() {
    const state = useContext(GlobalState)
    const [user] = state.userAPI.personal;
    const history = useHistory()



    const [show, setShow] = useState([
        {
            active: true,
            index: 1
        },
        {
            active: false,
            index: 2
        },
        {
            active: false,
            index: 3
        },
        {
            active: false,
            index: 4
        },
        {
            active: false,
            index: 5
        },

    ]);

    function onClickSidebar(index) {
        let updatedList = show.map(s => {
            if (s.index === index){
                return {...s, active: !s.active};
            }
            return s;
        });
        setShow(updatedList);
    }

    const sidebars = [
        {
            index: 1,
            liClass: '',
            link: "/admin/dashboard",
            linkClass: '',
            icon: "ti-home",
            name: "Dashboard",
            dropdown: "",
            active: false,
            child: []
        },
        {
            index: 2,
            liClass: 'sidebar-submenu',
            link: "#",
            linkClass: 'sidebar-menu-dropdown',
            icon: "ti-layers-alt",
            name: "Quản lý sản phẩm",
            dropdown: "dropdown-icon",
            active: false,
            child: [
                {
                    id: 1,
                    link: "/admin/product/brand",
                    name: "Danh mục cấp 1"
                },
                {
                    id: 2,
                    link: "/admin/product/category",
                    name: "Danh mục cấp 2"
                },
                {
                    id: 3,
                    link: "/admin/product",
                    name: "Sản phẩm"
                },
                {
                    id: 4,
                    link: "/admin/slides",
                    name: "SlideShow"
                }
            ]
        },
        {
            index: 3,
            liClass: '',
            link: "/admin/order",
            linkClass: '',
            icon: "ti-truck",
            name: "Quản lý đơn hàng",
            dropdown: "",
            active: false,
            child: []
        },
        {
            index: 4,
            liClass: 'sidebar-submenu',
            link: "#",
            linkClass: 'sidebar-menu-dropdown',
            icon: "ti-files",
            name: "Quản lý bài viết",
            dropdown: "dropdown-icon",
            active: false,
            child: [
                {
                    id: 4,
                    link: "#",
                    name: "Giới thiệu"
                },
                {
                    id: 5,
                    link: "#",
                    name: "Tại sao chọn chúng tôi"
                },
                {
                    id: 6,
                    link: "#",
                    name: "Cảm nhận khách hàng"
                },
                {
                    id: 7,
                    link: "#",
                    name: "Tin tức"
                },
                {
                    id: 8,
                    link: "#",
                    name: "Chính sách"
                }
            ]
        },
        {
            index: 6,
            liClass: 'sidebar-submenu',
            link: "/admin/user",
            linkClass: '',
            icon: "ti-user",
            name: "Quản lý khách hàng",
            dropdown: "",
            active: false,
            child: [
            ]
        },
        {
            index: 7,
            liClass: 'sidebar-submenu',
            link: "/admin/voucher",
            linkClass: '',
            icon: "ti-gift",
            name: "Quản lý voucher",
            dropdown: "",
            active: false,
            child: [
            ]
        },
        {
            index: 5,
            liClass: 'sidebar-submenu',
            link: "#",
            linkClass: 'sidebar-menu-dropdown',
            icon: "ti-stats-up",
            name: "Thống kê",
            dropdown: "dropdown-icon",
            active: false,
            child: [
                {
                    id: 4,
                    link: "/admin/statistic/revenue",
                    name: "Thống kê doanh thu"
                    },
                {
                    id: 5,
                    link: "/admin/statistic/order",
                    name: "Thống kê đơn hàng"
                },
                {
                    id: 6,
                    link: "/admin/statistic/categories",
                    name: "Thống kê danh mục"
                }
            ]
        },
        {
            index: 8,
            liClass: 'sidebar-submenu',
            link: "#",
            linkClass: '',
            icon: "ti-pulse",
            name: "Thiết lập thông tin",
            dropdown: "",
            active: false,
            child: [
            ]
        }
    ]

    function setActiveClassNameSidebar(index) {
        if (show[index-1].index === index && show[index-1].active) return "sidebar-menu sidebar-menu-dropdown-content active"
        else return "sidebar-menu sidebar-menu-dropdown-content"
    }

    function setActiveLengthSidebar(index, length) {
        if (show[index-1].index === index && show[index-1].active) return `${length}px`
        else return null
    }

    const logout = (e) => {
        e.preventDefault()
        localStorage.clear()
        history.push('/admin')
        window.location.reload()
    }


    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <h3>Smart Things</h3>
                <div className="sidebar-close" id="sidebar-close">
                    <i className="ti-arrow-left"/>
                </div>
            </div>
            <div className="sidebar-user">
                <div className="sidebar-user-info">
                    <img src={user?user.avatar:null} className="profile-image"/>
                    <div className="sidebar-user-name">
                        {user?.fullname}
                    </div>
                </div>
                <button onClick={logout} className="btn btn-outline">
                    <i className="ti-power-off"/>
                </button>
            </div>
            <ul className="sidebar-menu">
                {
                    sidebars.map((sd, index) => {
                        return (
                            <li className={sd.liClass} key={sd.index}>
                                <Link to={sd.link} className={""} onClick={() => onClickSidebar(sd.index)}>
                                    <i className={sd.icon}/>
                                    <span>{sd.name}</span>
                                    {sd.dropdown ? <div className={sd.dropdown}/> : null}
                                </Link>
                                {
                                    sd.child.length > 0 ?
                                        <ul className={setActiveClassNameSidebar(sd.index)}
                                            style={{height: setActiveLengthSidebar(sd.index, sd.child.length * 45)}}>
                                            {
                                                sd.child.map(child => {
                                                    return (
                                                        <li key={child.id}>
                                                            <Link to={child.link}>{child.name}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul> : null
                                }
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );
}

export default SideBar;
