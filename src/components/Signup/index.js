import { Link } from "react-router-dom"
import  instagramlogo from '../../Images/Instagram Logo undefined.svg'
import './styles.css'
import { useState,useEffect} from 'react';

const Signup = () => {
    const initialValue = {firstname:"",lastname:"",username:"",password:""};
    const [formValues,setFormValues] = useState(initialValue);
    const [formError, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)

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
            console.log(formValues)
        }
    },[formError])

    const validate = (values) => {
        const error = {}
        
        if(!values.firstname){
            error.firstname = "First name is required!"
        }
        if(!values.lastname){
            error.lastname = "Last name is required!"
        }
        if(!values.username){
            error.username = "User name is required!"
        }

        if(!values.password){
            error.password = "Password is required!";
        }else if(values.password.length<8 ){
            error.password = "Password must be 8 characters long"
        }

        return error
    }

    return(
        <div className = 'signup' >
                <pre>{JSON.stringify(formValues,undefined,2)}</pre>
            <div className = 'container'>
                <header className = 'header'>
                    <img src={instagramlogo}></img>
                    <p>Helping you share the moment</p>
                </header>
                <h2>Lets get started!</h2>
                <form onSubmit={handleSubmit}>
                    <label for='name'> First Name </label>
                    <input 
                    id='name' 
                    name='firstname'
                    // required 
                    type='text'
                    value={formValues.firstname} 
                    onChange={handleChange}
                    placeholder='First name' />
                    <p id={formError.firstname == undefined ? "noerror": 'error'}>{'*' + formError.firstname}</p>

                    <label for='lname'> Last Name </label>
                    <input 
                    id='lname' 
                    name='lastname'
                    // required 
                    type='text' 
                    value={formValues.lastname} 
                    onChange={handleChange}
                    placeholder='Last name' />
                    <p id = {formError.lastname == undefined ? "noerror": 'error'}>{'*' + formError.lastname}</p>

                    <label for='username'>Username </label>
                    <input 
                    id='username' 
                    name='username'
                    // required 
                    type='text' 
                    value={formValues.username}
                    onChange={handleChange} 
                    placeholder='Username' />
                    <p id={formError.username == undefined ? "noerror": 'error'}>{'*' + formError.username}</p>

                    <label for='password'>Password </label>
                    <input 
                    id='password' 
                    // required 
                    name='password'
                    type='password' 
                    value={formValues.password} 
                    onChange={handleChange}
                    placeholder='Password'/>
                    <p id= {formError.password == undefined ? "noerror": 'error'}>{ '*' + formError.password}</p>

                    <div>
                    <input type='checkbox' ></input>
                    <span> I accept the <a href='#'>Terms and Conditions</a> & <a href='#'>Privacy Policy</a></span>
                    </div>
                    <button type='submit'>Create Account</button>
                </form>
                <p>Already have an account? <a href='#'>Login </a></p>
            </div>
        </div>
    )
}

export default Signup;