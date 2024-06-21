import React from 'react'

const NewsItem = ({image,title,desc,link}) => {
  return (
    <div className='p-4 bg-slate-200 rounded-md m-5 h-[500px]'>
        <img className='h-[70%] w-full object-cover rounded-md mb-2' src={image?image:"https://www.castinstyle.co.uk/shopimages/products/normal/D1264.jpg"} alt="" />
        <h1 className='sm:text-lg text-xl font-bold line-clamp-2'>{title}</h1>
        <h1 className='sm:text-md text-lg line-clamp-2'>{desc}</h1>
        <a className='text-lg text-blue-600 p-2' href={link}>read more...</a>
    </div>
  )
}

export default NewsItem