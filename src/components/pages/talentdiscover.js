import '../../App.css';
import React from 'react';
import Navbar_findtalent  from '../FindTalent/Navbar_findtalent';
import Cards_talentdis from '../TalentDis/Cards_talentdis';
import Footer from '../HomePage/Footer';

function talentdiscover () {
    return (
        <>
        <Navbar_findtalent />
        <Cards_talentdis />
        <Footer />
        </>
    );
}

export default talentdiscover;