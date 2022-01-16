import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import swal from 'sweetalert'
function ChangePassword() {
    const [loading, setloading] = useState(true)
    
    const [userInfo, setUserInfo] = useState({
        name : '',
        email : '',
        phone : '',
        password : '',
        address: '',
        gender :'',
        birthday : ''
    })
    const email = localStorage.getItem('auth_name')
    useEffect(() => {
        axios.get(`/api/user_info`).then(res => {
            if (res.data.status=== 200 ){
                console.log(res.data.user);
                setUserInfo(res.data.user)
                setloading(false)
            }
            else if (res.data.status === 404){
                swal("Error", res.data.message, "error")
            }
            console.log(res.data.user);
        })
    }, [])
    const handleInput = e => {
        e.persist()
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
        console.log(userInfo);
    }
    return (
        <div>
        <h1> Change password</h1>
        <br/>
        <form className="row g-3">
        <div className="col-12">
                <label className="form-label">Current password</label>
                <input className="form-control"  type="password" name = "password" onChange={handleInput}/>
            </div>
            <div className="col-12">
                <label className="form-label">New password</label>
                <input className="form-control" type="password" name = "new_password" onChange={handleInput}/>
            </div>
            
            <div className="col-12">
                <label className="form-label">Confirm new password</label>
                <input className="form-control" type="password" name = "new_password_confirmation"  onChange={handleInput} />
            </div>
        <button type ="submit" className = "btn btn-primary px-4 " > Submit</button>
        </form>
        <br/>
        
    </div>
    )
}

export default ChangePassword
