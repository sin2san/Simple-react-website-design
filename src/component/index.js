import React from 'react';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom'
import Login from './Authentication/Login';
import Header from './Header';
import Footer from './Footer/Footer';
import Home from './Home';
import NotFound from './NotFound';
import Contact from './Contact';

const Root = () => {
    const emailAddress = localStorage.getItem('email');

    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={emailAddress ? <Navigate to="/" /> : <Login />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Root;