import React from 'react'

export default function ProductsDetail({items, index}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-sm w-full bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="relative">
          <img 
            src={items[index].image} 
            alt={items[index].name} 
            className="w-full h-70 object-cover object-center"
          />
          <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {items[index].catagory}
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {items[index].name}
          </h2>
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-extrabold text-blue-600">
              ${items[index].price}
            </span>
            <span className="text-green-600 font-semibold">In Stock</span>
          </div>
          <p className="text-gray-600 mb-4">
            {items[index].discription}
          </p>
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
