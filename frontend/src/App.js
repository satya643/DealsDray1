import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import CreateEmployeePage from './pages/CreateEmployeePage';
import EmployeeListPage from './pages/EmployeeListPage';
import EmployeeEditPage from './pages/EmployeeEditPage';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import { CssBaseline, Container, Box } from '@material-ui/core';
import RegisterPage from "./pages/RegisterPage";
import {OTPVerificationPage} from "./pages/OTPVerificationPage";
// import { combineReducers } from 'redux';
// import { tokenReducer } from './redux/reducers/tokenReducer';
// import authReducer from './redux/reducers/authReducer';
// import otpReducer from "./redux/reducers/otpReducer";
// import employeeReducer from './redux/reducers/employeeReducer';
// import {Provider} from "react-redux";
//
// const store = configureStore();

const App = () => {

    return (
        // <Provider store={store}>
            <Router>
                <AuthProvider>
                    <CssBaseline />
                    <Navbar />
                    <Container>
                        <Box my={2}>
                            <Routes>
                                <Route path="/" element={<LoginPage />} />
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/register" element={<RegisterPage />} />
                                <Route path="/otp" element={<OTPVerificationPage />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/create-employee" element={<CreateEmployeePage />} />
                                <Route path="/employees" element={<EmployeeListPage />} />
                                <Route path="/edit-employee/:id" element={<EmployeeEditPage />} />
                            </Routes>
                        </Box>
                    </Container>
                </AuthProvider>
            </Router>
        // {/*</Provider>*/}
    );
};

export default App;
