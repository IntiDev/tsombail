function main (){
  const calcular = ()=>{
    let suma= 0;
    const totalProducto=0;
    const cantidadInput=document.getElementsByClassName("cantidadInput");
    const precios= document.getElementsByClassName('precio');
    for(let i= 0 ; i<cantidadInput.length; i++){
      // console.log(cantidadInput[i].value)
      // console.log(parseFloat(precios[i].textContent))
      const totalProducto = cantidadInput[i].value * parseFloat(precios[i].textContent);
       suma +=totalProducto;
      // console.log(totalProducto)

    }
    const spanTotal = document.getElementById('total');
    spanTotal.innerHTML=  suma;

  }
  const btnCalcular= document.getElementById('calcular');
  btnCalcular.addEventListener("click", calcular);


}
main();
