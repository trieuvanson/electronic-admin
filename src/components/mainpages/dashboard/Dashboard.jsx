import React from 'react'
import Chart from 'react-apexcharts'

function Dashboard() {

    const customer_options = {
        options: {},
        series: [
            {
                // name: "Net Profit",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
            {
                // name: "Revenue",
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            },
            {
                // name: "Free Cash Flow",
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            },
        ],
        chart: {
            type: "bar",
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        xaxis: {
            categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        },
        yaxis: {
            title: {
                text: "$ (thousands)",
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands";
                },
            },
        },
    };




    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className="ti-menu"/>
                </div>
                <div className="main-title">
                    Dashboard
                </div>
            </div>
            <div className="main-content">
                <div className="row">
                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="box box-hover">
                            <div className="counter">
                                <div className="counter-title">
                                    total order
                                </div>
                                <div className="counter-info">
                                    <div className="counter-count">
                                        6578
                                    </div>
                                    <i className="ti-bag"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="box box-hover">
                            <div className="counter">
                                <div className="counter-title">
                                    total order
                                </div>
                                <div className="counter-info">
                                    <div className="counter-count">
                                        6578
                                    </div>
                                    <i className="ti-bag"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="box box-hover">
                            <div className="counter">
                                <div className="counter-title">
                                    total order
                                </div>
                                <div className="counter-info">
                                    <div className="counter-count">
                                        6578
                                    </div>
                                    <i className="ti-bag"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="box box-hover">
                            <div className="counter">
                                <div className="counter-title">
                                    total order
                                </div>
                                <div className="counter-info">
                                    <div className="counter-count">
                                        6578
                                    </div>
                                    <i className="ti-bag"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 col-md-6 col-sm-12">
                        <div className="box f-height">
                            <div className="box-header">
                                top product
                            </div>
                            <div className="box-body">
                                <ul className="product-list">
                                    <li className="product-list-item">
                                        <div className="item-info">
                                            <img src="./images/product11.jpg" alt=""/>
                                                <div className="item-name">
                                                    <div className="product-name">Dien thoai</div>
                                                    <div className="text-second">Cloths</div>
                                                </div>
                                        </div>
                                        <div className="item-sale-info">
                                            <div className="text-second">Sale</div>
                                            <div className="product-sale">#3333</div>
                                        </div>
                                    </li>
                                    <li className="product-list-item">
                                        <div className="item-info">
                                            <img src="./images/product11.jpg" alt=""/>
                                                <div className="item-name">
                                                    <div className="product-name">Dien thoai</div>
                                                    <div className="text-second">Cloths</div>
                                                </div>
                                        </div>
                                        <div className="item-sale-info">
                                            <div className="text-second">Sale</div>
                                            <div className="product-sale">#3333</div>
                                        </div>
                                    </li>
                                    <li className="product-list-item">
                                        <div className="item-info">
                                            <img src="./images/product11.jpg" alt=""/>
                                                <div className="item-name">
                                                    <div className="product-name">Dien thoai</div>
                                                    <div className="text-second">Cloths</div>
                                                </div>
                                        </div>
                                        <div className="item-sale-info">
                                            <div className="text-second">Sale</div>
                                            <div className="product-sale">#3333</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 col-md-6 col-sm-12">
                        <div className="box f-height">
                            <div className="box-body">
                                <div id="category-chat">
                                    <Chart
                                        options={customer_options.options}
                                        series={customer_options.series}
                                        type="donut"
                                        width="380" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 col-md-6 col-sm-12">
                        <div className="box f-height">
                            <div className="box-header">
                                customers
                            </div>
                            <div className="box-body">
                                <div id="customers-chart"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="box">
                            <div className="box-header">
                                Order
                            </div>
                            <div className="box-body overflow-scroll">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>
                                            <input type="checkbox" name="" id=""/>
                                        </th>
                                        <th>Mã</th>
                                        <th>Họ tên</th>
                                        <th>Ngày đặt</th>
                                        <th>Hình thức thanh toán</th>
                                        <th>Tổng</th>
                                        <th>Tình trạng</th>
                                        <th>Thao tác</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
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

export default Dashboard