import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { useHistory } from 'react-router';

function EditProfile() {
    const history = useHistory()
    const user_id = localStorage.getItem("user_id")

    const [userInfo, setUserInfo] = useState({
        name : '',
        email : '',
        phone : '',
        password : '',
        address: '',
        gender :'',
        birthday : ''
    })

    const formatDate = date => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    useEffect(() => {
        axios.get(`/api/user/${user_id}`).then(res => {
            if (res.status === 200 ){
                console.log(res.data);
                setUserInfo(res.data.data)
            }
            console.log(res.data.user);
        })
    }, [])

    const handleInput = e => {
        e.persist()
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
        console.log(userInfo);
    }
    const updateProfile = e => {
        e.preventDefault()
        const user_id = localStorage.getItem("user_id")
        
        axios.put(`/api/user/${user_id}`, userInfo).then(res => {
            if (res.data.status === 200){
                swal("Success",res.data.message, "success")
                history.push('/userprofile')
            }
        }).catch(err => {
            swal("Error", "Edit fail", "error")
        })
    }

    return (
        <div>
            <h1> Your Profile </h1>
            <br/>
            <form className="row g-3" onSubmit = {updateProfile}>
            <div className="col-12">
                    <label className="form-label">Name</label>
                    <input className="form-control" name = "name" value = {userInfo.name} onChange={handleInput}/>
                </div>
                <div className="col-12">
                    <label className="form-label">Email</label>
                    <input className="form-control" name = "email" value ={userInfo.email}  onChange={handleInput}/>
                </div>
                <div className="col-12">
                    <label className="form-label">Phone Number</label>
                    <input className="form-control" name = "phone" value = {userInfo.phone} onChange={handleInput} />
                </div>
                <div className="col-12">
                    <label className="form-label">Gender </label>
                    {/* <input className="form-control" value = {userInfo.gender} onChange={handleInput} /> */}
                    <select
                                className="billing_textInput"
                                name="gender"
                                onChange={handleInput}
                                defaultValue={userInfo.gender}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Orther">Other</option>
                    </select>
                </div>
                <div className="col-12">
                    <label className="form-label">Birthday </label>
                    <input
                                className="billing_textInput"
                                type="date" name="birthday"
                                placeholder="No information"
                                defaultValue={formatDate(userInfo.birthday)}
                                onChange={handleInput}
                            />
                </div>
                <div className="col-12">
                    <label className="form-label">Address</label>
                    <input className="form-control" name = "address" value = {userInfo.address} onChange={handleInput}  />
                </div>
            <button type ="submit" className = "btn btn-primary px-4 " > Submit</button>
            </form>
            <br/>
            
        </div>
    )
}

export default EditProfile
