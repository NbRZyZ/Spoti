import styles from "../styles/createplaylist.module.css";
import { useState } from "react";
export const Createplaylist = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
        <button className={styles.tog} onClick={() => setToggle(!toggle)}>
          Create playlist
        </button>
      <div className={styles.bcontainer}>
        {toggle && (
          <div className={styles.container}>
            <h4 className={styles.text}>Create playlist</h4>
            <input
              className={styles.input}
              type="text"
              placeholder="Title"
            ></input>
            <br></br>
            <button className={styles.button}>create</button>
          </div>
        )}
      </div>
    </div>
  );
};
