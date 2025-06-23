import React from 'react'

const BlogCard = ({title, excerpt, date, imageUrl, readTime}) => {
  return (
    <>
      <div className='max-w-[360px] h-[420px] rounded-md overflow-hidden border border-gray-200'>
        <img src={imageUrl} alt="" className="w-full object-cover overflow-hidden" />
        <div className='px-5 py-5'>
          <h2 className='text-lg font-bold mb-2'>{title}</h2>
          <p className='text-gray-600 mb-3'>{excerpt}</p>
          <div className='flex justify-between text-gray-600 text-sm'>
            <p>{date}</p>
            <p>{`${readTime} min read`}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCard