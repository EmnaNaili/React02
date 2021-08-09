import './style.css';
import './App.css';
import image from "./image.jpg";
import vid from "./vid.mp4";

function App() {
  return (
    <div>
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">Emna Naili</h1>

      </div>
        <br />
        <img src={image} ></img>
        <br />
        <img src="imageInPublic.jpeg" />
        <br></br>
      <video width={320} height={240} controls>
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );


}


export default App;
