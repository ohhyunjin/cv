document.forms["contact_form"].onsubmit = function() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let text = document.getElementById("text_body").value;
    console.log(name, email);
    console.log(text);
}
