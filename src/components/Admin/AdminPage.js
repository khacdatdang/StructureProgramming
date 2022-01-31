import React from "react";
import Sidebar from "./SideBar";
import {Button} from '../Layouts/Button';
import {Switch, Route, Redirect} from 'react-router-dom'
import routes from '../../routes/routes'
import '../../assets/css/styles.css'
import '../../assets/js/scripts'


function AdminPage () {
    return (
        <div className="d-flex" id="wrapper">
            <Sidebar></Sidebar>
            <div id="page-content-wrapper">
                {/* <!-- Top navigation--> */}
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <div className="container-fluid">
                        <button className="btn btn-primary" id="sidebarToggle">Toggle Menu</button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#!">Action</a>
                                        <a className="dropdown-item" href="#!">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#!">Something else here</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}
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

export default AdminPage;