import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Radio, RadioGroup, FormControlLabel, Checkbox, FormGroup, FormLabel, Grid } from "@material-ui/core";

const EmployeeForm = ({ onSubmit, employee }) => {
    const [formData, setFormData] = useState({
        f_name: employee?.name || '',
        f_email: employee?.email || '',
        f_mobile: employee?.mobile || '',
        f_designation: employee?.designation || '',
        f_gender: employee?.gender ||  '',
        f_course: employee?.course? [employee.course] : [],
        f_img: employee?.image || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, f_img: e.target.files[0] });
    };

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        if (checked) {
            setFormData({ ...formData, [name]: [...formData[name], value] });
        } else {
            setFormData({ ...formData, [name]: formData[name].filter(v => v !== value) });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField name="f_name" value={formData.f_name} onChange={handleChange} label="Name" required fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField name="f_email" value={formData.f_email} onChange={handleChange} label="Email" required fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField name="f_mobile" value={formData.f_mobile} onChange={handleChange} label="Mobile Number" required fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FormControl required fullWidth>
                        <InputLabel>Select Designation</InputLabel>
                        <Select name="f_designation" value={formData.f_designation} onChange={handleChange}>
                            <MenuItem value="Manager">Manager</MenuItem>
                            <MenuItem value="Developer">Developer</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup row name="f_gender" value={formData.f_gender} onChange={handleChange}>
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Course</FormLabel>
                        <FormGroup row>
                            <FormControlLabel control={<Checkbox checked={formData.f_course.includes('React')} onChange={handleCheckboxChange} name="f_course" value="React" />} label="React" />
                            <FormControlLabel control={<Checkbox checked={formData.f_course.includes('Node')} onChange={handleCheckboxChange} name="f_course" value="Node" />} label="Node" />
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" component="label">
                        Upload File
                        <input type="file" hidden name="f_img" onChange={handleFileChange} required />
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default EmployeeForm;
