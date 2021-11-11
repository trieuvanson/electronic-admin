import React, {createContext, useEffect, useState} from "react";
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";

function ProductsApi() {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const res = await axios.get(`${LOCAL_LINK}/api/product/`)
        setProducts(res.data)
    }

    const getProductsByBrandId = async (brandId) => {
        await axios.get(`${LOCAL_LINK}/api/product/brand/${brandId}`).then(res => {setProducts(res.data)})
    }

    const getProductsByCategoryId = async (categoryId) => {
        await axios.get(`${LOCAL_LINK}/api/product/category/${categoryId}`).then(res => {setProducts(res.data)})
    }

    const addProduct = async (product) => {
        console.log(product)

        var config = {
            method: 'post',
            url: 'http://localhost:8080/api/product/',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUVlMiLCJyb2xlcyI6WyJBRE1JTl9ST0xFIiwiVVNFUl9ST0xFIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvbG9naW4iLCJleHAiOjE2MzY1NTE0Nzh9.CSbgawKu681_qhgzCu9Yd_ytDUaEiZrdnhWBAq8rM6I',
                'Content-Type': 'application/json'
            },
            data : product
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getProducts()
    }, [])


    return {
        products: [products, setProducts],
        productAction: {getProductsByCategoryId, getProductsByBrandId, getProducts, addProduct}
    }
}

export default ProductsApi