import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import {useAuthContext} from "../context/AuthContext";
import {deleteEmployee} from "../services/employeeService";
import {useNavigate} from "react-router-dom";

const EmployeeList = ({ employees, setEmployees }) => {
    const navigate = useNavigate();
    const token = useAuthContext().token;

    const editEmp = (id) => {
        console.log('Edit Employee ID: ', id);
        navigate('/edit-employee/'+ id);
    }

    const deleteEmp = (id) => {
        console.log('Delete Employee ID: ', id);
        deleteEmployee(id, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                employees.splice(employees.findIndex((employee) => employee._id !== id), 1);
                setEmployees([...employees]);
            })
            .catch((error) => console.log(error));
    };


    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Designation</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map((employee, index) => (
                            <TableRow key={index} >
                                <TableCell>{employee._id}</TableCell>
                                <TableCell>{employee.name}</TableCell>
                                <TableCell>{employee.email}</TableCell>
                                <TableCell>{employee.designation}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={() => editEmp(employee._id)} style={{ marginRight: '8px' }}>Edit</Button>
                                    <Button variant="contained" color="secondary" onClick={() => deleteEmp(employee._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default EmployeeList;
