import React, { Component } from 'react';
import PropsTypes from 'prop-types'

class Contador extends Component {
 /*  constructor(props){

       super(props);

       this.state = {

          message: "Hacé click para suscribirte y recibir noticias"

       }

   }

   postSubscribe(){

       this.setState({

            message: "Gracias por suscribirte ;)"

       })

   }

   render(){

       return(

           <div>

               <h3 onClick={()=> this.postSubscribe()}>{this.state.message}</h3>

           </div>

       )

   } */
 //para trabajar con el estado siempre tenemos que tener un constructor y un super y state
  constructor(props) {
    super(props);
    this.state = {
      numero: props.inicial
    }
  }
  incrementar() { //actualiza el estado
    this.setState({
      numero: this.state.numero + 1
    })
  }
  decrementar() { //actualiza el estado
    this.setState({
      numero: this.state.numero - 1
    })
  }
  componentDidMount(){
    console.log('me monté ! ')
  }
  componentDidUpdate(){
    console.log('me actualice :) ');
  }
  render() {
    console.log("renderizo:")
    return (
      <div>
        <p> Soy el numero {this.state.numero}</p>
        <button  onClick={()=> this.incrementar()}>Incrementar</button>
        <button  onClick={()=> this.decrementar()}>Decrementar</button>
      </div>
    )
  } 
}

export default Contador //siempre tiene que ser exportado 
