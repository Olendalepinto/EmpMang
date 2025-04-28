import express from 'express';
import { Employees } from '../models/Employee.js'; // use ../ to go back one folder

const router = express.Router();

// Create a new employee
router.post('/api/employees', async (req, res) => {
    try {
        const { firstname, lastname, email, phone, job, dateOfJoining, image } = req.body;

        const newEmployee = new Employees({
            firstname,
            lastname,
            email,
            phone,
            job,
            dateOfJoining,
            image
        });

        await newEmployee.save();

        res.status(201).json({ message: 'Employee created successfully', employee: newEmployee });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

export default router;
