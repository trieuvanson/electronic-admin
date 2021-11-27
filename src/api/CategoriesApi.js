import {useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";

function CategoriesApi() {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([])
    const [slides, setSlides] = useState([])

    const getCategories = async () => {
        const res = await axios.get(`${LOCAL_LINK}/api/product-category/`)
        setCategories(res.data)
    }
    //Test
    const getBrands = async () => {
        const res = await axios.get(`${LOCAL_LINK}/api/brand/`)
        setBrands(res.data)
    }

    const getSlides = async () => {
        const res = await axios.get(`${LOCAL_LINK}/api/slide/`)
        setSlides(res.data)
    }

    const getCategoriesByFilter = async (filter) => {
        await axios.get(`${LOCAL_LINK}/api/product-category/filters?search=${filter.search}&brandName=${filter.brandName}`)
            .then(res => {
                setCategories(res.data)
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCategories()
        getBrands()
        getSlides()
    }, [])


    return {
        categories: [categories, setCategories],
        brands: [brands, setBrands],
        slides: [slides, setSlides],
        categoryAction: {getCategoriesByFilter}

    }
}

export default CategoriesApi