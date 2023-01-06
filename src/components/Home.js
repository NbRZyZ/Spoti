import styles from "../styles/Home.module.css";
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase"

export const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate('/signup');
                console.log('Signed out successfully');
            })
            .catch((error) => {
                // An error happened
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {
                setUser(user)
                
                const uid = user.uid;
                console.log(uid);
            } else {
                console.log('user is logged out');
            }
        })
    }, []);
    return (
        <div>
    <div className={styles.navbar}>
     <div className={styles.dropdown}>
            <button className={styles.dropbtn}>{user && <p className={styles.p}>{user.email}</p>}
            </button>
         <div className={styles.dropdownContent}>
             <a to="#">Account</a>
             <a to="#">Profile</a>
             <NavLink to="signup">Logout</NavLink>
         </div>
        </div> 
    </div>
        </div>
    )
}
