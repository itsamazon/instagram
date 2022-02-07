import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Images/logo/Asiko.svg';
import landingcss from './landing.module.css'


const LandingPage = () => {
  let navigate = useNavigate();
  return (
    <div className={landingcss.container}>
      <div className={landingcss.content}>
        <header className={landingcss.header}>
          <img src={Logo} alt="Asiko" className="logo" />
          <p className="wlcm-msg">Helping you share the moment</p>
        </header>
        <div className={landingcss.acct}>
          <button className='button'
            onClick={() => {
              navigate('/signup');
            }}
          >
            Create Account
          </button>
          <p>
            Already have an account?
            <span
              style={{color: '#006ECF',marginLeft:'5px'}}
              onClick={() => {
                navigate('/login');
              }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;