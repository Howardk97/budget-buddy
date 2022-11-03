function Login () {
    return (
        <form className="login-signup-form">
            <h2 className="form-title">Login</h2>
            <div className="form-group row">
                <label for="inputEmail3" className="col-form-label form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control white-text lighten-5" id="inputEmail3" placeholder="Email"/>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputPassword3" className="col-form-label form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control white-text lighten-5" id="inputPassword3" placeholder="Password"/>
                </div>
            </div>
        </form>
    )
}

export default Login;