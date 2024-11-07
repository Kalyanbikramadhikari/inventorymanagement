
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SignUpForm from '../pages/SignUpForm';
import SignInForm from '../pages/SignInForm';


// react lazy only supports deault export
// const Login = lazy(() => import('../pages/user/authentication/Login'));



const Index = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                < Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/register' element={<SignUpForm/>}/>
                    <Route path='/login' element={<SignInForm/>}/>

                    


                </Routes>
            </Suspense>
        </Router>
    )
}

export default Index