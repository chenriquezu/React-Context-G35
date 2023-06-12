import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import MyContext from "./myContexts";
import { useEffect, useState } from "react";


export default function App() {
  const endpoint = "/fotos.json";
  const [gallery, setGallery] = useState([]);
  const [fav, setFav] = useState([]);
  const [heart , setHeart] = useState({});
  const globalState = { gallery , setGallery , fav , setFav , heart , setHeart}

  const getData = async() => {
    const response = await fetch(endpoint);
    const photos = await response.json();
    console.log(photos.photos);
    const arrayPhotos = photos.photos;
    setGallery(prevGallery => [...arrayPhotos]);
    console.log(gallery);
  }
  useEffect(() => {
    getData()
  },[]);

  return (
    <div className="App">
       <MyContext.Provider value = {globalState}>
          <BrowserRouter >
            <Navbar />
            <AppRoutes/>
          </BrowserRouter>
       </MyContext.Provider>
    </div>
  );
}
