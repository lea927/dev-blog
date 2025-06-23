import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import BlogList from './BlogList'
import blogPosts from '../lib/data'
import { FaSearch } from 'react-icons/fa'
import Footer from '../components/Footer'

const Home = () => {

  const [search, setSearch] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleFilterPosts = () => {
    if (search.trim() === '') {
      setFilteredPosts(blogPosts)
    } else {
      const lowerCaseSearch = search.toLowerCase()
      const filtered = blogPosts.filter(post =>
        post.title.toLowerCase().includes(lowerCaseSearch) ||
        post.content.toLowerCase().includes(lowerCaseSearch)
      )
      setFilteredPosts(filtered)
    }
  }

  return (
    <>
      <NavBar/>
      <div className='w-full py-16 text-center'>
        <h1 className='text-4xl font-bold mb-4'>My Blog</h1>
        <p className='text-lg text-gray-600'><span className='block'>Welcome to my personal blog where I share my thoughts on technology,</span>
<span className='block'>programming, and life as a developer.</span></p>
      </div>
      <div className="relative w-11/12 max-w-full mx-auto mb-4">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <FaSearch />
        </span>
        <input
          type="text"
          value={search}
          onChange={e => {
            handleSearchChange(e)
            handleFilterPosts()
          }}
          placeholder="Search posts..."
          className="border rounded pl-10 px-3 py-2 w-full border-gray-200"
        />
      </div>
      <BlogList posts={filteredPosts}/>
      <Footer/>
    </>
  )
}

export default Home