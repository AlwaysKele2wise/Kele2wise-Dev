

const errorHandler = (err, req, res, next) => {
  // Log the error (you can replace this with your preferred logging mechanism)
  console.error('Error occurred:', err);

  // Set an appropriate status code (e.g., 500 for internal server error)
  const statusCode = err.statusCode || 500;

  // Send an error response to the client
  res.status(statusCode).json({
    error: {
      message: err.message || 'Something went wrong!',
    },
  });
}


module.exports = errorHandler;