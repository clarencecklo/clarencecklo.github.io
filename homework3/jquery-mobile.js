$(document).ready(function() {
$("input[type=submit]").click(function(e) {
var firstname = $("#firstname").val();
var lastname = $("#lastname").val();
var email = $("#email").val();
if (firstname == '' || lastname == '' || email == '') {
e.preventDefault();
alert("Please Fill Required Fields");
}
});
});