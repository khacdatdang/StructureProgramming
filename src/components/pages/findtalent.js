import '../../App.css';
import React from 'react';
import Navbar_findtalent  from '../FindTalent/Navbar_findtalent';
import Cards_findtalent  from '../FindTalent/Cards_findtalent';
import Footer from '../HomePage/Footer';

function findtalent () {
    return (
        <>
        <Navbar_findtalent />
        <Cards_findtalent />
        <Footer />
        </>
    );
}

export default findtalent;