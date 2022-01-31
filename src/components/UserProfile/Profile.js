import axios from 'axios'
import React from 'react'
import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

function Profile() {
    const [loading, setloading] = useState(true)
    
    const [userInfo, setUserInfo] = useState({})
    const user_id = localStorage.getItem("user_id")
    useEffect(() => {
        
        axios.get(`/api/user/${user_id}`).then(res => {
            if (res.status=== 200 ){
                console.log(res.data);
                setUserInfo(res.data.data)
                console.log(userInfo);
                setloading(false)
            }
            else if (res.status === 404){
                swal("Error", res.data.message, "error")
            }
            
        })
    }, [])

    if (loading) 
        return  <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
        </div> 
    else {
        return (
        
            <div>
                <h1> Your Profile </h1>
                
                <br/>
                <form className="row g-3">
                <div className="col-12">
                    <label className="form-label">Name</label>
                    <input className="form-control" value = {userInfo.name} disabled/>
                </div>
                <div className="col-12">
                    <label className="form-label">Email</label>
                    <input className="form-control" value ={userInfo.email}  disabled/>
                </div>
                <div className="col-12">
                    <label className="form-label">Phone Number</label>
                    <input className="form-control" value = {userInfo.phone} disabled />
                </div>
                <div className="col-12">
                    <label className="form-label">Gender </label>
                    <input className="form-control" value = {userInfo.gender} disabled />
                </div>
                <div className="col-12">
                    <label className="form-label">Birthday </label>
                    <input className="form-control" value = {userInfo.birthday} disabled />
                </div>
                <div className="col-12">
                    <label className="form-label">Address</label>
                    <input className="form-control" value = {userInfo.address} disabled  />
                </div>
                </form>
                <br/>
                <Link  to = '/userprofile/editprofile' className = "btn btn-primary btn-lg float" > Edit Profile</Link>
            </div>
        )
    }
}
    


export default Profile
