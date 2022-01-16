import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router';

function EditProfile() {
    const history = useHistory()
    const [userInfo, setUserInfo] = useState({
        name : '',
        email : '',
        phone : '',
        password : '',
        address: '',
        gender :'',
        birthday : ''
    })
    useEffect(() => {
        axios.get(`/api/user_info`).then(res => {
            if (res.data.status=== 200 ){
                console.log(res.data.user);
                setUserInfo(res.data.user)
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
    }
    const [errorList, setErrorList] = useState({
        name : '',
        phone : '',
        address : ''
    })
    const updateProfile = e => {
        e.preventDefault()
        const data = userInfo
        const email = localStorage.getItem("auth_name")
        
        axios.post(`/api/update-user/${email}`, data).then(res => {
            if (res.data.status === 200){
                swal("Success",res.data.message, "success")
                history.push('/userprofile')
            }
            else if (res.data.status === 422)
            {
                setErrorList(res.data.errorList)
                swal("Failed",res.data.message, "error")
            }
            else if (res.data.status === 404){
                swal("Failed",res.data.message, "error")
            }
        })
    }

    return (
        <div>
            <h1> Your Profile </h1>
            <br/>
            <form className="row g-3" onSubmit = {updateProfile}>
            <div className="col-12">
                <label className="form-label">Name</label>
                <input className="form-control" name = "name"value = {userInfo.name} onChange = {handleInput} />
            </div>
            <div className="col-12">
                <label className="form-label">Phone Number</label>
                <input className="form-control" name = "phone" value = {userInfo.phone} onChange = {handleInput}/>
            </div>
            <div className="col-12">
                <label className="form-label">Address</label>
                <input className="form-control" name = "address"  value = {userInfo.address} onChange = {handleInput} />
            </div>
            <button type ="submit" className = "btn btn-primary px-4 " > Submit</button>
            </form>
            <br/>
            
        </div>
    )
}

export default EditProfile
