import React, { useActionState, useCallback, useState } from 'react'
import Card from './card'
const App = () => {
    
  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [imageURL, setImageURL] = useState('')

  const [allUsers, setAllUsers] = useState([])

    const submitHandler = (e) => {
      e.preventDefault()
      setAllUsers([...allUsers, { userName, userRole, imageURL }])

      setUserName('')
      setUserRole('')
      setImageURL('')

    }

     const deleteHandler = (idx) => {
    const copyUsers = [...allUsers]

    copyUsers.splice(idx, 1)

    setAllUsers(copyUsers)
  }
  

  return (
    <div className='p-7'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='px-2 py-2 flex gap-5 flex-wrap'>

      <input value={userName} onChange={(e)=>{
        setUserName(e.target.value)
      }} className='text-2xl p-2 bg-gray-50 font-black border-2 rounded-2xl border-b-gray-500 lg:w-[48%]' placeholder='userName' type="text" />
      <input value={userRole} onChange={(e)=>{
        setUserRole(e.target.value)
      }} className='text-2xl p-2 bg-gray-50 font-black border-2 rounded-2xl border-b-gray-500 lg:w-[48%]' placeholder='userRole' type="text" />
      <input value={imageURL} onChange={(e)=>{
        setImageURL(e.target.value)
      }} className='text-2xl p-2 bg-gray-50 font-black border-2 rounded-2xl border-b-gray-500 lg:w-[48%]' placeholder='imageUrl' type="text" />
      <button className='text-2xl p-2 bg-emerald-600 font-black rounded-2xl lg:w-[48%] active:scale-95 cursor-pointer' >Submit</button></form>
      <div className='px-4 py-10 gap-4 flex flex-wrap'>

        {allUsers.map(function (elem, idx) {
          return <Card idx={idx} elem={elem} deleteHandler={deleteHandler} />
        })}

      </div>
    </div>
  )
}

export default App
