
exports.isAuthenticated = async(req, res, next) => {
    
    /* logic for isAuth */
    this.isAuthenticated = false;  //by default it is false, set to true to allow..
    
    if(this.isAuthenticated) next();
    else res.status(401).json({
        success: false,
        message: 'Login first to access the path.'
    })
}