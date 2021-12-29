const express = require('express');
const router = new express.Router();
const CustomerController = require('../controllers/customer');

/**
 * Get all customers
 */
router.get('/', CustomerController.getAllCustomers);

/**
 * Get a customer
 */
router.get('/:id', CustomerController.getCustomerById);

/**
 * Cerate a customer
 */
router.post('/', CustomerController.createCustomer);

/**
 * Save customer changes
 */
router.patch('/:id', CustomerController.saveCustomer);

/**
 * Delete customer
 */
router.delete('/:id',CustomerController.deleteCustomer);

module.exports = router;