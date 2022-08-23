import './Login.css';

const Login = () => {
    return <>
       <div className='center_loginform'>
        <form className="login_form">

            <h2>Welcome to Apna Gana</h2>

            <label htmlFor="email">
                <p>Email</p>
                <input type='email' name="email" id="email"/>
            </label>

            <label htmlFor="password">
                <p>Password</p>
                <input type='password' name="password" id="password"/>
            </label>

            <input type='submit' value='Login'/>
        </form>
      </div>  
    </>
}

export default Login;