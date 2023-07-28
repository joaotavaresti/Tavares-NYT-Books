import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom'

const BookList = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      const res = await axios.get(
        "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=IOUk8duIqqNKjccPiRj0HQOcpAZaRXtV"
      );
      setLists(res.data.results);
    };

    fetchLists();
  }, []);

  return (
    <>
      <h6 className="font-bold text-center text-4xl py-5 lg:text-6x1">
        Bestsellers Books Lists
      </h6>
      <section className="grid grid-cols-1 gap-10 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {lists.map((list) => {
          const { list_name, list_name_encoded } = list;

          return (
            <article
              key={list_name}
              className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5"
            >
            <div>
            <NavLink
                to={{
                    pathname:"/book/",
                    listtype:{
                        encoded_name: {list_name_encoded},
                        ordinal_name: {list_name}
                        }
                    }}
                    exact
                > {list_name}
            </NavLink>            
            </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default BookList;