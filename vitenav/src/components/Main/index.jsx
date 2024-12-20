import React from 'react'
import "./index.module.scss"
import styles from "./index.module.scss"
import imge from "../../assets/images/Illustration.png"
const Main = () => {
  return (
    <main>
        <div className={styles.container}>
            <div className="img">
                <img src={imge} alt="" />
            </div>
                <h2>Get your most important
                tasks done in no time</h2>
                <p>Sign up for free and turbocharge your productivity today
                with the world’s best product management platform</p>
                <div className="inp">
                    <input type="text" />
                    <button>Sign Up</button>
                </div>
        </div>
    </main>
  )
}

export default Main