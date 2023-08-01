import React, { useState, useEffect } from "react"
import axios from "axios"
import { getLastSegmentOfURL } from "../../helpers"
import { Book } from "../../components/Book/Book"

export const Category = () => {
    const [books, setBooks] = useState([])
    const [title, setTitle] = useState("")

    const listType = getLastSegmentOfURL(window.location.href)

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(
                `https://api.nytimes.com/svc/books/v3/lists/current/${listType}.json?api-key=${process.env.REACT_APP_NYTBOOKS_API_KEY}`
            )
            setBooks(res.data.results.books)
            setTitle(res.data.results.list_name)
        }

        fetchBooks()
    }, [listType])

    return (
        <>
            <h1 className="font-bold text-center text-4xl py-5 lg:text-6x1">
                {title} Bestsellers Books
            </h1>
            <section className="grid grid-cols-1 gap-10 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {books.map(
                    (
                        {
                            author,
                            book_image,
                            buy_links,
                            description,
                            primary_isbn10,
                            publisher,
                            rank,
                            title
                        },
                        index
                    ) => (
                        <Book
                            author={author}
                            book_image={book_image}
                            buy_links={buy_links}
                            description={description}
                            primary_isbn10={primary_isbn10}
                            publisher={publisher}
                            rank={rank}
                            title={title}
                            key={index}
                        />
                    )
                )}
            </section>
        </>
    )
}
