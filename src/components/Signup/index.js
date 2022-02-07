import { Link,useNavigate} from "react-router-dom"
import  logo from '../../Images/logo/Asiko.svg'
import signupcss from './signup.module.css'
import { useState,useEffect} from 'react';
import axios from 'axios'

const Signup = () => {
    const initialValue = {firstName:"",lastName:"",username:"",password:""};
    const [formValues,setFormValues] = useState(initialValue);
    const [formError, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)
    const onnavigate = useNavigate()

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormValues({...formValues,[name]:value})
        // console.log(formValues) 
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues)) 
        setIsSubmit(true);
    }
    useEffect(() => {
        if (Object.keys(formError).length === 0 && isSubmit){
            axios.post('https://asiko-app.herokuapp.com/createuser', formValues).then(res => {
                if(res.status === 200){
                    onnavigate('/login')
                }
            });
            
        }
    },[formError])

    const validate = (values) => {
        const error = {}
        
        if(!values.username){
            error.username = "User name is required!"
        }

        if(values.password.length<8 ){
            error.password = "Password must be 8 characters long"
            const thep = document.createElement('P')
            const textnode = document.createTextNode(error.password)
            document.getElementsByClassName('error')[0].appendChild(thep.appendChild(textnode))
        } 

        return error
    }

    return(
        <div className = {signupcss.container }>
            <div className = {signupcss.content }>
                <header className = 'header'>
                    <img src={logo}></img>
                    <p>Helping you share the moment</p>
                </header>
                <h2>Lets get started!</h2>
                <div className="error">
                    
                </div>
                

                <form onSubmit={handleSubmit}>
                    <label for='name'> First Name </label>
                    <input 
                    id='name' 
                    name='firstName'
                    required 
                    type='text'
                    value={formValues.firstname} 
                    onChange={handleChange}
                    placeholder='First name' />

                    <label for='lname'> Last Name </label>
                    <input 
                    id='lname' 
                    name='lastName'
                    required 
                    type='text' 
                    value={formValues.lastname} 
                    onChange={handleChange}
                    placeholder='Last name' />

                    <label for='username'>Username </label>
                    <input 
                    id='username' 
                    name='username'
                    required 
                    type='text' 
                    value={formValues.username}
                    onChange={handleChange} 
                    placeholder='Username' />

                    <label for='password'>Password </label>
                    <input 
                    id='password' 
                    name='password'
                    required 
                    type='password' 
                    value={formValues.password}
                    onChange={handleChange} 
                    placeholder='Password' />

                    <div className={signupcss.agree}>
                        <input type='checkbox' ></input>
                        <span className="span"> I accept the <a href='#'>Terms and Conditions</a> & <a href='#'>Privacy Policy</a></span>
                    </div>

                    <button className="button" type='submit'>Create Account</button>
                </form>


                <p>Already have an account? <a href='#'>Login </a></p>
            </div>
        </div>
    )
}

export default Signup;