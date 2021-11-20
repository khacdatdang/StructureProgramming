import '../../App.css';
import React from 'react';
import Navbar_myjobs  from '../MyJobs/Navbar_myjobs';
import Footer from '../HomePage/Footer';
import Cards_findwork from '../FindWork/Cards_findwork';

function findwork() {
    return(
        <>
            <Navbar_myjobs />
            <Cards_findwork />
            <Footer />
        </>
    );
}

export default findwork;