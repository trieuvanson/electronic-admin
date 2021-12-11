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
import PublicRoute from "../../route/PublicRoute";
import Login from "./auth/Login";
import PrivateRoute from "../../route/PrivateRoute";
import ReportsRevenue from "./reports/Reports-Revenue";
import ReportsOrders from "./reports/Reports-Orders";
import ReportsCategories from "./reports/Reports-Categories";
import User from "./user/User";
import UserController from "./user/UserController";
import Voucher from "./voucher/Voucher";
import VoucherController from "./voucher/VoucherController";
import NotFound from "../../utils/not_found/NotFound";

function Pages() {
    return (
        <Switch>
            <PrivateRoute path={["/admin/dashboard"]} exact component={Index}/>
            <PrivateRoute path={"/admin/product/brand/:id"} exact component={CategoryLv1Controller}/>
            <PrivateRoute path={"/admin/product/brand"} exact component={CategoryLv1}/>
            <PrivateRoute path={"/admin/product/category/:id"} exact component={CategoryLv2Controller}/>
            <PrivateRoute path={"/admin/product/category"} exact component={CategoryLv2}/>
            <PrivateRoute path={"/admin/product/:id"} exact component={ProductController}/>
            <PrivateRoute path={"/admin/product"} exact component={Product}/>
            <PrivateRoute path={"/admin/order/:id"} exact component={OrderController}/>
            <PrivateRoute path={"/admin/order"} exact component={Orders}/>
            <PrivateRoute path={"/admin/slides/:id"} exact component={SlidesController}/>
            <PrivateRoute path={"/admin/slides"} exact component={Slides}/>
            <PrivateRoute path={"/admin/user/:id"} exact component={UserController}/>
            <PrivateRoute path={"/admin/user"} exact component={User}/>
            <PrivateRoute path={"/admin/voucher/:id"} exact component={VoucherController}/>
            <PrivateRoute path={"/admin/voucher"} exact component={Voucher}/>
            <PrivateRoute path={"/admin/statistic/revenue"} exact component={ReportsRevenue}/>
            <PrivateRoute path={"/admin/statistic/order"} exact component={ReportsOrders}/>
            <PrivateRoute path={"/admin/statistic/categories"} exact component={ReportsCategories}/>
            <PublicRoute exact path={["/admin", "/"]} component={Login}/>
            <Route component={NotFound}/>
        </Switch>


    )
}

export default Pages