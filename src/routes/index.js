// CreatedBY: Kalyan Bikram Adhikari
// CreatedDate: 
// github: https://github.com/Kalyanbikramadhikari



import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SignUpForm from '../pages/SignUpForm';
import SignInForm from '../pages/SignInForm';
import Products from '../pages/Products';
import Inventory from '../pages/Inventory';
import Accounting from '../pages/Accounting';
import Customers from '../pages/Customers';
import ReportAndAnalysis from '../pages/ReportAnalysis';
import Vendors from '../pages/Vendors';
import PrimaryCategory from '../pages/PrimaryCategory';
import SecondaryCategory from '../pages/SecondaryCategory';
import ReturnedAndRefuned from '../pages/Returned';
import Account from '../pages/Account';
import SalesAndOrders from '../pages/Sales';


// react lazy only supports deault export
// const Login = lazy(() => import('../pages/user/authentication/Login'));



const Index = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                < Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/inventory' element={<Inventory />} />
                    <Route path='/vendors' element={<Vendors />} />
                    <Route path='/sales' element={<SalesAndOrders />} />

                    <Route path='/primarycategory' element={<PrimaryCategory />} />
                    <Route path='/secondarycategory' element={<SecondaryCategory />} />
                    <Route path='/returnedandrefunded' element={<ReturnedAndRefuned />} />


                    <Route path='/accounting' element={<Accounting />} />
                    <Route path='/account' element={<Account />} />

                    <Route path='/customers' element={<Customers />} />
                    <Route path='/report-and-analysis' element={<ReportAndAnalysis />} />
                    <Route path='/register' element={<SignUpForm />} />
                    <Route path='/login' element={<SignInForm />} />


                </Routes>
            </Suspense>
        </Router>
    )
}

export default Index