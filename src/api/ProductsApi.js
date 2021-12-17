import React, {createContext, useEffect, useState} from "react";
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";

function ProductsApi(token) {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        const res = await axios.get(`${LOCAL_LINK}/api/products/`)
        setProducts(res.data)
    }

    const getProductsByBrandId = async (brandId) => {
        await axios.get(`${LOCAL_LINK}/api/products/brand/${brandId}`).then(res => {
            setProducts(res.data)
        })
    }

    const getProductsByCategoryId = async (categoryId) => {
        await axios.get(`${LOCAL_LINK}/api/products/category/${categoryId}`).then(res => {
            setProducts(res.data)
        })
    }

    const addProduct = async (product) => {
        console.log(product)
        var config = {
            method: 'post',
            url: 'http://localhost:8080/api/products/',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: product
        };

        axios(config)
            .then(() => getProducts())
            .catch(function (error) {
                console.log(error);
            });
    }

    const updateProduct = async (product) => {
        var config = {
            method: 'put',
            url: `${LOCAL_LINK}/api/products/${product.id}`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: product
        };

        axios(config)
            .then(() => getProducts())
            .catch(function (error) {
                console.log(error);
            });
    }
    const deleteProduct = async (product) => {
        var config = {
            method: 'delete',
            url: `${LOCAL_LINK}/api/products/${product.id}`,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };

        axios(config)
            .then(() => getProducts())
            .catch(function (error) {
                console.log(error);
            });
    }

    const getProductsByFilter = async (filter) => {
        await axios.get(`${LOCAL_LINK}/api/products/filters?search=${filter.search}&pcname=${filter.pcname}&bname=${filter.bname}&minDate=${filter.minDate||"1970-01-01"}&maxDate=${filter.maxDate||"2050-01-01"}&maxPrice=${filter.maxPrice||Number.MAX_SAFE_INTEGER}&status=${filter.status}&features=${filter.features}&bestSeller=${filter.bestSeller}`, {
            headers: {'Authorization': `Bearer ${token}`}
        })
            .then(res => {
                setProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getProducts()
    }, [])


    return {
        products: [products, setProducts],
        productAction: {
            getProductsByCategoryId,
            getProductsByBrandId,
            getProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            getProductsByFilter
        }
    }
}

export default ProductsApi