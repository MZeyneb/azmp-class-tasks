import React from 'react'
import styles from "./index.module.scss"
const Nav = () => {
  return (
    <nav>
        <h1>Quickly.</h1>
        <ul>
          <li>About us</li>
          <li>Products</li>
          <li>Features</li>
          <li>Our Blog</li>
          <li>Downloads</li>

        </ul>

        <div className={styles.btns}>
          <button className={styles.sign}>Sign Up</button>
          <button className={styles.login}>Log In</button>

        </div>
      </nav>
  )
}

export default Nav