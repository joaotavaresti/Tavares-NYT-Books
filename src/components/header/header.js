import React from "react"
import { NavLink } from "react-router-dom"

export const Header = () => (
    <div className="flex justify-center p-4">
        <NavLink to="/">
            <b> Home</b>
        </NavLink>
    </div>
)
