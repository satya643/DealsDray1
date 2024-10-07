import React, { useEffect, useState } from 'react';
import EmployeeForm from '../components/EmployeeForm';
import { fetchEmployee, updateEmployee } from '../services/employeeService';
import {useNavigate, useParams} from 'react-router-dom';
import {useAuthContext} from "../context/AuthContext";

const EmployeeEditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {token} = useAuthContext();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const getEmployee = async () => {
      const response = await fetchEmployee(id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEmployee(response.data);
    };
    getEmployee();
  }, [id]);

  const handleSubmit = (updatedEmployee) => {
    updateEmployee(id, updatedEmployee, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      console.log(response.data);
      navigate('/employees');
    }).catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      {employee && <EmployeeForm employee={employee} onSubmit={handleSubmit} />}
    </div>
  );
};

export default EmployeeEditPage;
