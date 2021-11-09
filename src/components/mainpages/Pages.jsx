import React from 'react'
import {Route, Switch} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Product from "./product/Product";
import CateLevel1 from "./product/cate/CateLevel1";
import CateLevel2 from "./product/cate/CateLevel2";
import ProductDetail from "./product/ProductController/ProductDetail";



function Pages() {
    return (
        <Switch>
            <Route path={["/admin/dashboard", "/"]} exact component={Dashboard} />
            <Route path={["/admin/product", "/"]} exact component={Product} />
            <Route path={["/admin/product/detail", "/"]} exact component={ProductDetail} />
            <Route path={["/admin/product/cate/leve1", "/"]} exact component={CateLevel1} />
            <Route path={["/admin/product/cate/leve2", "/"]} exact component={CateLevel2} />


        </Switch>

        
    )
}

export default Pages