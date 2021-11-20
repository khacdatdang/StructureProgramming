import axios from 'axios'
import React from 'react'
import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

function Profile() {
    const [userInfo, setUserInfo] = useState({
        name : '',
        email : '',
        tel : '',
        password : '',
        address: ''
    })
    const email = localStorage.getItem('auth_name')
    useEffect(() => {
        axios.get(`/api/view-profile/${email}`).then(res => {
            if (res.data.status=== 200 ){
                setUserInfo(res.data.user)
            }
            else if (res.data.status === 404){
                swal("Error", res.data.message, "error")
            }
            console.log(res.data.user);
        })
    }, [])

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
                <input className="form-control" value = {userInfo.tel} disabled />
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

export default Profile
