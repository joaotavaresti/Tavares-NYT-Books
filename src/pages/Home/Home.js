import React, { useState, useEffect } from "react"
import axios from "axios"

import { CategoryList } from "../../components/CategoryList/CategoryList"
import { Intro } from "../../components/Intro/Intro"

export const Home = () => {
    const [lists, setLists] = useState([])

    useEffect(() => {
        const fetchLists = async () => {
            const res = await axios.get(
                `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${process.env.REACT_APP_NYTBOOKS_API_KEY}`
            )
            setLists(res.data.results)
        }

        fetchLists()
    }, [])

    return (
        <>
            <Intro />
            <h1 className="font-bold text-center text-4xl py-5 lg:text-6x1">
                Categories
            </h1>
            <CategoryList lists={lists}></CategoryList>
        </>
    )
}
