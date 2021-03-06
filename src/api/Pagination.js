import React, {createContext, useEffect, useState} from "react";
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";
import {Link} from "react-router-dom";

function Pagination(data) {
    const dataPagination = data
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    const pages = [];
    const dataLength = Math.ceil(dataPagination?.length / itemsPerPage) || 0;
    for (let i = 0; i < dataLength; i++) {
        pages.push(i + 1);
    }
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const renderPageNumbers = pages && pages.map(number => {
        return (
            <li key={number}>
                <Link to={"#"} id={number}
                      className={number === currentPage ? "active" : ""}
                      onClick={(e) => handleClickSetCurrentPage(e)}>{number}</Link>
            </li>
        )
    })
    const handleClickSetCurrentPage = (e) => {
        setCurrentPage(Number(e.target.id))
        window.scroll(0, 0)
    }


    const currentItems = dataPagination?.slice(indexOfFirstItem, indexOfLastItem);

    const next = () => {
        if (currentPage <= renderPageNumbers.length - 1) {
            setCurrentPage(currentPage + 1)
            window.scroll(0, 0)
        }
    }

    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            window.scroll(0, 0)
        }
    }

    return (
        {
            currentItems,
            renderPageNumbers,
            currentPage,
            itemsPerPage,
            setItemsPerPage,
            setCurrentPage,
            next,
            prev,
            handleClickSetCurrentPage
        }
    )


}

export default Pagination