var formdata = new FormData();

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.bluelytics.com.ar/v2/latest")
  .then(response => response.json())
  .then(result =>{
    let element= document.getElementById('elem')
    element.innerHTML = `
    <fieldset>
    <legend class="dolar2" style="text-align:center;">Dolar Blue</legend>
    <p class="dolar">Compra:${result.blue.value_buy}</p>
    <p class="dolar">Venta:${result.blue.value_sell}</p>
</fieldset>
<fieldset>
    <legend class="dolar2" style="text-align:center;">Dolar Oficial</legend>
    <p class="dolar">Compra:${result.oficial.value_buy}</p>
    <p class="dolar">Venta:${result.oficial.value_sell}</p>
</fieldset>
<div class="cajaimp">
<p class="imp">Calculá tu impuesto STEAM<p>
<label>Ingrese precio en pesos: <br></label><input type="number" id="numero1" oninput="impuesto()">
<br>
<label>Total:<br></label><input type="number" id="total">
</div>
 
 
    `
  
    console.log(result)
  })
  .catch(error => console.log('error', error));

  function impuesto(){
   var numero1 = document.getElementById("numero1").value;
   let aux= numero1 * 0.75;
  document.getElementById("total").value = parseInt(numero1) + parseInt(aux);
  
}