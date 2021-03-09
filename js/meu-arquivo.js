function Pedido(){
   estado = (document.verificar.estado.value);
   cidade = (document.verificar.cidade.value);
   if (document.verificar.cidade.value == "") {
      alert ("Por favor, informe sua cidade!")
   }
   else {
      alert("Congratulations!! " + cidade + "-" + estado + " possui o Fast-Travel liberado")
      document.getElementById("pedido2").style.display = "block"
   }
   
}
