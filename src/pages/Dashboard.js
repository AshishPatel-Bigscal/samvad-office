import React from 'react'
import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("userStatus");
        localStorage.removeItem("userId");
        navigate("/");
    }
    return (
        <div>
            <Nav><button onClick={() => { handleLogout() }}>Logout</button></Nav>
            <Header />
        </div>
    )
}

export default Dashboard