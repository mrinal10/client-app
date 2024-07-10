import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm.tsx';
import Dashboard from '../components/Dashboard.tsx';

interface ChildComponentProps {
    data: boolean;
}

const Routing: React.FC<ChildComponentProps> = ({data}) => {

    return (
    <Router>
        <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={data ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
    </Router>
    );
};

export default Routing;