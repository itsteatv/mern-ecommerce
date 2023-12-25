const errorHandler = (err , req , res , next) => {
    const error = {
        message : err.message || "Internal server error" , 
        status : err.statusCode || 500 
    }

    if (err.name === "CastError") {
        error.status = 404
        error.message = `no product found with id ${err.value}` 
    }

    res.status(error.status).json({message : error.message})
}

module.exports = errorHandler ; 