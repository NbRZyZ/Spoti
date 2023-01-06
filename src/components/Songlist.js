import styles from "../styles/Songlist.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export const Songlist = () =>{
    const [lists, setLists] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/songs").then((res) => {
          setLists(res.data);
        });
      });
    return(
         <div>
            {lists.map((item) => {
          return (
              <div className={styles.songcont}>
                <h1 className={styles.h1}>Name : {item.name}</h1>
                <h1 className={styles.h1}>Artist: {item.artist}</h1>
              </div>
          );
        })}
         </div>
    )
}
