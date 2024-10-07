import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import { createEmployee } from '../services/employeeService';
import { Container, Typography } from '@material-ui/core';
import {useAuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

export const CreateEmployeePage = () => {
    const {token} = useAuthContext();
    const navigate = useNavigate();
    const onSubmit = (formData) => {
        createEmployee(formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log(response.data);
                navigate('/employees');
            })
            .catch((error) => console.log(error));
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h2" gutterBottom>
                Create Employee
            </Typography>
            <EmployeeForm onSubmit={onSubmit} />
        </Container>
    );
};
export default CreateEmployeePage;
