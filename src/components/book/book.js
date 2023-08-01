import React from "react"

export const Book = ({
  author,
  book_image,
  buy_links,
  description,
  primary_isbn10,
  publisher,
  rank,
  title
}) => (
  <article key={rank} className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5">
      <div>
          <img
              src={book_image}
              alt={title}
              className="block mx-auto w-1/2"
          ></img>
      </div>

      <div>
          <h3 className="font-bold my-2 text-2x1">{title}</h3>
          <p className="mb-4 ">{description}</p>
          <p>
              <span className="font-bold">Author: </span> {author}
          </p>
      </div>

      <ul className="mb-4">
          <li>
              <span className="font-bold">Publisher: </span>
              {publisher}
          </li>
          <li>
              <span className="font-bold">ISBN: </span>
              {primary_isbn10}
          </li>
      </ul>

      <ul>
          <p className="font-bold text-l">Buy now:</p>
          {buy_links.map((link) => {
              const { name, url } = link
              return (
                  <div key={name}>
                      <a
                          href={url}
                          className="flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          {name}{" "}
                      </a>
                  </div>
              )
          })}
      </ul>
  </article>
)
