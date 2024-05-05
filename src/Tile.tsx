import "./App.css";
import { PhotoData } from "./interfaces";

export default function Tile({
  data,
  handleDataUpdate,
}: {
  data: PhotoData;
  handleDataUpdate: VoidFunction;
}) {
  return (
    <div className="tile tile-photo" onClick={handleDataUpdate}>
      <img src={data.urls.thumb} alt={data.alt_description} />
      <div className="overlay"></div>
      <div className="photo-description">
        <p>Author: {data.user.name}</p>
        <p>Views: {data.views} </p>
        <p>Likes: {data.likes} </p>
      </div>
    </div>
  );
}
