import styles from "../styles/Songlist.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export const Songlist = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [lists, setLists] = useState([]);
  const { id } = useParams();

  const addToPlaylist = (songId) => {
    console.log(songId, params.id);
    axios
      .put(`https://playlistup.onrender.com/playlists/${params.id}`, {
        id: songId,
      })
      .then(() => {
        axios
          .get("https://playlistup.onrender.com/playlists/" + params.id)
          .then((res) => {
            setData(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };
  useEffect(() => {
    axios.get("https://playlistup.onrender.com/songs").then((res) => {
      setLists(res.data);
    });
  });

  return (
    <div>
      <div>
        <h1>PlaylistName:{id}</h1>
        <h3>Playlist Songs:</h3>
        {data &&
          data[0].songs.map((item, index) => {
            console.log(item);
          })}
      </div>
      <h1>Songs:</h1>
      {lists.map((item) => {
        return (
          <div className={styles.songcont}>
            <button
              className={styles.btn}
              onClick={() => addToPlaylist(item._id)}
            >
              add song
            </button>
            <h1 className={styles.h1}>Name : {item.name}</h1>
            <h1 className={styles.h1}>Artist: {item.artist}</h1>
          </div>
        );
      })}
    </div>
  );
};
