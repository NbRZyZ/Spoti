import { useState } from "react";
import { useNavigate,NavLink} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "../styles/signup.module.css";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit =  (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigate("/");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
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
                                Log in
                            </button>
                            </div>
                        </form>
                        <br></br>
                        <div className={styles.line}></div>
                        <br></br>
                        <p className={styles.p}>
                            Already have an account? 
                        </p>
                        <button className={styles.footbutton}><NavLink to="/signup">SIGN UP FOR SPOTIFY</NavLink></button>
                    </div>
                </div>
            </section>
        </main>
    )
}