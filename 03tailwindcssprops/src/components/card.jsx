import React from 'react'

function card({username='default_name'}) {
    
  return (
    <div>
        <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://media.istockphoto.com/id/1478431022/photo/cars-for-sale-stock-lot-row.jpg?s=612x612&w=0&k=20&c=w68j0FXPz9PagD7Lab_DWLD8jV8Hoaakw6XxwedBeLY=" />
  </div>
  <div className="flex flex-col gap-2 items-center justify-center md:items-start ">
    <span className="text-2xl font-medium">Class Warfare</span>
    <span className="font-medium text-sky-500">The name is {username}</span>
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
    </div>
  )
}

export default card