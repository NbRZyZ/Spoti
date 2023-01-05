import styles from "../styles/createplaylist.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Createplaylist = () => {
  const [title, setTitle] = useState(" ");
  const [desc, setDesc] = useState("");
  const [toggle, setToggle] = useState(false);
  const [lists, setLists] = useState([]);
  const nav = useNavigate();
  const addList = () => {
    axios
      .post("http://localhost:8000/playlists", {
        title: title,
        description: desc,
      })
      .then((res) => {
        console.log(res.data);
        nav("/Createplaylist");
      });
    setToggle(false);
  };
  useEffect(() => {
    axios.get("http://localhost:8000/playlists").then((res) => {
      setLists(res.data);
    });
  });
  const DeleteList = (id) =>{
    console.log(id)
    axios.delete('http://localhost:8000/playlist/' + id)
      .then(()=>{
        console.log('done')
      })
  }
  
  return (
    <div className={styles.body}>
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
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="description"
              onChange={(e) => setDesc(e.target.value)}
            />
            <br></br>
            <button onClick={addList} className={styles.button}>
              create
            </button>

          </div>
        )}
      </div>
      <div className={styles.talb}>
        {lists.map((item) => {
          return (
            <div className={styles.playlistcont}>
              <h1 className={styles.h1}>Title : {item.title}</h1>
              <h1 className={styles.h1}>Description: {item.description}</h1>
              <button onClick={()=>DeleteList(item._id)} >Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
