import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CLIENT_ID = "99423ca93fd9444d8d155ffd1899f245";
const CLIENT_SECRET = "6026f1a160dc418ea542296ef79d640b";
const baseUrl = "https://accounts.spotify.com/api/token";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [artist, setArtist] = useState([]);
  const [pressed, setPressed] = useState(false);
  const [artistName, setArtistName] = useState("");
  const [album, setAlbum] = useState("");
  const [list, setList] = useState([]);
  const [create, setCreate] = useState(false);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch(baseUrl, authParameters)
      .then((result) => result.json())
      .then((data) => {
        setAccessToken(data.access_token);
        console.log(data.access_token);
      })
      .catch((err) => {
        console.log(err);
      });

      axios.get('https://playlistup.onrender.com/playlists')
        .then((res)=>{
          setList(res.data)
        })
      axios.get('https://playlistup.onrender.com/songs')
        .then((res)=>{
          setSongs(res.data)
        })


  }, []);

  async function search() {
    console.log("Search for " + searchInput);

    var searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Artist ID " + artistID);

    var Profile = await fetch(
      "https://api.spotify.com/v1/artists/" + artistID,
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        setArtist(data);
        setArtistName(searchInput);
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });

    var returnedAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album,single&market=US&limit=50",
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        console.log(data);
        setAlbum(data);
        setAlbums(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <DataContext.Provider
      value={{
        searchInput,
        accessToken,
        albums,
        artist,
        pressed,
        setSearchInput,
        setPressed,
        search,
        artistName,
        album,
        list,
        create,
        setCreate,
        songs,
        setList,  
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};