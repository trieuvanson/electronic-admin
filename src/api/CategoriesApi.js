import {useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";

function CategoriesApi(token) {
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([])
    const [slides, setSlides] = useState([])
    const [slideById, setSlideById] = useState({})


    //Brand
    const getBrands = async () => {
        await axios.get(`${LOCAL_LINK}/api/brand/`)
            .then(res => setBrands(res.data))
            .catch(err => console.log(err))
    }

    const updateBrand = async (brand) => {
        await axios.put(`${LOCAL_LINK}/api/brand/${brand.id}`, brand, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                getBrands()
            })
            .catch(err => console.log(err))
    }


    //Slide
    const getSlides = async () => {
        await axios.get(`${LOCAL_LINK}/api/slide/`)
            .then(res => {
                setSlides(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const updateSlide = async (slide) => {
        console.log(slide)

        await axios.put(`${LOCAL_LINK}/api/slide/${slide.id}`, slide, {
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(res => getSlides())
            .catch(err => console.log(err))
    }

    //Categories
    const getCategories = async () => {
        const res = await axios.get(`${LOCAL_LINK}/api/product-category/`)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
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
        getCategories().then()
        getBrands().then()
        getSlides().then()
    }, [])


    return {
        categories: [categories, setCategories],
        brands: [brands, setBrands],
        slides: [slides, setSlides],
        slideById: [slideById, setSlideById],
        categoryAction: {getCategoriesByFilter, updateSlide},
        slideAction: {updateSlide},
        brandAction: {updateBrand}

    }
}

export default CategoriesApi