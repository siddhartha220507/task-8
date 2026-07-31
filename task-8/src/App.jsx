import React from 'react'

const App = () => {
  return (
    <div className='flex p-4 gap-4 flex-wrap'>
      <input required className='text-2xl p-2 bg-gray-50 font-black border-2 rounded-2xl border-b-gray-500 lg:w-[48%]' placeholder='Enter Name' type="text" />
      <input className='text-2xl p-2 bg-gray-50 font-black border-2 rounded-2xl border-b-gray-500 lg:w-[48%]' placeholder='Enter Role' type="text" />
      <input className='text-2xl p-2 bg-gray-50 font-black border-2 rounded-2xl border-b-gray-500 lg:w-[48%]' placeholder='Image Url' type="text" />
      <button className='text-2xl p-2 bg-emerald-600 font-black rounded-2xl lg:w-[48%] cursor-pointer' >Submit</button>
    </div>
  )
}

export default App
