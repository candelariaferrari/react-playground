import React from 'react';
import './assets/css/App.css';
import './assets/css/myStyle.css';
import ContenedorPublicidad from './component/contenedorPublicidad';
import PageContent from './component/PageContent';
import Navigation from './component/Navigation';
import VariosGif from './component/VariosGif';
function App() {
  return (
    <React.Fragment>
      <div className="App" id="wrapper">
      <Navigation/>
      ]<VariosGif/>
      <ContenedorPublicidad>
        <h2>publicidad 1 que puede ser una img </h2>
      </ContenedorPublicidad>
      <PageContent/>
      <ContenedorPublicidad>
        <h2>publicidad 2 que puede ser una video</h2>
      </ContenedorPublicidad> 
      </div>
      
    </React.Fragment>
  );
}

export default App;
