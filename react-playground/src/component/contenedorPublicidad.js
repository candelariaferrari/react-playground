function ContenedorPublicidad(props) {
  return (
    <div>
     <p>inicio espacio publicitario</p> 
     {props.children}
     <p>fin espacio publicitario</p>
    </div>

  );
}


export default ContenedorPublicidad; //siempre tiene que ser exportado 