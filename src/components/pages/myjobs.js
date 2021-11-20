import '../../App.css';
import React from 'react';
import Navbar_myjobs  from '../MyJobs/Navbar_myjobs';
import Footer from '../HomePage/Footer';
import Cards_myjobs  from '../MyJobs/Cards_myjobs';

function myjobs() {
    return(
        <>
            <Navbar_myjobs />
            <Cards_myjobs />
            <Footer />
        </>
    );
}

export default myjobs;