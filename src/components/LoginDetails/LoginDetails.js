import React from 'react'
import styles from './LoginDetails.module.css'

const LoginDetails = ({ formData, handleChange, handleSubmit, error }) => {
  return (
    <div className={styles.mainContainer} >
      <div className={styles.formContainer} >
        <h3 className={styles.header} >Log In</h3>

        <div>
          <p className={styles.label} >Email: </p>
          <input className={styles.inputBox} name='email' value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <p className={styles.label}>Password: </p>

          <input className={styles.inputBox} name='password' value={formData.password} onChange={handleChange} />
        </div>

        {error && <p style={{color: "red"}} >{error}</p> }
        <button className={styles.button} onClick={handleSubmit} >Log In</button>
      </div>

      <div className={styles.imageContainer} >
        <img className={styles.sideImage} alt='Nothing' src='/time-management.jpg' />
      </div>

    </div>
  )
}

export default LoginDetails;