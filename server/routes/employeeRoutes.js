const express = require('express');
const router = express.Router();
const { getEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/employeeController');
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/', authMiddleware, getEmployees);
router.get('/:id', authMiddleware, getEmployeeById);
router.post('/create', authMiddleware, createEmployee);
router.put('/update/:id', authMiddleware, updateEmployee);
router.delete('/delete/:id', authMiddleware, deleteEmployee);


module.exports = router;


