import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import swal from 'sweetalert'
function ChangePassword() {
    const [loading, setloading] = useState(true)
    
    const [passwordInfo, setpasswordInfo] = useState({
    })
    const [errorList, seterrorList] = useState({});
    const handleInput = e => {
        e.persist()
        setpasswordInfo({...passwordInfo, [e.target.name]: e.target.value})
    }

    const updatePasswordSubmit = e => {
        e.preventDefault()
        const user_id = localStorage.getItem("user_id")
        axios.post(`/api/user/${user_id}/update_password`, passwordInfo).then(res => {
            if (res.data.status === 200){
                swal("Success",res.data.message, "success")
                window.location.reload()
            }
        }).catch(err => {
            if (err.response.data.errors)
                seterrorList(err.response.data.errors)
            else 
                seterrorList({ old_password : err.response.data.message})
            // swal("Error", "Update password fail", "error")
        })
    }

    return (
        <div>
        <h1> Change password</h1>
        <br/>
        <form className="row g-3" onSubmit= {updatePasswordSubmit}>
        <div className="col-12">
                <label className="form-label">Current password</label>
                <input className="form-control"  type="password" name = "old_password" onChange={handleInput}/>
                <small class="text-danger">
                        {errorList.old_password}
                </small> 
            </div>
            <div className="col-12">
                <label className="form-label">New password</label>
                <input className="form-control" type="password" name = "new_password" onChange={handleInput}/>
                <small class="text-danger">
                        {errorList.new_password}
                </small> 
            </div>
            
            <div className="col-12">
                <label className="form-label">Confirm new password</label>
                <input className="form-control" type="password" name = "new_password_confirmation"  onChange={handleInput} />
                <small class="text-danger">
                        {errorList.new_password}
                </small> 
            </div>
        <button type ="submit" className = "btn btn-primary px-4 " > Submit</button>
        </form>
        <br/>
        
        </div>
    )
}

export default ChangePassword
