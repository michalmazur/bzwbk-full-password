// ==UserScript==
// @name        BZWBK Full Password
// @description Allows you to enter your full password on BZWBK login page.
// @include     https://www.centrum24.pl/centrum24-web/?x=*
// @version     1.0
// ==/UserScript==

/* 
 * It is impossible to identify the login page by the URL alone, so check for
 * the existence of the login form.
 */
if (document.getElementById('pinForm')) {
	var main = function() {
		$('#gotoold').css('margin-top', '15px'); // fix overlap
		
		$('#pinDiv table tbody').append('<tr><td></td><td colspan=20>'
			+ '<input type="password" id="full_password" maxlength="20" style="width: 100%;" />'
			+ '</td><td></td></tr>');
		$('#full_password').focus();
		
		$('#full_password').bind('input', function(event) {
			var password = event.target.value;
			var input_boxes = $('#pinDiv tbody tr:first td input:visible');
			for (var i = 0; i < input_boxes.length; i++) {
				if (!input_boxes[i].disabled) {
					input_boxes[i].value = password.substring(i, i + 1);
				}
			}
		});
	};
	
	var script = document.createElement('script');
	script.type = "text/javascript";
	script.textContent = '(' + main.toString() + ')();';
	document.body.appendChild(script);
}
