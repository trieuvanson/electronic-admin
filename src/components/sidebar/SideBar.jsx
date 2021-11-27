import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {GlobalState} from "../../GlobalState";

function SideBar() {
    const state = useContext(GlobalState)
    const [user] = state.userAPI.personal;



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
            index: 6,
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
                    <img src={user?user.avatar:null} alt="User" className="profile-image"/>
                    <div className="sidebar-user-name">
                        {user?.fullname}
                    </div>
                </div>
                <a href="" className="btn btn-outline">
                    <i className="ti-power-off"/>
                </a>
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


            {/*
                <li className="sidebar-submenu">
                    <a href="" className="sidebar-menu-dropdown">
                        <i className="ti-files"/>
                        <span>Quản lý bài viết</span>
                        <div className="dropdown-icon"/>
                    </a>
                    <ul className="sidebar-menu sidebar-menu-dropdown-content">
                        <li>
                            <a href="#">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="#">Tại sao chọn chúng tôi</a>
                        </li>
                        <li>
                            <a href="#">Cảm nhận khách hàng</a>
                        </li>
                        <li>
                            <a href="#">Tin tức</a>
                        </li>
                        <li>
                            <a href="#">Chính sách</a>
                        </li>
                    </ul>
                </li>
                <li className="sidebar-submenu">
                    <a href="" className="sidebar-menu-dropdown">
                        <i className="ti-email"/>
                        <span>Quản lý nhận tin</span>
                        <div className="dropdown-icon"/>
                    </a>
                    <ul className="sidebar-menu sidebar-menu-dropdown-content">
                        <li>
                            <a href="#">Đăng ký nhận tin</a>
                        </li>
                    </ul>
                </li>
                <li className="sidebar-submenu">
                    <a href="" className="sidebar-menu-dropdown">
                        <i className="ti-bookmark"/>
                        <span>Quản lý trang tĩnh</span>
                        <div className="dropdown-icon"/>
                    </a>
                    <ul className="sidebar-menu sidebar-menu-dropdown-content">
                        <li>
                            <a href="#">slogan</a>
                        </li>
                        <li>
                            <a href="#">slogan menu</a>
                        </li>
                        <li>
                            <a href="#">slogan tại sao chọn chúng tôi</a>
                        </li>
                        <li>
                            <a href="#">slogan album ảnh</a>
                        </li>
                        <li>
                            <a href="#">slogan tin tức</a>
                        </li>
                        <li>
                            <a href="#">Liên hệ</a>
                        </li>
                        <li>
                            <a href="#">fotter</a>
                        </li>
                    </ul>
                </li>
                <li className="sidebar-submenu">
                    <a href="#" className="sidebar-menu-dropdown">
                        <i className="ti-camera"></i>
                        <span>Quản lý hình ảnh - video</span>
                        <div className="dropdown-icon"></div>
                    </a>
                    <ul className="sidebar-menu sidebar-menu-dropdown-content">
                        <li>
                            <a href="#">Logo</a>
                        </li>
                        <li>
                            <a href="#">Banner quảng cáo</a>
                        </li>
                        <li>
                            <a href="#">favicon</a>
                        </li>
                        <li>
                            <a href="#">slideshow</a>
                        </li>
                        <li>
                            <a href="#">Album ảnh</a>
                        </li>
                        <li>
                            <a href="#">Mạng xã hội</a>
                        </li>
                    </ul>
                </li>
                <li className="sidebar-submenu">
                    <a href="" className="sidebar-menu-dropdown">
                        <i className="ti-user"></i>
                        <span>Quản lý user</span>
                        <div className="dropdown-icon"></div>
                    </a>
                    <ul className="sidebar-menu sidebar-menu-dropdown-content">
                        <li>
                            <a href="#">Thông tin admin</a>
                        </li>
                    </ul>
                </li>
                <li className="sidebar-submenu">
                    <a href="" className="sidebar-menu-dropdown">
                        <i className="ti-layout-slider-alt"></i>
                        <span>Page</span>
                        <div className="dropdown-icon"></div>
                    </a>
                    <ul className="sidebar-menu sidebar-menu-dropdown-content">
                        <li>
                            <a href="#">Error 404</a>
                        </li>
                        <li>
                            <a href="#">Error 500</a>
                        </li>
                        <li>
                            <a href="#">Hình ảnh</a>
                        </li>
                        <li>
                            <a href="#">Tin tức sự kiện</a>
                        </li>
                        <li>
                            <a href="#">Liên hệ</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="">
                        <i className="ti-pulse"></i>
                        <span>Thiết lập thông tin</span>
                    </a>
                </li>
            </ul>*/}
        </div>
    );
}

export default SideBar;
