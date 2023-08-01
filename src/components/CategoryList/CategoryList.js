import React from "react"
import { NavLink } from "react-router-dom"

export const CategoryList = ({ lists }) => (
    <>
        <section className="grid grid-cols-1 gap-10 px-5 pb-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {lists.map((list) => {
                const { list_name, list_name_encoded } = list

                return (
                    <NavLink to={`/${list_name_encoded}`} className="flex">
                        <div
                            style={{ flex: "1", height: "5rem" }}
                            key={list_name}
                            className="bg-gray-100 py-5 px-10 rounded-lg sm:px-5"
                        >
                            <div>{list_name}</div>
                        </div>
                    </NavLink>
                )
            })}
        </section>
    </>
)
