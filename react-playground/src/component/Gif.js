import React, { Component } from 'react';
import PropsTypes from 'prop-types'

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: "" //empieza como null
    }
  }
  /* es comun tener un */
/* apiCall(url,handler){ //handler: consecuencia
    fetch(url)
      .then(response => response.json())
      .then(data => handler(data))
      .catch(error => console.log(error))
  }  */
  componentDidMount(){
    console.log('me monté ! ')
   let url= "https://api.giphy.com/v1/gifs/random?api_key=VqmRderzcAPvjRetexnEKFenLiqEhWxf&tag=&rating=g"
    fetch("https://api.giphy.com/v1/gifs/random?api_key=VqmRderzcAPvjRetexnEKFenLiqEhWxf&tag=&rating=g")
    .then(response => response.json())
    .then(data =>  this.setState({
      gif: data.data.orginal
    }))
    .catch(error => console.log(error))
   /*  this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=VqmRderzcAPvjRetexnEKFenLiqEhWxf&tag=&rating=g", this.mostrarGif) */
  }
  /* mostrarGif = (data)=>{
   
    this.setState({
      gif: data.data.image_url
      
    })
    
  } */ 
  componentDidUpdate(){
    console.log('me actualice :) ');
   
  }
  render() {
    console.log("renderizo:")
    let contenido;
    if(this.state.gif == ""){
      contenido = "cargando";
    }else {
      contenido =  <img src={this.state.gif}/>
    }
    return (
      <div>
       {contenido} {/* variable */}
        <button> Random gif</button>
      </div>
     
    )
  } 
}

export default Gif //siempre tiene que ser exportado 
