
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../src/styles/login.module.css'; 
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import React from 'react';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    //   'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    // ),
});

const initialValues = {
  email: '',
  password: '',
};

const Login= () => {
  const navigate = useNavigate();
  const handleSubmit = async(values,{ resetForm }) => {
    localStorage.setItem("user", JSON.stringify(values))
    navigate("/") 
    //  resetForm();
    
   
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.mainContainer}>
    <div className={styles.container}>
      <div className={styles.heading}style={{textAlign:"center",paddingBottom:"1rem "}}><h1 >Login</h1></div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form >
           

            <div className={styles.group}>
              <label htmlFor="email">Email :</label>
              <Field type="email" id="email" name="email"placeholder="Enter Your Email" /><br />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>

              

       <div className={styles.group}>
      <label htmlFor="password">Password:</label>
      <div style={{ position: 'relative' }}>
        <Field
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          placeholder="Enter Your Password"
        />
        
        <span style={{ position: 'absolute',right: '1rem', top: '30%', cursor: 'pointer'}} onClick={togglePasswordVisibility} >
        {showPassword ? <i class="fa-solid fa-eye-slash" style={{color:"blue",fontSize:"1.5rem"}}></i> : <i class="fa-solid fa-eye" style={{color:"blue",fontSize:"1.5rem"}}></i>}
      </span>
        
      </div>
      <ErrorMessage name="password" component="div" className={styles.error} />
    </div>

            <button type="submit" className={styles.button}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default Login;
             
              // transform: 'translateY(-50%)' 
            //   <div className={styles.group}>
            //   <label htmlFor="name">Name :</label>
            //   <Field type="text" id="name" name="name" placeholder="Enter Your Name" /><br />
            //   <ErrorMessage name="name" component="div" className={styles.error} />
            // </div>

       