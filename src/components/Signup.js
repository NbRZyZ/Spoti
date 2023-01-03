import styles from "../styles/signup.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase"; 


export const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit =  (e) => {
        e.preventDefault();

         createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Sign Up
                const user = userCredential.user;
                console.log(user);
                navigate("/login");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            })
    }
    return (
        <main>
            <section>
                <div className={styles.bcontainer}>
                    <div className={styles.container}>
                        <h3 className={styles.title}> Sign up with your email address </h3>
                        <form>
                            <div className={styles.ep}>
                            <p>Email address</p>
                                <input className={styles.input}
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email"
                                />
                            </div>

                            <div className={styles.ep}>
                                <p>Password</p>
                                <input className={styles.input}
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                />
                            </div>
                            <p>Forgot your password</p>
                            <div className={styles.butdiv}>
                            <input type="checkbox" className={styles.checkbox}></input>
                            <p className={styles.bp}>Remember me</p>
                            <button className={styles.button} type="submit" onClick={onSubmit}>
                                Sign up
                            </button>
                            </div>
                        </form>
                        <br></br>
                        <div className={styles.line}></div>
                        <br></br>
                        <p className={styles.p}>
                            Already have an account? 
                        </p>
                        <button className={styles.footbutton}><NavLink to="/login">LOG IN FOR SPOTIFY</NavLink></button>
                    </div>
                </div>
            </section>
        </main>
    )
}