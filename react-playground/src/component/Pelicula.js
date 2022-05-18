import React, {Component} from 'react';
import PropsTypes from 'prop-types';

//siempre tiene que tener una funcion con el nombre del componente 
function Pelicula(props) {
  //variable 
  //let rating = 5.8;
  let generos = ["action", "drama"];

  //si una peli no tiene generos 
  let listadoDeGeneros;
  if (props.generos != null) {
    listadoDeGeneros =
      <ul>
        {
          generos.map((genero, i) =>
            <li key={genero + i}>
              este es el genero de  {genero}
            </li>)
        }
      </ul>
  }else {
    listadoDeGeneros = "";
  }
  return (
    //en un componente solo puedo terminar con una sola etiqueta , no puedo tener muchas sueltas 
    <div>
      <h2>
        titulo de pelicula {props.titulo}
      </h2>
      <p>no podria solo tener el h2 y la p , deben estar dentro de un div </p>
      <h3> rating {props.rating}</h3>
      <p>en vez de usar for usamos map en react </p>
      {listadoDeGeneros}
      {/*  <ul>
        {
          generos.map((genero, i) =>
            <li key={genero + i}>
              este es el genero de  {genero}
            </li>)
        }
      </ul> */}
    </div>

  );
}

/* COMPONENTE
class Pelicula extends Component {
  render(){
      return(
          <img src="../" alt=""/>
      )
  }
} */

Pelicula.defaultProps = { //si no me dan el rating decimos que : 
  rating: "No tiene rating todavia  ",
  generos: null,
}
Pelicula.PropsTypes = {
  rating: PropsTypes.number,
  titulo: PropsTypes.string
}
export default Pelicula //siempre tiene que ser exportado 
