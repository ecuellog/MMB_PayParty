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
      <div id='navigation-bar'></div>
      <div id='countdown' class='global-font btn-div'></div>
      <div class='party-info'>
        <p class='global-font'>
          El conteo regresivo a empezado para la mejor despedida de soltero/a en Punta Cana! Unete a Marisabel o Martin para pasarla de p*** madre el 12 de Noviembre del 2017. Hay dos paquetes para escoger asi que lee bien y escoge tu opcion.
        </p>
        <div class="container">
          <div class="row padding-bottom-50">
            <div class="col-sm-6">
              <h2 class='global-font'> Despedida de Soltero/a Paquete Basic </h2>
              <ul>
                <li class='party-features global-font'>Recogida en el hotel con el Party Bus</li>
                <li class='party-features global-font'>Barra libre y DJ adentro del bus</li>
                <li class='party-features global-font'>Anfitrion/a con el grupo</li>
                <li class='party-features global-font'>Juegos de fiesta</li>
                <li class='party-features global-font'>Personal latino (seguridad, bartender, mesero/a)</li>
                <li class='party-features global-font'>Foto en grupo en la ciudad</li>
                <li class='party-features global-font'>Paseo de regreso al hotel</li>
              </ul>
              <h3 class='global-font text-center'> Costo: $77 USD </h3>
            </div>
            <div class="col-sm-6">
              <h2 class='global-font'> Despedida de Soltero/a Paquete Plus </h2>
              <ul>
                <li class='party-features global-font'>Recogida en el hotel con el Party Bus</li>
                <li class='party-features global-font'>Barra libre y DJ adentro del bus</li>
                <li class='party-features global-font'>Anfitrion/a con el grupo</li>
                <li class='party-features global-font'>Show de striptease en el bus</li>
                <li class='party-features global-font'>Juegos de fiesta</li>
                <li class='party-features global-font'>Personal latino (seguridad, bartender, mesero/a)</li>
                <li class='party-features global-font'>Foto en grupo en la ciudad</li>
                <li class='party-features global-font'> Discoteca ORO en el Hard Rock Hotel & Casino / CONGO bar (VIP, sin cuota de entrada, mesa reservada)</li>
                <li class='party-features global-font'>Paseo de regreso al hotel</li>
              </ul>
              <h3 class='global-font text-center'> Costo: $116 USD </h3>
            </div>
          </div>
        </div>
        <p class='global-font'>
          Los buses de despedida de soltero y de soltera estaran separados pero se uniran al final de la noche en la discoteca ORO. Chequeate mas informacion sobre los paquetes <a href='#'>aqui</a>.
        </p>
        <hr class='hr-index'>
        <p class='global-font'> 
          Para atender la fiesta, llena tu informacion y paga por paypal haciendo click en el boton "Paga aqui". <br> Tambien puedes transferir el dinero por interac e-transfer al email <b>ecuellog@gmail.com</b> pero tambien debes llenar la forma de Interac para que tu nombre aparezca en la lista.
        </p>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-6'>
              <h2 class='global-font text-center'> PayPal </h2>
              <div id='paypal-btn-spanish' class='text-center'></div>
            </div>
            <div class='col-sm-6'>
              <h2 class='global-font text-center'> Interac E-transfer </h2>
              <form method='POST' id='interac-spanish' action='/newattend' onsubmit='return validateForm("interac", "spanish")' class='global-font interac'>
                Nombre:<br>
                <input class='font-black' type='text' name='firstname'><br>
                Apellido:<br>
                <input class='font-black' type='text' name='lastname'><br><br>
                <input id='sessionID' name='sessionID' type='hidden'>
                Despedida de?<br>
                <select class='font-black' name="party"> 
                  <option value="bacherlor"> Soltero </option>
                  <option value="bacherlorette"> Soltera </option>
                </select><br>
                Elige tu paquete<br>
                <select class='font-black' name="party_package">
                  <option value="Siren/Man Down"> Paquete Basico ($77) </option>
                  <option value="Cowgirl/Mamitas" selected> Paquete Plus ($116) </option>
                </select><br><br>
                <input class='font-black' type='submit' value='Submit'>
              </form>
            </div>
          </div>
        </div>
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
          The countdown to the best bacherlor/bacherlorette party of the year at Punta Cana has started! Join Maria or Martin and have an bitchin' night on November 12, 2017. There are two options to choose from so read carefully and make your choice.
        </p>
        <div class="container">
          <div class="row padding-bottom-50">
            <div class="col-sm-6">
              <h2 class='global-font'> Bacherlor/Bacherlorette Basic Package </h2>
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
              <h2 class='global-font'> Bacherlor/Bacherlorette Plus Package </h2>
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
          The bacherlor and bacherlorette party buses will be separate but will reunite at the end of the night at the ORO nightclub. You can check out more info about the party <a href='#'>here</a>.
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
              <form method='POST' id='interac-english' action='/newattend' onsubmit='return validateForm("interac", "english")' class='global-font interac'>
                First Name:<br>
                <input class='font-black' type='text' name='firstname'><br>
                Last Name:<br>
                <input class='font-black' type='text' name='lastname'><br><br>
                <input id='sessionID' name='sessionID' type='hidden'>
                Which party are you attending?<br>
                <select class='font-black' name="party"> 
                  <option value="bacherlor"> Bacherlor </option>
                  <option value="bacherlorette"> Bacherlorette </option>
                </select><br>
                Select your party package<br>
                <select class='font-black' name="party_package">
                  <option value="Siren/Man Down"> Basic Package ($77) </option>
                  <option value="Cowgirl/Mamitas" selected> Plus Package ($116) </option>
                </select><br><br>
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
          <tr>
            <td>
              <input type="hidden" name="on0" value="Party Option">Select your party package
            </td>
          </tr>
          <tr>
            <td>
              <select name="os0" class='font-black'>
                <option value="Siren/Man Down">Basic $77.00 USD</option>
                <option value="Cowgirl/Mamitas">Plus $116.00 USD</option>
              </select> 
            </td>
          </tr>
        </table>
        <input type="hidden" name="currency_code" value="USD"><br>
        <input type="submit" alt="PayPal - The safer, easier way to pay online!" value="Pay Now" class="font-black">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
      </form>
    </div>

  `
})

new Vue({
  el: '#paypal-btn-spanish',
  template:`
    <div id='payButton'>
      <form id='paypal-spanish' action="https://www.paypal.com/cgi-bin/webscr" onsubmit="return submitPaypal('spanish')" method="post" target="_top" class='global-font'>
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="NYYQB6PGDZ2KA">
        Nombre:
        <input class='font-black' type='text' name='firstname'><br>
        Apellido:
        <input class='font-black' type='text' name='lastname'><br><br>
        <input id='sessionID' name='sessionID' type='hidden'>
        Despedida de?<br>
        <select class='font-black' name="party"> 
          <option value="bacherlor"> Soltero </option>
          <option value="bacherlorette"> Soltera </option>
        </select><br>
        <table>
          <tr>
            <td>
              <input type="hidden" name="on0" value="Party Option">Elige tu paquete
            </td>
          </tr>
          <tr>
            <td>
              <select name="os0" class='font-black'>
                <option value="Siren/Man Down">Basico $77.00 USD</option>
                <option value="Cowgirl/Mamitas">Plus $116.00 USD</option>
              </select> 
            </td>
          </tr>
        </table>
        <input type="hidden" name="currency_code" value="USD"><br>
        <input type="submit" alt="PayPal - The safer, easier way to pay online!" value="Pay Now" class="font-black">
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
        <li class='nav-bar'><a class="global-font nav-link" href="/attendees"> List </a></li>
        <li class='nav-bar'><a class="global-font nav-link f-right" href="/english"> English </a></li>
        <li class='nav-bar'><a class="global-font nav-link f-right" href="/spanish"> Español </a></li>
      </ul>
    </div>
  `
})