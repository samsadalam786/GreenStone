"use client"

import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setmaintask([...maintask, { title, desc }]);
    settitle("")
    setdesc("")
    console.log(maintask);
  };
  const deleteHandler = (i)=>{
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)

  }
  // main task code.........................................
  let renderTask = <h2>no task Ableval</h2>
  if (maintask.length > 0)
    renderTask = maintask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex justify-between mb-5 w-2/3 items-center'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          <button 
          onClick={()=>{
            deleteHandler(i)
          
          }}
          className='text-2xl bg-red-400 text-white px-4 py-2 font-bold rounded m-4'>
            Delete
            </button>
        </li>
      );

    })
  return (
    <>
    
      <h1 className='bg-black text-white text-center py-2 px-1 mt-2 text-4xl font-bold'>This is samsad todolistl</h1>

      <form onSubmit={submitHandler}>
        <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Your title'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />
        <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter Your desc'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }} />
        <button className='text-2xl bg-purple-500 text-white px-4 py-2 font-bold rounded m-4'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-300'>
        <ul>
          {renderTask}

        </ul>

      </div>

    </>
  )
}

export default page
