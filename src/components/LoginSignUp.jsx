function Home () {
    return (
        // <div className="d-flex row home justify-content-center">
        //     <h1>Login or Sign Up to Budget Buddy</h1>
        //     <div className="d-grid gap-2 d-flex justify-content-center">
        //         <button className="btn btn-primary" type="button">Button</button>
        //         <button className="btn btn-primary" type="button">Button</button>
        //     </div>
        // </div>
        <div className="home">
            <div className="home-title-container">
                <h1 className="white-text lighten-5">Login or Sign Up to Budget Buddy</h1>
            </div>
            <div className="login-signup-btn-container">
                <form>
                <div className="form-group row">
                    <label for="inputEmail3" className="col-form-label white-text lighten-5">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control white-text lighten-5" id="inputEmail3" placeholder="Email"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputPassword3" className="col-form-label white-text lighten-5">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control white-text lighten-5" id="inputPassword3" placeholder="Password"/>
                    </div>
                </div>
                </form>
            </div>
        </div>);
}

export default Home;