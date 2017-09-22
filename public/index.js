//import Vue from 'vue';
//import App from '../views/index.vue'

var app = new Vue({
  el: '#app',
  data: {
    name: 'Edgardo'
  }
})

new Vue({
  el: '#welcome',
  template: `
    <div class='container-fluid'>
      <div>
      	<h1 class='global-font text-center transparent embossed-text'> Welcome! </h1> 
        <h1 class='global-font text-center transparent embossed-text'> Bienvenido! </h1>
      </div>
      <div class='btn-div'>
		    <button type='button' class='global-font button-pink btn-lg'> English </button>
        <button type='button' class='global-font button-pink btn-lg'> Español </button>
      </div>
      <div id='countdown' class='global-font btn-div'>
      </div>
    </div>
  `
})

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

