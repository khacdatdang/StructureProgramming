import axios from 'axios';
import React from 'react'
import {Link, useHistory} from 'react-router-dom';
const Sidebar = () => {
    const history = useHistory()
    const logOutSubmit = (e) => {
        e.preventDefault()
        axios.post(`/api/logout`).then(res => {
          if (res.data.status === 200){
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_name');
            // swal("Success", res.data.message, "success");
            history.push('/signin');
          }
        })
      }
    return (
        // <!-- Sidebar-->
        <div className="border-end bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom bg-light">User Profile</div>
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/userprofile/viewprofile">Profile</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/userprofile/changepassword">Change Password</Link>
                <Link className="list-group-item list-group-item-action list-group-item-light p-3" to="/userprofile/cardinfo">
                    Card Info
                </Link>
                <br/>
                <br/>
                <br/>

                <button className = "btn btn-danger btn-md" onClick = {logOutSubmit} > Log Out </button>
            </div>
        </div>
    )
}

export default Sidebar

