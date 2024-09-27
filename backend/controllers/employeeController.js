const Employee = require('../models/employee');

// Create Employee
exports.createEmployee = async (req, res) => {
  const { f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course } = req.body;
  try {
    const newEmployee = new Employee({ f_Name, f_Email, f_Mobile, f_Designation, f_Gender, f_Course });
    await newEmployee.save();
    res.status(201).json({ message: 'Employee created successfully', employee: newEmployee });
  } catch (error) {
    res.status(500).json({ message: 'Error creating employee', error });
  }
};

// Get All Employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees', error });
  }
};

// Get Employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employee', error });
  }
};

// Update Employee
exports.updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'Employee updated successfully', employee: updatedEmployee });
  } catch (error) {
    res.status(500).json({ message: 'Error updating employee', error });
  }
};

// Delete Employee
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting employee', error });
  }
};
