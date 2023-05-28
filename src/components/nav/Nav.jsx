import React, { useState, useEffect } from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdWorkHistory} from 'react-icons/md'
import {AiFillBook} from 'react-icons/ai'
import {AiFillContacts} from 'react-icons/ai'
import {IoMdSchool} from 'react-icons/io'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

    // This function determines the current active section
    const sectionInView = () => {
        let newActiveNav = '#';
        const offsets = ['#about', '#education', '#experience', '#portfolio', '#contact'].map(id => {
            const element = document.getElementById(id.replace('#', ''));
            return element ? element.getBoundingClientRect().top : null;
        });

        offsets.forEach((offset, index) => {
            if (offset < window.innerHeight / 2) {
                newActiveNav = ['#about', '#education', '#experience', '#portfolio', '#contact'][index];
            }
        });
        
        setActiveNav(newActiveNav);
    };

    useEffect(() => {
        window.addEventListener('scroll', sectionInView);
        
        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', sectionInView);
        };
    }, []);

    return (
        <nav>
            <a href="#"  onClick ={() => setActiveNav('#')} className = {activeNav === "#" ? 'active' : ''}><AiFillHome /></a>
            <a href="#about" onClick = {() => setActiveNav('#about')} className = {activeNav === "#about" ? 'active' : ''}><BsFillPersonFill /></a>
            <a href="#education" onClick = {() => setActiveNav('#education')} className = {activeNav === "#education" ? 'active' : ''}><IoMdSchool /></a>
            <a href="#experience" onClick = {() => setActiveNav('#experience')} className = {activeNav === "#experience" ? 'active' : ''}><MdWorkHistory /></a>
            <a href="#portfolio" onClick = {() => setActiveNav('#portfolio')} className = {activeNav === "#portfolio" ? 'active' : ''}><AiFillBook /></a>
            <a href="#contact" onClick = {() => setActiveNav('#contact')} className = {activeNav === "#contact" ? 'active' : ''}><AiFillContacts /></a>
        </nav>
    )
}

export default Nav;