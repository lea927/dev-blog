import React from 'react'

const BlogCard = ({title, excerpt, date, imageUrl, readTime}) => {
  return (
    <>
      <div className='max-w-[360px] h-[420px] rounded-md overflow-hidden'>
        <img src={imageUrl} alt="" className="w-full object-cover overflow-hidden" />
        <h2 className='text-lg font-bold'>{title}</h2>
        <p>{excerpt}</p>
        <div className='flex justify-between'>
          <p>{date}</p>
          <p>{`${readTime} min read`}</p>
        </div>
      </div>
    </>
  )
}

export default BlogCard