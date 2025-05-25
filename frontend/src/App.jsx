import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './components/services.jsx'
import Product from './components/Product.jsx'
import Layout from './components/Layout.jsx'
import Contact from './components/Contact.jsx'
import Gallery from './components/Gallery.jsx'
import Feature from './components/Feature.jsx'
import OurTeam from './components/OurTeam.jsx'
import Testimonial from './components/Testimonial.jsx'
import Notfound from './components/Notfound.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import DeliveryDashboard from "./components/deliverydashboard.jsx";
import MySalary from './components/mysalary.jsx'
import AdminDashboard from './components/AdminDashboard.jsx'
import WelcomeAdmin from './components/welcomeAdmin.jsx'
import AllUsers from './components/AllUsers.jsx'
import AddMilkType from './components/AddMilkType.jsx'
import GenerateSalaryBill from './components/GenerateSalaryBill.jsx'
import UserDashboard from './components/UserDashboard.jsx'
import ViewCustomer from './components/ViewCustomer.jsx'
import AddViewDailyEntry from './components/AddViewDailyEntry.jsx'
import ManageDeliveryPersonProfile from './components/ManageDeliveryPersonProfile.jsx'
import ViewUserProfile from './components/ViewUserProfile.jsx'
import ViewMilkType from './components/ViewMilkType.jsx'
import ViewDailyEntry from './components/ViewDailyEntry.jsx'
import ViewMonthlyBill from './components/ViewMonthlyBill.jsx'
import AddEnquiry from './components/AddEnquiry.jsx'
import ManageUserProfile from './components/ManageUserProfile.jsx'
import View from './components/View.jsx'
import GenerateMonthlyBill from './components/GenerateMonthlyBill.jsx'
import AllDeliveryBoy from './components/AllDeliveryBoy.jsx'
import ViewEnquiry from './components/ViewEnquiry.jsx'
import ForgetPassword from './components/ForgetPassword.jsx'
import ResetWithOtp from './components/ResetWithOtp.jsx'




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/ser' element={<Services />} />
            <Route path='/per' element={<Home />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/gall' element={<Gallery />} />
            <Route path='/feature' element={<Feature />} />
            <Route path='/team' element={<OurTeam />} />
            <Route path='/tes' element={<Testimonial />} />
            <Route path='/404' element={<Notfound />} />
            <Route path='/log' element={<Login />} />
            {/* <Route path="/deliveryboy" element={<DeliveryDashboard />} /> */}
          </Route>
            
          {/* <Route path="/deliveryboy" element={<DeliveryDashboard />} /> */}
          <Route path="/sal/:id" element={<MySalary />} />
          <Route path="/adminpanel" element={<AdminDashboard/>}>
            <Route path='' element={<WelcomeAdmin/>} />
            <Route path='sign' element={<Signup />} />
            <Route path='allusers' element={<AllUsers/>}/>
            <Route path='milktypes' element={<AddMilkType/>} />
            <Route path="generatesalary" element={<GenerateSalaryBill />} />

            
          </Route>
          <Route path="/user/dashboard" element={<UserDashboard/>} />
          <Route path="/view/customer" element={<ViewCustomer/>} />
          <Route path="/add/view/daily/entry" element={<AddViewDailyEntry/>} />
          <Route path="/manage/profile" element={<ManageDeliveryPersonProfile/>} />

          
           <Route path="/view/user/profile" element={<ViewUserProfile/>} />
            <Route path="/view/milk/type" element={<ViewMilkType/>} />
             <Route path="/view/daily/entry" element={<ViewDailyEntry/>} />
              <Route path="/view/monthly/bill" element={<ViewMonthlyBill/>} />
               <Route path="/add/enquiry" element={<AddEnquiry/>} />
                <Route path="/manage" element={<ManageUserProfile/>} />
                 <Route path="/view" element={<View/>} />  
                   <Route path="/admin" element={<GenerateMonthlyBill/>} />
                    <Route path="/adminpanel/alldeliveres" element={<AllDeliveryBoy/>} />
                    <Route path="/brand" element={<ViewEnquiry/>} />
                      <Route path="/forget/password" element={<ForgetPassword/>} />
                        <Route path="/resetpassword" element={<ResetWithOtp/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
