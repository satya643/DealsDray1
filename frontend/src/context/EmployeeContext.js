import React, { createContext, useState, useEffect } from 'react';
import {useContext} from "react";

//create context
const EmployeeContext = createContext();

const EmployeeProvider = ({children}) => {
    const [employees, setEmployees] = useState([]);

    const addEmployee = (employee) => {
        setEmployees(prevEmployees => [...prevEmployees, employee]);
    }

    const editEmployee = (updatedEmployee) => {
        setEmployees(prevEmployees => prevEmployees.map(employee =>
            employee.id === updatedEmployee.id ? updatedEmployee : employee
        ));
    }

    const deleteEmployee = (employeeId) => {
        setEmployees(prevEmployees => prevEmployees.filter(employee => employee.id !== employeeId));
    };

    //provider the context
    return (
        <EmployeeContext.Provider value={{ employees, setEmployees, addEmployee, editEmployee, deleteEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};
//consume the context
export const useEmployeeContext = () => {
    return useContext(EmployeeContext);
};
