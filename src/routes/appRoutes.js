import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Signup from '../components/Signup';
import Login from '../components/Login';
import Home from '../components/HomePage';
import LandingPage from '../components/LandingPage/index'

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
             <Route exact path='/' element = { <LandingPage />}> </Route>
                <Route exact path='/home' element = { <Home />}> </Route>
                <Route exact path='/login' element = { <Login />}> </Route>
                <Route exact path='/signup' element = { <Signup />}> </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes