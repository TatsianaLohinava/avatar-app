import { useState } from "react";
import "./App.css";
import Tile from "./Tile";
import NewPhoto from "./NewPhoto";
import { API_URL } from "./data";
import { PhotoData } from "./interfaces";
import TileUpdater from "./TileUpdater";

function App() {
  const [photoBase, setPhotoBase] = useState<PhotoData[]>([]);

  const fetchPhoto = async (): Promise<PhotoData> => {
    try {
      const response = await fetch(API_URL);
      const [json] = await response.json();
      return json;
    } catch (error) {
      throw error;
    }
  };

  const addNewPhoto = async () => {
    const photo = await fetchPhoto();
    setPhotoBase([...photoBase, photo]);
  };

  const updatePhoto = async (index: number) => {
    const photo = await fetchPhoto();
    setPhotoBase([
      ...photoBase.slice(0, index),
      photo,
      ...photoBase.slice(index + 1),
    ]);
  };

  const updateAll = async () => {
    const newBase = await Promise.all(
      photoBase.map(async () => await fetchPhoto())
    );
    setPhotoBase(newBase);
  };

  return (
    <div className="App">
      <div className="tile-container">
        {photoBase.map((item, index) => (
          <Tile
            data={item}
            handleDataUpdate={() => updatePhoto(index)}
            key={item.id}
          />
        ))}
        <NewPhoto handleClick={addNewPhoto} />
      </div>
      <TileUpdater handleClick={updateAll} />
    </div>
  );
}

export default App;
