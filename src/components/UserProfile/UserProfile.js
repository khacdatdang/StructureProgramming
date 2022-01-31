import React from "react";
import Sidebar from "./Sidebar";
import {Button} from '../Layouts/Button';
import {Switch, Route, Redirect} from 'react-router-dom'
import routes from '../../routes/routes'
import './UserProfile.css';
import '../../assets/css/styles.css'
import '../../assets/js/scripts'


function UserProfile () {
    return (
        <div className="d-flex" id="wrapper">
            <Sidebar></Sidebar>
            <div id="page-content-wrapper">
              
                {/* <!-- Page content--> */}
                <div className="container-fluid">
                    <main>
                        <Switch> 
                            {
                                routes.map((route, idx) => {
                                    return (
                                        route.component && (
                                            <Route
                                                key = {idx}
                                                path = {route.path}
                                                exact = {route.exact}
                                                name = {route.name}
                                                render = {
                                                    (props) => (
                                                        <route.component {...props}/>
                                                    )
                                                }
                                            /> 
                                        )
                                    )
                                })
                            }
                            {/* <Redirect from = "" to = "/userprofile"></Redirect> */}
                        </Switch>
                    </main>
                </div>
            </div>
        </div>
        
    );

}

export default UserProfile;