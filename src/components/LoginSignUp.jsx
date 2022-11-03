// Import other elements or components
import Login from '../elements/Login';
import SignUp from "../elements/SignUp"

function Home () {
    return (
        <div className="home">
            <div className="home-title-container">
                <h1 className="home-title">Login or Sign Up to Budget Buddy</h1>
            </div>
            <div className='login-signup-btn-container'>
                <Login />
                <SignUp />
            </div>

        </div>);
}

export default Home;