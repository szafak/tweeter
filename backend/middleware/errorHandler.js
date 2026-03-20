'use strict';

/**
 * Centralized error handling middleware.
 * @param {Object} err - Error object.
 * @param {Object} req - HTTP request object.
 * @param {Object} res - HTTP response object.
 * @param {Function} next - Next middleware function.
 */
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err : {} // send error only in development
    });
};

module.exports = errorHandler;
