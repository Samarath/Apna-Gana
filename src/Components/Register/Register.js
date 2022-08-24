import './Register.css';

const Register = () => {
    return <>
       <div className='center_registerform'>
        <form className="register_form">

            <h2>Register</h2>

            <label htmlFor="name">
                <p>Name</p>
                <input type='text' name="name" id="name"/>
            </label>

            <label htmlFor="email">
                <p>Email</p>
                <input type='email' name="email" id="email"/>
            </label>

            <label htmlFor="password">
                <p>Password</p>
                <input type='password' name="password" id="password"/>
            </label>
            
            
            <input type='submit' value='Register'/>
            <input type='submit' value='Already a user? login'/>
            
                   
            
        </form>
      </div>  
    </>
}

export default Register;