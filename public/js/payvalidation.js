function readCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function sessionIdToForms(language){
	document.forms["interac-" + language]["sessionID"].value = readCookie("sessionID");
	document.forms["paypal-" + language]["sessionID"].value = readCookie("sessionID");
}

function submitPaypal(language){
	console.log("hey yall");
	formValidated = validateForm('paypal', language);
	console.log(formValidated.toString());
	if(formValidated){
		var params = {
			firstname: document.forms["paypal-" + language]["firstname"].value,
			lastname: document.forms["paypal-" + language]["lastname"].value,
			sessionID: document.forms["paypal-" + language]["sessionID"].value,
			party: document.forms["paypal-" + language]["party"].value,
			party_package: document.forms["paypal-" + language]["os0"].value
		};

		/*makeForm("toNewattend" ,"/newattend", params);
		$('#toNewattend').submit(function(e){
			e.preventDefault();
		});*/
		console.log("newattend added to database");
		return true;
	} else {
		return false;
	}
}

//Makes a form on the current page
function makeForm(id, path, params) {
    var method = "post"; // Set method to post.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    form.setAttribute("id", id);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    //form.submit();
}

// Validate forms for completion
function validateForm(form, language) {
	var firstname = document.forms[form + "-" + language]["firstname"].value;
	var lastname = document.forms[form + "-" + language]["lastname"].value;

	if (firstname == "" || lastname == "") {
	  alert("Please fill out your full name");
	  return false;
	} else {
		return true;
	}
}