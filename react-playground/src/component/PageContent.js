import Gif from "./Gif";
import Contador from "./Contador";
import Pelicula from "./Pelicula";
import '../assets/css/myStyle.css';
function PageContent() {
  return (
    <div className="container-fluid page">
      <Contador inicial={0}/>
       
      <Gif/>
      <Pelicula/>
    </div>
  );
}

export default PageContent;