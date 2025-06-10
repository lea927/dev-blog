import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <h1>DevBlog</h1>
      <div>
        <Link
          to={{
            pathname: "/",
          }}
        >
          Home
        </Link>
        <Link
          to={{
            pathname: "/about",
          }}
        >
          About
        </Link>
      </div>
    </nav>
  )
}

export default NavBar