import axios from "axios";

export const fetchEmployees = (config) => {
    return axios.get('http://localhost:5000/api/employees', config);
  };
export const fetchEmployee = (id, config) => {
    return axios.get(`http://localhost:5000/api/employees/${id}`, config);
  };
export const createEmployee = (employeeData, config) => {
    return axios.post('http://localhost:5000/api/employees/create', employeeData, config);
  };
export const updateEmployee = (id, employeeData, config) => {
    return axios.put(`http://localhost:5000/api/employees/update/${id}`, employeeData, config);
};
export const deleteEmployee = (id, config) => {
    return axios.delete(`http://localhost:5000/api/employees/delete/${id}`, config);
};
