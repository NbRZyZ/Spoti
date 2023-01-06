import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Search,
  Home,
  Createplaylist,
  Sidebar,
  Songs,
  DataProvider,
  Login,
  Signup,
  Songlist
} from "./components";


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <div className="Container">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/search" element={<Search />} />
              <Route path="/album">
                <Route path=":id" element={<Songs />} />
              </Route>
              <Route path="/createplaylist" element={<Createplaylist />} />
              <Route path="songlist" element={<Songlist/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
