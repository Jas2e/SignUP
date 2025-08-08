import React from 'react';
import '../App.css';
import logo from '../assets/logo.png';
import {useForm} from 'react-hook-form';

const Signup = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  
  const onSubmit = (data) => {
    alert(' you Signup successfully!');
    console.log(data);
  }
  const hasErrors = Object.keys(errors).length > 0;
  
  return (
    <>
        {/* left section */}
    <div className="signup-container">
      <section className="l-section">
          <img src={logo} className="logo" alt="Better Market logo" />
          <h1>
             Say hello to global food and beverage<br />
             producers and suppliers, all in one place
          </h1>
      </section>

               {/* Right section */}
      <section className="r-section">
           <h2>Let's get started with a few simple steps</h2>
      
           <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        
               <label htmlFor="email">Email</label>
               <input id="email" type="email" 
                      {...register("email", {
                            required: true
                })} 
                />
      
              <label htmlFor="fullname">Full Name</label>
              <input id="fullname" type="text" 
                       {...register("fullname", { required: true })}/>
              
              <label htmlFor="password">Password</label>
              <input id="password" type="password"
                      {...register("password", {required: true})}/>
      

              <button type="submit">Sign up</button>
        
              {hasErrors && ( <p style={{ color: 'red' }}>Please fill in all required fields.</p>)}
           </form>
      
            <p>By signing up, you agree to our{' '}
               <a href="#" style={{ color: '#bdbdbd' }}>Terms of Service</a>.<br />
                Already have an account?{' '} <a href="#">Log In</a>
            </p>
       </section>
    </div> 
    </>
  );
};

export default Signup;
