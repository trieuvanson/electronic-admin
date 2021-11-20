import React from 'react'
import {Route, Switch} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Product from "./product/product-management/Product";
import CategoryLv1 from "./product/product-management/CategoryLv1";
import CategoryLv2 from "./product/product-management/CategoryLv2";
import ProductDetail from "./product/product-management/product-controller/ProductDetail";
function Pages() {
    return (
        <Switch>
            <Route path={["/admin/dashboard"]} exact component={Dashboard} />
            <Route path={"/admin/product/:id"} exact component={ProductDetail} />
            <Route path={"/admin/product"} exact component={Product} />
            <Route path={"/admin/product/brand"} exact component={CategoryLv1} />
            <Route path={"/admin/product/category"} exact component={CategoryLv2} />
            <Route path={"/admin/product"} exact component={Product} />
        </Switch>

        
    )
}

export default Pages