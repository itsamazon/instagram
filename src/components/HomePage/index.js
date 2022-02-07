import Navbar from "../Navbar";
// import './home.css'
import like from '../../Images/logo/like.svg'
import testimage from '../../Images/unsplash_RNiBLy7aHck.svg'
import UploadModal from "../Modal";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const Home = () => {
    const [username, setUsername] = useState("")
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("asiko-app-auth"));
        // token ? setUsername(token.username): ""
    }, [])

    // return(
    //     <div>
    //         <Navbar />
    //     </div>
    // )
    return (
        <div>
            <Navbar />
            <div className='containedr'>
                    <div className='cards'>
                        <section className='userdetails'>
                            <section className='username'>
                                <h5>{username && username} {console.log(username)}</h5>
                                <p>@fransisca</p>
                            </section>
                        </section>
                        <img src={testimage}/>
                        <section className='photodetails'> 
                            <p>this is a caption</p>
                            <div className='likes'>
                                <p>2</p>
                                <img src={like} />
                            </div>
                        </section>
                    </div>

                    <div className='cards'>
                        <section className='userdetails'>

                            <section className='username'>
                                <h5>{username && username} {console.log(username)}</h5>
                            </section>
                        </section>
                        <img src={testimage}/>
                        <section className='photodetails'> 
                            <div>
                                <p id='uniqueuser'>fransisca</p>
                                <p id='usercaption'>this is a caption</p>
                            </div>
                            
                            <div className='likes'>
                                <p>2</p>
                                <img src={like} />
                            </div>
                        </section>
                    </div>

                    <div className='cards'>
                        <section className='userdetails'>
                            <section className='username'>
                                <h5>{username && username} {console.log(username)}</h5>
                                <p>@fransisca</p>
                            </section>
                        </section>
                        <img src={testimage}/>
                        <section className='photodetails'> 
                            <p>this is a caption</p>
                            <div className='likes'>
                                <p>2</p>
                                <img src={like} />
                            </div>
                        </section>
                    </div>

                    <div className='cards'>
                        <section className='userdetails'>
                            <section className='username'>
                                <h5>{username && username} {console.log(username)}</h5>
                                <p>@fransisca</p>
                            </section>
                        </section>
                        <img src={testimage}/>
                        <section className='photodetails'> 
                            <p>this is a caption</p>
                            <div className='likes'>
                                <p>2</p>
                                <img src={like} />
                            </div>
                        </section>
                    </div>
                    
                </div>

        </div>
    )
}

export default Home