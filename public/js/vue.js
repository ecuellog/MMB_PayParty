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
        <button type='button' onclick='window.location.href="/english"' class='global-font button-pink btn-lg button-font'> English </button>
        <button type='button' onclick='window.location.href="/spanish"' class='global-font button-pink btn-lg button-font'> Español </button>
      </div>
      <div id='countdown' class='global-font btn-div'></div>
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
          El costo por persona para la fiesta es $116 dolares USD. Tambien esta la opcion de devolverse en el bus de fiestas al hotel, en lo cual costara $77 USD. Puedes ver
          mas informacion sobre la fiesta <a href='#'>aqui</a>.
        </p>
        <p class='global-font'> Se puede pagar por paypal haciendo click en "Pay Now" abajo o puedes enviar una transaccion Interac e-transfer al siguiente email
          ecuellog@gmail.com. <br><br>Para anadirte a la lista de invitados, selecciona la fiesta que quieras asistir, ingresa tu nombre y completa la transaccion. Despues de que la transaccion se verifique, tu nombre aparecera en la lista de invitados.
        </p>
      </div>
    </div>
  `
});

new Vue({
  el: '#english',
  template: `
    <div class='container-fluid'>
      <div id='navigation-bar'></div>
      <div id='countdown' class='global-font btn-div'></div>
      <div class='party-info'>
        <p class='global-font'>
          The countdown to the best bacherlor/bacherlorette party of the year at Punta Cana has started! Join Maria or Martin and have an expectacular night on November 12, 2017. There are two options to choose from so read carefully and make your choice.
        </p>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <h2 class='global-font'> Man Down / Siren</h2>
              <ul>
                <li class='party-features global-font'>Hotel pick-up in Party Bus</li>
                <li class='party-features global-font'>Open bar and live DJ on-board</li>
                <li class='party-features global-font'>Host/Hostess with your group</li>
                <li class='party-features global-font'>Party games</li>
                <li class='party-features global-font'>Latino staff (security, bartender, waiter)</li>
                <li class='party-features global-font'>Group photo Downtown Punta Cana</li>
                <li class='party-features global-font'>Hotel return ride</li>
              </ul>
              <h3 class='global-font text-center'> Cost: $77 USD </h3>
            </div>
            <div class="col-sm-6">
              <h2 class='global-font'> Mamitas / Cowgirl</h2>
              <ul>
                <li class='party-features global-font'>Hotel pick-up in Party Bus</li>
                <li class='party-features global-font'>Open bar and live DJ on-board</li>
                <li class='party-features global-font'>Host/Hostess with your group</li>
                <li class='party-features global-font'> Striptease show on-board</li>
                <li class='party-features global-font'>Party games</li>
                <li class='party-features global-font'>Latino staff (security, bartender, waiter)</li>
                <li class='party-features global-font'>Group photo Downtown Punta Cana</li>
                <li class='party-features global-font'> ORO nightclub at Hard Rock Hotel & Casino / CONGO bar (VIP, No cover charge, reserved table)</li>
                <li class='party-features global-font'>Hotel return ride</li>
              </ul>
              <h3 class='global-font text-center'> Cost: $116 USD </h3>
            </div>
          </div>
        </div>
        <p class='global-font'>
          The bacherlor and bacherlorette party buses will be separate but will reunite at the end of the night. You can check out more info about the party <a href='#'>here</a>
        </p>
        <hr class='hr-index'>
        <p class='global-font'> 
          To attend the party, fill out your information and pay through PayPal by clicking the "Pay Now" button below. <br> You can also send an interac transfer to <b>ecuellog@gmail.com</b> but you must also fill out your information so your name gets added to the list.
        </p>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-6'>
              <h2 class='global-font text-center'> PayPal </h2>
              <div id='paypal-btn' class='text-center'></div>
            </div>
            <div class='col-sm-6'>
              <h2 class='global-font text-center'> Interac E-transfer </h2>
              <form method='POST' id='interac-english' action='/newattend' onsubmit='return validateForm("interac", "english")' class='global-font'>
                First Name:
                <input class='font-black' type='text' name='firstname'><br>
                Last Name:
                <input class='font-black' type='text' name='lastname'><br><br>
                <input id='sessionID' name='sessionID' type='text' value='hello'>
                Which party are you attending?<br>
                <select class='font-black' name="party"> 
                  <option value="bacherlor"> Bacherlor </option>
                  <option value="bacherlorette"> Bacherlorette </option>
                </select><br>
                Select your party package<br>
                <select class='font-black' name="party_package">
                  <option value="Siren/Man Down"> Siren/Man Down ($77) </option>
                  <option value="Cowgirl/Mamitas" selected> Cowgirl/Mamitas ($116) </option>
                </select>
                <input class='font-black' type='submit' value='Submit'>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
});

/* Components */

new Vue({
  el: '#paypal-btn',
  template:`
    <div id='payButton'>
      <form id='paypal-english' action="https://www.paypal.com/cgi-bin/webscr" onsubmit="return submitPaypal('english')" method="post" target="_top" class='global-font'>
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="NYYQB6PGDZ2KA">
        First Name:
        <input class='font-black' type='text' name='firstname'><br>
        Last Name:
        <input class='font-black' type='text' name='lastname'><br><br>
        <input id='sessionID' name='sessionID' type='hidden'>
        Which party are you attending?<br>
        <select class='font-black' name="party"> 
          <option value="bacherlor"> Bacherlor </option>
          <option value="bacherlorette"> Bacherlorette </option>
        </select><br>
        <table>
        <tr><td><input type="hidden" name="on0" value="Party Option">Select your party package</td></tr><tr><td><select name="os0" class='font-black'>
          <option value="Siren/Man Down">Siren/Man Down $77.00 USD</option>
          <option value="Cowgirl/Mamitas">Cowgirl/Mamitas $116.00 USD</option>
        </select> </td></tr>
        </table>
        <input type="hidden" name="currency_code" value="USD">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
      </form>
    </div>

  `
})

new Vue({
  el: '#navigation-bar',
  template: `
    <div>
      <ul class='nav-bar'>
        <li class='nav-bar'><a class="global-font nav-link" href="/"> Home </a></li>
        <li class='nav-bar'><a class="global-font nav-link f-right" href="/english"> English </a></li>
        <li class='nav-bar'><a class="global-font nav-link f-right" href="/spanish"> Español </a></li>
      </ul>
    </div>
  `
})


/* Functions */
//Set sessionID from cookie into input fields

// Set the date we're counting down to
var countDownDate = new Date("Nov 12, 2017 18:37:25").getTime();

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
    document.getElementById("countdown").innerHTML = "The time is HERE!";
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

