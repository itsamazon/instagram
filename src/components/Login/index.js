import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import logincss from './login.module.css';
import logo from '../../Images/logo/Asiko.svg';
import axios from 'axios';


const Login = () => {
    const thenavigate = useNavigate()

  const userRef = useRef();
  const errRef = useRef();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);


  useEffect(() => {
    userRef.current.focus();
  }, []);


  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser('');
    setPwd('');
    setSuccess(true);
    const data = {username:user,password:pwd}
    axios.post('https://asiko-app.herokuapp.com/login',data).then(res => {
        if(res.status === 200){
            localStorage.setItem('asiko-app-auth',JSON.stringify(res.data))

            thenavigate('/home');

            console.log(res);
        }
    })

  };
  return (
        <div className = 'container'>
          <div className={logincss.content}>
            <p
              ref={errRef}
              className={errMsg ? 'errmsg' : 'offscreen'}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <header className='header'>
              <img src={logo} alt="Asiko" id="insta" />
              <p>Helping you share the Moment</p>
            </header>
            
            <h2 style={{textAlign:'left',marginBottom:'1rem',fontSize:'1.2rem'}}>Welcome Back!</h2>
            <form onSubmit={handleSubmit}>
                <input
                  type="username"
                  placeholder="Username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                  />
             
              <div className={logincss.check}>
                  <input id='checkbox' type="checkbox" />
                  <label className={logincss.label} htmlFor='checkbox'>Keep me signed in </label>
               
                <a href="#">Forgot Password?</a>
              </div>
                <button type='submit' className='button'>Log In</button>
            </form>
            <p id="create">
              Don't Have an Account?
              <span>
                <a href="#" style={{color:"#006ECF"}}> Create</a>
              </span>
            </p>
          </div>
        </div>
  );
};
export default Login;