import asiko from '../../Images/logo/Asiko.svg'
import home from '../../Images/logo/home.svg'
import profile from '../../Images/logo/profile-circle.png'
import notification from '../../Images/logo/notification.png'
import addpost from '../../Images/Frame 159.png'
// import './styleses.css'
import { useState } from 'react'
import Modal from "react-modal";



const Navbar = () => {
    return(
       <nav>
           <img src={asiko}/>
           <div className='navsection'>
                <img src={home}/>
                <img src={profile}/>
                <img src={notification}/>
                <div className='addpost'><img id="#addimg" src={addpost} /></div>
           </div>
       </nav>
    )
}

export default Navbar