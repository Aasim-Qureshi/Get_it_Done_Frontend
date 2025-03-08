import React from 'react';
import { Link } from 'react-router'

import styles from './SignupDetails.module.css'

const SignUpDetails = ({ formData, handleChange, handleSubmit, error }) => {

  return (
    <div className={styles.mainContainer}>

      <div className={styles.formContainer} >

        <h2 className={styles.header} >Sign Up</h2>

        <div>
          <p className={styles.label} >Email</p>
          <input className={styles.inputBox} name='email' type='email' required value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <p className={styles.label} >Username</p>
          <input className={styles.inputBox} name='username' value={formData.username} onChange={handleChange} />
        </div>

        <div>
          <p className={styles.label}>Password</p>
          <input className={styles.inputBox} type='password' name='password' value={formData.password} onChange={handleChange} />
        </div>

        <div>
          <p className={styles.label}>Confirm Password</p>
          <input className={styles.inputBox} type='password' name='confirm' value={formData.confirm} onChange={handleChange} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>

        <button className={styles.button} onClick={handleSubmit} >Sign Up</button>

        <p>Already have an account? <Link to={"/login"} >Log In</Link> </p>
      </div>
      <div className={styles.imageContainer} >
          <img className={styles.sideImage} alt='' src='/time-management.jpg'/>
      </div>
    </div>
  )
}

export default SignUpDetails;