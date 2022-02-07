import { useRef, useState, useEffect } from 'react';
import './Login.css'
const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
      e.preventDefault();
      setUser('');
      setPwd('');
      setSuccess(true);
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section style={{backgroundImage: "url(/images/img.svg",backgroundSize:'cover'}}>
                  <div className='form'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <p id='insta'>Asiko</p>
                    <p id='share'>Helping you share the Moment</p>
                   <h1>Welcome Back!</h1>
                    <form onSubmit={handleSubmit}>
                        <div id="Email">
                        <input
                            type="Email"
                            placeholder='Email Address'
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />
                        </div>
                        <div id='password'>
                        <input
                            type="password"
                            placeholder='Password'
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        </div>
                        <div className="check">
                        <input 
                           type="checkbox"
                        />
                        <label>Keep me signed in </label>
                        <a href='#'>Forgot Password?</a>
                        </div>
                        <div className='Login'>
                        <button>Log In</button>
                        </div>
                    </form>
                    <p id='create'>
                        Don't Have an Account?
                        <span>
                            <a href="#">Create</a>
                        </span>
                    </p>
                    </div>
                </section>
            )}
        </>
    )
}

export default Login
