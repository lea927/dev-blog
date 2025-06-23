import React from 'react'
import BlogCard from '../components/BlogCard'

const BlogList = ({posts}) => {
  return (
    <div className='flex flex-wrap w-full gap-5 justify-center'>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            imageUrl={post.coverImage}
            readTime={post.readTime}
          />
        ))
      ): (
        <div className="text-center text-gray-500 mt-10">
          <p>No blog posts available.</p>
        </div>
      )}
    </div>
  )
}

export default BlogList