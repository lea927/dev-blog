import { Link, useNavigate } from "react-router-dom"
import { FaRegEdit } from 'react-icons/fa'


const NavBar = () => {
  const navigate = useNavigate()

  return (
    <nav className='flex justify-between items-center p-5'>
       <Link
          to={{
            pathname: "/",
          }}
          className='p-2 text-black hover:text-gray-600 font-bold'
        >
          DevBlog
        </Link>
      <div className="flex items-center gap-4">
        <Link
          to={{
            pathname: "/",
          }}
          className='p-2 text-black hover:text-gray-600'
        >
          Home
        </Link>
        <Link
          to={{
            pathname: "/about",
          }}
          className='p-2 text-black hover:text-gray-600'
        >
          About
        </Link>
        <button
          onClick={() => navigate('/new')}
          className='p-4 bg-black text-white rounded hover:opacity-80 flex items-center gap-2'
        >
           <FaRegEdit />
          New Post
        </button>
      </div>
    </nav>
  )
}

export default NavBar