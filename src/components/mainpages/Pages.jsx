import React from 'react'
import {Route, Switch} from "react-router-dom";
import Index from "./dashboard/index";
import Product from "./product/product-management/Product";
import CategoryLv1 from "./product/product-management/CategoryLv1";
import CategoryLv2 from "./product/product-management/CategoryLv2";
import ProductController from "./product/product-management/product-controller/ProductController";
import CategoryLv1Controller from "./product/product-management/product-controller/CategoryLv1Controller";
import CategoryLv2Controller from "./product/product-management/product-controller/CategoryLv2Controller";
import Orders from "./order/Orders";
import OrderController from "./order/OrderController";
import Slides from "./slides/Slides";
import SlidesController from "./slides/SlidesController";
import PublicRoute from "../../utils/PublicRoute";
import Login from "./auth/Login";
import PrivateRoute from "../../utils/PrivateRoute";
import ReportsRevenue from "./reports/Reports-Revenue";
import ReportsOrders from "./reports/Reports-Orders";
function Pages() {
    return (
        <Switch>
            <PrivateRoute path={["/admin/dashboard"]} exact component={Index} />
            <PrivateRoute path={"/admin/product/brand/:id"} exact component={CategoryLv1Controller} />
            <PrivateRoute path={"/admin/product/brand"} exact component={CategoryLv1} />
            <PrivateRoute path={"/admin/product/category/:id"} exact component={CategoryLv2Controller} />
            <PrivateRoute path={"/admin/product/category"} exact component={CategoryLv2} />
            <PrivateRoute path={"/admin/product/:id"} exact component={ProductController} />
            <PrivateRoute path={"/admin/product"} exact component={Product} />
            <PrivateRoute path={"/admin/order/:id"} exact component={OrderController} />
            <PrivateRoute path={"/admin/order"} exact component={Orders} />
            <PrivateRoute path={"/admin/slides/detail"} exact component={SlidesController} />
            <PrivateRoute path={"/admin/slides"} exact component={Slides} />
            <PrivateRoute path={"/admin/statistic/revenue"} exact component={ReportsRevenue} />
            <PrivateRoute path={"/admin/statistic/order"} exact component={ReportsOrders} />
            <PrivateRoute path={"/admin/slides"} exact component={Slides} />
            <PublicRoute exact path={["/admin", "/"]} component={Login}/>
        </Switch>

        
    )
}

export default Pages