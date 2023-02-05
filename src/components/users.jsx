import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import LoadingUsers from './loading/loadingUsers'
import { Link } from 'react-router-dom'


function Users() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(()=>{
        getdata()
    },[])

    const getdata = async()=>{
        const response = await axios.get('https://reqres.in/api/users')
       setUsers(response.data.data)
        setIsLoading(false)
    }
    const handleCreate = async () =>{
        const newUser = {
            first_name : 'mohammad',
            last_name:'mahmoodi',
            email:'samymosvi@gmail.com',
            avatar:'	https://lh3.googleusercontent.com/ogw/AAEL6si_TDeuVyqDtcibsGBo0O0fnzBCwjUWRxn1YKx1bw=s64-c-mo'
        }
        // const response = await axios.post('https://reqres.in/api/users',newUser)
        // console.log(response.data)
        setUsers([...users,newUser])
    }



    const handleUpdate = async (user) =>{
        user.first_name = 'update'
        // const response = await axios.put('https://reqres.in/api/users')
        const updateUsers = [...users]
        const index = updateUsers.indexOf(user)
        updateUsers[index] = {...user}
       setUsers(updateUsers)

    }


    const handleDelete = async (user) =>{
    //    const response = await axios.delete('https://reqres.in/api/users')
       const newUser = users.filter(u => u.id !== user.id)
       setUsers(newUser)


    }
  return (
    <>
    <button onClick={handleCreate} className="btn btn-lg btn-primary">create</button>
    <div className="row">
       {isLoading ?  (<LoadingUsers/>) :
       users.map((user)=>{
        return(
    <div key={user.id} className="col-4 text-center p-5">
        <img src={user.avatar} alt="can not load" style={{borderRadius: '50%',width:'100px'  }} />
        <Link to={`/users/${user.id}`}>
        <h4>{user.first_name} {user.last_name}</h4>
        </Link>
        <h5>{user.email}</h5>
        <div className="row">
        <div className="col-6">
                <button onClick={()=>{handleUpdate(user)}} className="btn btn-info btn-sm">Update</button>
            </div>
            <div className="col-6">
                <button onClick={()=>{handleDelete(user)}} className="btn btn-danger btn-sm">Delete</button>
            </div>
        </div>
    </div>
)})}
    </div>
    </>
  )
}

export default Users

