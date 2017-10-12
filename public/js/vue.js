var app = new Vue({
  el: '#app',
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
        <table class="del-margin">
          <tr>
            <td>
              <input type="hidden" name="on0" value="Party Option">Select your party package
            </td>
          </tr>
          <tr>
            <td>
              <select name="os0" class='font-black'>
                <option value="Siren/Man Down">Basic Package $80.00 USD</option>
                <option value="Cowgirl/Mamitas">Plus Package $121.00 USD</option>
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
        <table class="del-margin">
          <tr>
            <td>
              <input type="hidden" name="on0" value="Party Option">Elige tu paquete
            </td>
          </tr>
          <tr>
            <td>
              <select name="os0" class='font-black'>
                <option value="Siren/Man Down">Basico $80.00 USD</option>
                <option value="Cowgirl/Mamitas">Plus $121.00 USD</option>
              </select> 
            </td>
          </tr>
        </table>
        <input type="hidden" name="currency_code" value="USD"><br>
        <input type="submit" alt="PayPal - The safer, easier way to pay online!" value="Paga aqui" class="font-black">
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

new Vue({
  el: '#footer',
  template: `
    <div class='footer'>
      <h6 class='global-font text-center'>Website made by Edgardo Cuello</h6>
    </div>
  `
})