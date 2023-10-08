"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function page() {
  const [users, setUsers] = useState()
  const [posts, setPosts] = useState()
  useEffect(() => {
    axios.all([
      axios.get("https://jsonplaceholder.typicode.com/posts"),
      axios.get("https://jsonplaceholder.typicode.com/users")

    ]).then(([posts, users]) => {
      console.log(posts)
      setUsers(users.data)
      setPosts(posts.data)
      console.log(users)
    })

      .catch(err => console.log(err))

  }, [])
  return (
    <>
      <h1 className='text-center text-bold text-base'>This is my first project of api call</h1>
      <h3>this is users data</h3>
<div className='bg-slate-950 text-white border-solid shadow-md decoration-solid mt-3 text-base'>
      {users && users.map(users => <h4>"this is name" {users.name}, "this is username" {users.username},"this is email id"{users.email},</h4>)}
      </div>
      <h1>This is post data</h1>
      <div className='bg-slate-950 text-white border-solid shadow-md decoration-solid mt-3 text-base'>
      {posts&& posts.map(posts=><h5>"this is my postname"{posts.title} "this is the bodyname"{posts.body}</h5>)}
      </div>
    </>
  )
}

export default page
