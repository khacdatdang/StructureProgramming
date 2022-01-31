import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function ViewUser() {
   
    const [loading, setLoading] = useState(true)
    const [userList, setUserList] = useState([])
    const [userItem, setUserItem] = useState({})
    const [q, setQ] = useState("")
    const [searchParam] = useState(["role"])
    useEffect(() => {
        axios.get(`api/user`).then(res => {
            if (res.status === 200){
                console.log(res);
                setLoading(false)
                setUserList(res.data.data)
            }
        })
     }, [])

     const blockUser = (e,id) => {
         e.preventDefault()
         if (window.confirm("Are you sure to block this user")){
            axios.get(`api/user/${id}/block`).then(res => {
                alert("Block user success")
                window.location.reload()
            }).catch(err => {
                alert("Fail!!!")
            })
         }  
     }
     const activateUser = (e,id) => {
        e.preventDefault()
        if (window.confirm("Are you sure to activate this user")){
           axios.get(`api/user/${id}/active`).then(res => {
               alert("Activate user success")
               window.location.reload()
           }).catch(err => {
               alert("Fail!!!")
           })
        }  
    }
  return (
      <>
        <h2>User List</h2>
        {
            loading ? 
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            :
            <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Role</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.sort((a,b) => a.id > b.id ? 1 : -1).map((item) => {
                        return (
                            <tr>
                            <th scope="row">{item.id}</th>
                            <td>{item.phone}</td>
                            <td>{item.role}</td>
                            <td>{item.status}</td>
                            {/* <!-- Button trigger modal --> */}
                            <td>
                                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#userModal" onClick = {() => {setUserItem(item)}}>
                                View
                                </button>
                            </td>
                          

                            <td>
                            {item.status == "blocked" ?
                            <button type="button" className='btn btn-primary' onClick = {(e) => {activateUser(e,item.id)}} >Unblock</button> :
                            <button type="button" className='btn btn-danger' onClick = {(e) => {blockUser(e,item.id)}}>Block</button>
                            }
                            </td>
                            
                            
                            </tr>
                        )
                    })
                }
               
            </tbody>
            </table>
        }
        

        {/* <!-- Modal --> */}
        <div class="modal fade" id="userModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">User Info</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                Phone : {userItem.phone}
                <br/>
                Email : {userItem.email}
                <br/>
                {
                    userItem.status == "active" && 
                    <>
                        Name : {userItem.name}
                    </>
                    
                }
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                {/* <button type="button" class="btn btn-primary">Save changes</button> */}
            </div>
            </div>
        </div>
        </div>
      </>
  )
}

export default ViewUser;
