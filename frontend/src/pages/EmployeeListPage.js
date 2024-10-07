import React, { useEffect, useState } from 'react';
import EmployeeList from '../components/EmployeeList';
import { fetchEmployees } from '../services/employeeService';
import {useAuthContext} from "../context/AuthContext";

const EmployeeListPage = () => {
  const [employees, setEmployees] = useState([]);
  const {token} = useAuthContext()

  useEffect(() => {
    const getEmployees = async () => {
      fetchEmployees(
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
      ).then(response => {
        console.log(response.data);
        setEmployees(response.data);
      }, (error) => {
        console.log(error)
        setEmployees([]);
      });
    };
    getEmployees();
  }, []);

  return (
      <div>
        <h2>Employee List</h2>
        <EmployeeList employees={employees} setEmployees={setEmployees} />
      </div>
  );
};

export default EmployeeListPage;
