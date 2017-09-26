//import Vue from 'vue';
//import App from '../views/index.vue'

var app = new Vue({
  el: '#app',
  data: {
    name: 'Edgardo'
  }
});

/* Views */
new Vue({
  el: '#welcome',
  template: `
    <div class='container-fluid'>
      <div id='welcome'>
      	<h1 class='global-font text-center transparent embossed-text'> We<span id='offset'>l</span>come! </h1>
        <hr class='hr-index'> 
        <h1 class='global-font text-center transparent embossed-text'> Bienve<span id='offset'>n</span>ido! </h1>
      </div>
      <div class='btn-div'>
		    <button type='button' class='global-font button-pink btn-lg button-font'> English </button>
        <button type='button' onclick='window.location.href="/spanish"' class='global-font button-pink btn-lg button-font'> Español </button>
      </div>
      <div id='countdown' class='global-font btn-div'>
      </div>
    </div>
  `
});

new Vue({
  el: '#spanish',
  template: `
    <div class='container-fluid'>
      <div id='countdown' class='global-font btn-div'></div>
      <div class='party-info'>
        <p class='global-font'>
          Ha empezado la cuenta regresiva para la mejor fiesta del año en Punta Cana. Habran dos fiestas, una para las chicas y otra para los chicos.
          La fiesta saldra en $116 dolares USD. Tambien esta la opcion de devolverse en el bus de fiestas al hotel, en lo cual costara $77 USD. Puedes ver
          mas informacion sobre la fiesta <a href='#'>aqui</a>. Nuestro paquete es el blah blah.
        </p>
        <p class='global-font'> Se puede pagar por paypal haciendo click en "Pay Now" abajo o puedes enviar una transaccion Interac e-transfer al siguiente email
          ecuellog@gmail.com.
      </div>
    </div>
  `
});

new Vue({
  el: '#english',
  template: `
    <div class='container-fluid'>
      <h1> English View </h1>
    </div>
  `
});

new Vue({
  el: '#paypal-btn',
  template:`
    <div id='payButton'>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="YYESS7W4T8U32">
        <table>
        <tr><td><input type="hidden" name="on0" value="Options">Options</td></tr><tr><td><select name="os0">
          <option value="Full Party">Full Party $116.00 USD</option>
          <option value="Bus Only">Bus Only $77.00 USD</option>
        </select> </td></tr>
        </table>
        <input type="hidden" name="currency_code" value="USD">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
      </form>
    </div>

  `
})

/* Components */
/*
 * Components here 
 *
 */

/* Functions */
// Set the date we're counting down to
var countDownDate = new Date("Nov 11, 2017 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
/* 
 * Notes: component.js
 * will include all components
 * just include with script tag within html view.
 */

/* Notes:
*   - Nav bar para cambiar de idioma
*   - Explicacion del lugar
*   - Link for place "chekealo aqui" "Check it out here" click.
*   - Explicar dos opciones
*   - Llenar forma con nombre y ensenar lista de invitados (quien va quien no).
*   - hacer click en una opcion "radio button maybe"
*   - boton de paypal
*   - informacion de interac de papa
*/

