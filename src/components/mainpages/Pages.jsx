import React from 'react'
import {Route, Switch} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Product from "./product/product-management/Product";
import CategoryLv1 from "./product/product-management/CategoryLv1";
import CategoryLv2 from "./product/product-management/CategoryLv2";
import ProductDetail from "./product/product-management/product-controller/ProductDetail";
import CategoryLv1Controller from "./product/product-management/product-controller/CategoryLv1Controller";
import CategoryLv2Controller from "./product/product-management/product-controller/CategoryLv2Controller";
import Orders from "./order/Orders";
function Pages() {
    return (
        <Switch>
            <Route path={["/admin/dashboard"]} exact component={Dashboard} />
            <Route path={"/admin/product/brand/:id"} exact component={CategoryLv1Controller} />
            <Route path={"/admin/product/brand"} exact component={CategoryLv1} />
            <Route path={"/admin/product/category/:id"} exact component={CategoryLv2Controller} />
            <Route path={"/admin/product/category"} exact component={CategoryLv2} />
            <Route path={"/admin/product/:id"} exact component={ProductDetail} />
            <Route path={"/admin/product"} exact component={Product} />
            <Route path={"/admin/order"} exact component={Orders} />
        </Switch>

        
    )
}

export default Pages