function SignUp () {
    return (
            <form className="login-signup-form">
                <h2 className="form-title">Sign Up</h2>
                {/* <div className="form-row">
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-form-label form-label">First Name</label>
                        <div className="col-sm-10">
                            <input type="first_name" className="form-control white-text lighten-5" id="inputEmail3" placeholder="First Name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-form-label form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input type="last_name" className="form-control white-text lighten-5" id="inputEmail3" placeholder="Last Name"/>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-form-label form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-form-label form-label">Confirm Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" placeholder="Confirm Email"/>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-form-label form-label">Create Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control white-text lighten-5" id="inputPassword3" placeholder="Create Password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-form-label form-label">Confirm Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control white-text lighten-5" id="inputPassword3" placeholder="Confirm Password"/>
                        </div>
                    </div>
                </div>
                <div className="btn-container">
                    <button class="btn waves-effect waves-light form-btn" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                </div> */}

                <div className="signup-content hide-mobile">
                    <div className="form-column col-6">
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-form-label form-label">First Name</label>
                            <div className="col-sm-10">
                                <input className="form-control white-text lighten-5" id="inputEmail3" placeholder="First Name"/>
                            </div>
                        </div>
                    
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-form-label form-label">Email</label>
                            <div className="col-sm-10">
                                <input className="form-control white-text lighten-5" id="inputEmail3" placeholder="Email"/>
                            </div>
                        </div>
                    
                        <div className="form-group row">
                            <label for="inputPassword3" className="col-form-label form-label">Password</label>
                            <div className="col-sm-10 form-input-cont">
                                <input className="form-control white-text lighten-5" id="inputPassword3" placeholder="Password"/>
                            </div>
                        </div>
                    </div>

                    <div className="form-column col-6">
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-form-label form-label">Last Name</label>
                            <div className="col-sm-10">
                                <input className="form-control white-text lighten-5" id="inputEmail3" placeholder="Last Name"/>
                            </div>
                        </div>
                    
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-form-label form-label">Confirm Email</label>
                            <div className="col-sm-10">
                                <input className="form-control white-text lighten-5" id="inputEmail3" placeholder="Confirm Email"/>
                            </div>
                        </div>
                    
                        <div className="form-group row">
                            <label for="inputPassword3" className="col-form-label form-label">Confirm Password</label>
                            <div className="col-sm-10 form-input-cont">
                                <input className="form-control white-text lighten-5" id="inputPassword3" placeholder="Password"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="signup-content show-mobile">
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-form-label form-label">First Name</label>
                        <div className="col-sm-10">
                            <input className="form-control form-input" id="inputEmail3" placeholder="First Name"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputEmail3" className="col-form-label form-label">Last Name</label>
                        <div className="col-sm-10">
                            <input className="form-control form-input" id="inputEmail3" placeholder="Last Name"/>
                        </div>
                    </div>
                
                    <div className="form-group row">
                        <label for="inputEmail3" className="col-form-label form-label">Email</label>
                        <div className="col-sm-10">
                            <input className="form-control form-input" id="inputEmail3" placeholder="Email"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="inputEmail3" className="col-form-label form-label">Confirm Email</label>
                        <div className="col-sm-10">
                            <input className="form-control form-input" id="inputEmail3" placeholder="Confirm Email"/>
                        </div>
                    </div>
                
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-form-label form-label">Password</label>
                        <div className="col-sm-10 form-input-cont">
                            <input className="form-control form-input" id="inputPassword3" placeholder="Password"/>
                        </div>
                    </div>
                
                    <div className="form-group row">
                        <label for="inputPassword3" className="col-form-label form-label">Confirm Password</label>
                        <div className="col-sm-10 form-input-cont">
                            <input className="form-control form-input" id="inputPassword3" placeholder="Password"/>
                        </div>
                    </div>
                </div>

                <div className="btn-container">
                    <button class="btn waves-effect waves-light form-btn" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </form>
    )
}

export default SignUp;