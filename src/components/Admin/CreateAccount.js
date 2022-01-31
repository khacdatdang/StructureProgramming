import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
function CreateAccount() {
    const [accountInfo, setaccountInfo] = useState({});
    const [errorList, seterrorList] = useState({});

    const createAccountSubmit = e => {
        e.preventDefault()
        axios.post(`/api/register`,accountInfo).then(res => {
            console.log(res.data.status);
            if (res.data.status == 201){
                localStorage.setItem('auth_token', res.data.token)
                localStorage.setItem('user_id', res.data.id)
                swal("Success", res.data.message, "success")
                window.location.reload()
            }
            else {
                console.log("Error");
                seterrorList(res.data.errors)
                console.log(res.data);
            }
        }).catch(err => {
            seterrorList(err.response.data.errors);
        })
    }
    const handleInput = e => {
        e.persist()
        console.log(accountInfo);
        setaccountInfo({...accountInfo,[e.target.name]:e.target.value})
    }
  return  (
    <div>
    <h1> Create account for Seller / Shipper / Admin</h1>
    <br/>
    <form className="row g-3" onSubmit={createAccountSubmit}>
        <select className="form-select" name = "role" onChange={handleInput} aria-label="Default select example">
        <option selected>Select type of account</option>
        <option value="admin">Admin</option>
        <option value="seller">Seller</option>
        <option value="logistic_manager">Logistic manager</option>
        </select>
        <small class="text-danger">
          {errorList.role}
        </small>    
    <div className="col-12">
            <label className="form-label">Username</label>
            <input
                className="form-control"
                type=""
                name="username"
                placeholder="Username"
                value = {accountInfo.username}
                onChange={handleInput}
            />
            <small class="text-danger">
                {errorList.username}
            </small>    
        </div>
        <div className="col-12">
            <label className="form-label">Email</label>
            <input
            className="form-control"
            type="text"
            name="email"
            placeholder="Email"
            value = {accountInfo.email}
            onChange={handleInput}   
        />
             <small class="text-danger">
                {errorList.email}
            </small> 
        </div>
        
        <div className="col-12">
            <label className="form-label">Phone number</label>
            <input
                className="form-control"
                type="text"
                name="phone"
                placeholder="Phone Number"
                value = {accountInfo.phone}
                onChange={handleInput}
        />
             <small class="text-danger">
                {errorList.phone}
            </small> 
        </div>


        <div className="col-12">
            <label className="form-label">Password</label>
            <input
                className="form-control"
                type="password"
                name="password"
                placeholder = "Password"
                value = {accountInfo.password}
                onChange={handleInput}
        />
             <small class="text-danger">
                {errorList.password}
            </small> 
        </div>

        <div className="col-12">
            <label className="form-label">Confirm password</label>
            <input
                className="form-control"
                type="password"
                name="password_confirmation"
                placeholder = "Password"
                value = {accountInfo.password_confirmation}
                onChange={handleInput}
        />
             <small class="text-danger">
                {errorList.password}
            </small> 
        </div>

        

        
    <button type ="submit" className = "btn btn-primary px-4 " > Submit</button>
    </form>
    <br/>
    
    </div>
  )
  
}

export default CreateAccount;
