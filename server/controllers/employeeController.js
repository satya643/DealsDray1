const Employee = require('../models/Employee');
const cloudinary = require('../config/cloudinary');

// Get all employees
    exports.getEmployees = async (req, res) => {
        try {
            const employees = await Employee.find();
            if (!employees || employees.length === 0) {
                return res.status(404).json({ msg: 'No employees found' });
            }
            res.json(employees);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    };

// Get employee by ID
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ msg: 'Employee not found' });
        }
        res.json(employee);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Create a new employee
exports.createEmployee = async (req, res) => {
    const { f_name, f_email, f_mobile, f_number, f_designation, f_gender, f_course, f_image } = req.body;

    try {
        // const result = await cloudinary.uploader.upload(req.file.path, {
        //     folder: 'employee_images'
        // });

        console.log(req.body)
        const newEmployee = new Employee({
            name: f_name,
            email: f_email,
            mobile: f_mobile,
            designation: f_designation,
            gender: f_gender,
            course: f_course[0],
            image: '/image/dummyImage.png',
        });

        const employee = await newEmployee.save();
        console.log(employee)
        res.json(employee);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Update employee
exports.updateEmployee = async (req, res) => {
    const { f_name, f_email, f_mobile, f_number, f_designation, f_gender, f_course, f_image } = req.body;

    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({ msg: 'Employee not found' });
        }

        // const result = await cloudinary.uploader.upload(req.file.path, {
        //     folder: 'employee_images'
        // });

        employee.name = f_name;
        employee.email = f_email;
        employee.mobile = f_mobile;
        employee.designation = f_designation;
        employee.gender = f_gender;
        employee.course = f_course[0];
        employee.image = '/image/dummyImage.png';

        await employee.save();
        res.json(employee);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Delete employee
exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({ msg: 'Employee not found' });
        }

        await employee.deleteOne();
        res.json({ msg: 'Employee removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};


