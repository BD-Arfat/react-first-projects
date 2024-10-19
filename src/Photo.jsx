import "./Photo.css";
const Photo = ({ photo }) => {
  return (
    <div>
      <div className="card">
        <img src={photo.url} alt="" />
        <h2 className="title">{photo.title}</h2>
      </div>
    </div>
  );
};

export default Photo;
